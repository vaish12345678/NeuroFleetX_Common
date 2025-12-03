package com.neurofleetx.neurofleetx;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/")
    public String hello() {
        return "🚀 Spring Boot is working fine!";
    }
}
