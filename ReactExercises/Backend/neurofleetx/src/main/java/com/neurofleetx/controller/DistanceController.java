// package com.neurofleetx.controller;

// import com.neurofleetx.model.DistanceRequest;
// import com.neurofleetx.model.DistanceService;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.*;

// import java.util.Map;

// @CrossOrigin(origins = "http://localhost:5173")
// @RestController
// @RequestMapping("/api")
// public class DistanceController {

//     @Autowired
//     private DistanceService distanceService;

//     @PostMapping("/route-info")
//     public Map<String, Object> routeInfo(@RequestBody DistanceRequest req) {
//         return distanceService.getRouteInfo(req.getOrigin(), req.getDestination());
//     }

package com.neurofleetx.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/distance")
public class DistanceController {

    @Value("${google.api.key}")
    private String apiKey;

    @GetMapping("/calculate")
    public ResponseEntity<?> getDistance(
            @RequestParam String origin,
            @RequestParam String destination) {

        try {
            // Replace spaces with + for Google API
            origin = origin.replace(" ", "+");
            destination = destination.replace(" ", "+");

            String url = "https://maps.googleapis.com/maps/api/distancematrix/json?origins="
                    + origin + "&destinations=" + destination + "&key=" + apiKey;

            RestTemplate restTemplate = new RestTemplate();
            String response = restTemplate.getForObject(url, String.class);

            return ResponseEntity.ok(response);

        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error: " + e.getMessage());
        }
    }
}
