// package com.neurofleetx.controller;

// import com.neurofleetx.model.Booking;
// import com.neurofleetx.repository.BookingRepository;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.*;

// import java.util.List;

// @CrossOrigin(origins = "http://localhost:5173") // React app URL
// @RestController
// @RequestMapping("/api/bookings")
// public class BookingController {

//     @Autowired
//     private BookingRepository repo;

//     @GetMapping
//     public List<Booking> getAllBookings() {
//         return repo.findAll();
//     }

//     @PostMapping
//     public Booking bookVehicle(@RequestBody Booking booking) {
//         booking.setStatus("Pending"); // default status
//         return repo.save(booking);
//     }
// }

package com.neurofleetx.controller;
import com.neurofleetx.model.User;
import com.neurofleetx.model.Booking;
import com.neurofleetx.model.Driver;
import com.neurofleetx.model.Vehicle;
import com.neurofleetx.repository.BookingRepository;
import com.neurofleetx.repository.DriverRepository;
import com.neurofleetx.repository.UserRepository;
import com.neurofleetx.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bookings")
@CrossOrigin(origins = "http://localhost:5173")
public class BookingController {

    @Autowired
private UserRepository userRepository;
    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private VehicleRepository vehicleRepository;

    @Autowired
    private DriverRepository driverRepository;

    // ============================
    // 1️⃣ CUSTOMER CREATES BOOKING
    // ============================
@PostMapping
public Booking createBooking(@RequestBody Booking bookingRequest) {

    // ============ USER NULL CHECK ============
    if (bookingRequest.getUser() == null || bookingRequest.getUser().getId() == null) {
        throw new RuntimeException("User ID is missing in request!");
    }

    // ============ VEHICLE NULL CHECK ============
    if (bookingRequest.getVehicle() == null || bookingRequest.getVehicle().getId() == null) {
        throw new RuntimeException("Vehicle ID is missing in request!");
    }

    User user = userRepository.findById(bookingRequest.getUser().getId())
            .orElseThrow(() -> new RuntimeException("User not found"));

    Vehicle vehicle = vehicleRepository.findById(bookingRequest.getVehicle().getId())
            .orElseThrow(() -> new RuntimeException("Vehicle not found"));

    Booking booking = new Booking();
    booking.setUser(user);
    booking.setVehicle(vehicle);
    booking.setDriver(null);
    booking.setFromLocation(bookingRequest.getFromLocation());
    booking.setToLocation(bookingRequest.getToLocation());
    booking.setTripTime(bookingRequest.getTripTime());
    booking.setStatus("Pending");

    return bookingRepository.save(booking);
}

    // ============================
    // 2️⃣ ADMIN GETS ALL BOOKINGS
    // ============================

    @GetMapping
    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    // ============================
    // 3️⃣ ADMIN ASSIGNS DRIVER
    // ============================

   @PutMapping("/{bookingId}/assign/{driverId}")
public Booking assignDriver(
        @PathVariable Long bookingId,
        @PathVariable Long driverId
) {
    Booking booking = bookingRepository.findById(bookingId)
            .orElseThrow(() -> new RuntimeException("Booking not found"));

    Driver driver = driverRepository.findById(driverId)
            .orElseThrow(() -> new RuntimeException("Driver not found"));

    booking.setDriver(driver);
    booking.setStatus("Assigned");

    return bookingRepository.save(booking);
}

    // ============================
    // 4️⃣ DRIVER STARTS TRIP
    // ============================

    @PutMapping("/start/{bookingId}")
    public Booking startTrip(@PathVariable Long bookingId) {

        Booking booking = bookingRepository.findById(bookingId)
                .orElseThrow(() -> new RuntimeException("Booking not found"));

        booking.setStatus("Ongoing");
        return bookingRepository.save(booking);
    }

    // ============================
    // 5️⃣ DRIVER COMPLETES TRIP
    // ============================

    @PutMapping("/complete/{bookingId}")
    public Booking completeTrip(@PathVariable Long bookingId) {

        Booking booking = bookingRepository.findById(bookingId)
                .orElseThrow(() -> new RuntimeException("Booking not found"));

        booking.setStatus("Completed");
        return bookingRepository.save(booking);
    }
}
