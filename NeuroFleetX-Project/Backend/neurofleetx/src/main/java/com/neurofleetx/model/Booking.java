// package com.neurofleetx.model;

// import jakarta.persistence.*;

// @Entity
// @Table(name = "bookings")
// public class Booking {

//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;

//     private String userName;
//     private String vehicleNumber;
//     private String source;
//     private String destination;
//     private String date;
//     private String status;

//     // Getters & Setters
//     public Long getId() { return id; }
//     public void setId(Long id) { this.id = id; }

//     public String getUserName() { return userName; }
//     public void setUserName(String userName) { this.userName = userName; }

//     public String getVehicleNumber() { return vehicleNumber; }
//     public void setVehicleNumber(String vehicleNumber) { this.vehicleNumber = vehicleNumber; }

//     public String getSource() { return source; }
//     public void setSource(String source) { this.source = source; }

//     public String getDestination() { return destination; }
//     public void setDestination(String destination) { this.destination = destination; }

//     public String getDate() { return date; }
//     public void setDate(String date) { this.date = date; }

//     public String getStatus() { return status; }
//     public void setStatus(String status) { this.status = status; }
// }


// package com.neurofleetx.model;

// import jakarta.persistence.*;
// import java.time.LocalDateTime;

// @Entity
// public class Booking {

//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;

//     @ManyToOne
//     @JoinColumn(name = "vehicle_id")
//     private Vehicle vehicle;

//     @ManyToOne
//     @JoinColumn(name = "driver_id")
//     private Driver driver;

//     private String fromLocation;
//     private String toLocation;
//     private LocalDateTime tripTime;

//     // Getters and Setters
//     public Long getId() { return id; }
//     public Vehicle getVehicle() { return vehicle; }
//     public void setVehicle(Vehicle vehicle) { this.vehicle = vehicle; }
//     public Driver getDriver() { return driver; }
//     public void setDriver(Driver driver) { this.driver = driver; }
//     public String getFromLocation() { return fromLocation; }
//     public void setFromLocation(String fromLocation) { this.fromLocation = fromLocation; }
//     public String getToLocation() { return toLocation; }
//     public void setToLocation(String toLocation) { this.toLocation = toLocation; }
//     public LocalDateTime getTripTime() { return tripTime; }
//     public void setTripTime(LocalDateTime tripTime) { this.tripTime = tripTime; }
// }


// package com.neurofleetx.model;

// import jakarta.persistence.*;
// import java.time.LocalDateTime;

// @Entity
// public class Booking {

//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;

//     @ManyToOne
//     @JoinColumn(name = "vehicle_id")
//     private Vehicle vehicle;

//     @ManyToOne
//     @JoinColumn(name = "driver_id")
//     private Driver driver;

//     private String fromLocation;
//     private String toLocation;
//     private LocalDateTime tripTime;

//     // NEW FIELD
//     private String status; // Pending, Assigned, Ongoing, Completed

//     // ==================== Getters & Setters ====================

//     public Long getId() { return id; }

//     public Vehicle getVehicle() { return vehicle; }
//     public void setVehicle(Vehicle vehicle) { this.vehicle = vehicle; }

//     public Driver getDriver() { return driver; }
//     public void setDriver(Driver driver) { this.driver = driver; }

//     public String getFromLocation() { return fromLocation; }
//     public void setFromLocation(String fromLocation) { this.fromLocation = fromLocation; }

//     public String getToLocation() { return toLocation; }
//     public void setToLocation(String toLocation) { this.toLocation = toLocation; }

//     public LocalDateTime getTripTime() { return tripTime; }
//     public void setTripTime(LocalDateTime tripTime) { this.tripTime = tripTime; }

//     // NEW GETTER + SETTER
//     public String getStatus() { return status; }
//     public void setStatus(String status) { this.status = status; }
// }

package com.neurofleetx.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "vehicle_id")
    private Vehicle vehicle;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "driver_id")
    private Driver driver;

    private String fromLocation;
    private String toLocation;
    private LocalDateTime tripTime;
    private String status;

    // ==================== Getters & Setters ====================

    public Long getId() {
        return id;
    }

    public Vehicle getVehicle() {
        return vehicle;
    }

    public void setVehicle(Vehicle vehicle) {
        this.vehicle = vehicle;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Driver getDriver() {
        return driver;
    }

    public void setDriver(Driver driver) {
        this.driver = driver;
    }

    public String getFromLocation() {
        return fromLocation;
    }

    public void setFromLocation(String fromLocation) {
        this.fromLocation = fromLocation;
    }

    public String getToLocation() {
        return toLocation;
    }

    public void setToLocation(String toLocation) {
        this.toLocation = toLocation;
    }

    public LocalDateTime getTripTime() {
        return tripTime;
    }

    public void setTripTime(LocalDateTime tripTime) {
        this.tripTime = tripTime;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
