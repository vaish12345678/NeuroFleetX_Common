package com.neurofleetx.controller;

import com.neurofleetx.model.Driver;
import com.neurofleetx.repository.DriverRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/drivers")
public class DriverController {

    @Autowired
    private DriverRepository driverRepository;

    @GetMapping
    public List<Driver> getAllDrivers() {
        return driverRepository.findAll();
    }

    @PostMapping
    public Driver addDriver(@RequestBody Driver driver) {
        return driverRepository.save(driver);
    }
}
