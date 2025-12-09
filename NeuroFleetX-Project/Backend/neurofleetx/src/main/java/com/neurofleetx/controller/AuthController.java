package com.neurofleetx.controller;

import com.neurofleetx.model.User;
import com.neurofleetx.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepo;

    // ============ SIGNUP =============
    @PostMapping("/signup")
public User signup(@RequestBody User user) {
    User existing = userRepo.findByEmail(user.getEmail());
    if (existing != null) {
        throw new RuntimeException("Email already registered!");
    }

    // Make sure active is set
    if (user.getActive() == null) {
        user.setActive(true);
    }

    return userRepo.save(user);
}
    // ============ LOGIN ==============
    @PostMapping("/login")
    public User login(@RequestBody User loginData) {
        User user = userRepo.findByEmail(loginData.getEmail());

        if (user == null || !user.getPassword().equals(loginData.getPassword())) {
            throw new RuntimeException("Invalid email or password");
        }

        return user; // frontend stores role
    }
}
