// package com.neurofleetx.controller;

// import com.neurofleetx.model.Vehicle;
// import com.neurofleetx.repository.VehicleRepository;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.*;

// import java.util.List;

// @CrossOrigin(origins = "http://localhost:5173")
// @RestController
// @RequestMapping("/vehicles")

// public class VehicleController {

//     @Autowired
//     private VehicleRepository repo;

//     @GetMapping
//     public List<Vehicle> getAll() {
//         return repo.findAll();
//     }

//     @PostMapping
//     public Vehicle addVehicle(@RequestBody Vehicle vehicle) {
//         return repo.save(vehicle);
//     }
    
// }

package com.neurofleetx.controller;

import com.neurofleetx.model.Vehicle;
import com.neurofleetx.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/vehicles")
public class VehicleController {

    @Autowired
    private VehicleRepository repo;

    // GET all vehicles
    @GetMapping
    public List<Vehicle> getAll() {
        return repo.findAll();
    }

    // POST add new vehicle
    @PostMapping
    public Vehicle addVehicle(@RequestBody Vehicle vehicle) {
        return repo.save(vehicle);
    }

    // GET vehicle health by ID
    @GetMapping("/{id}/health")
    public Vehicle getVehicleHealth(@PathVariable Long id) {
        return repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Vehicle not found"));
    }

    // PUT update vehicle health
    @PutMapping("/{id}/health")
    public Vehicle updateVehicleHealth(@PathVariable Long id, @RequestBody Vehicle health) {
        Vehicle vehicle = repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Vehicle not found"));

        vehicle.setEngineHealth(health.getEngineHealth());
        vehicle.setBrakesHealth(health.getBrakesHealth());
        vehicle.setAcceleratorHealth(health.getAcceleratorHealth());
        vehicle.setFuelLevel(health.getFuelLevel());

        return repo.save(vehicle);
    }
    
}
