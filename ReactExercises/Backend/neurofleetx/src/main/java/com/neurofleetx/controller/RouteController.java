package com.neurofleetx.controller;

import com.neurofleetx.dto.RouteRequest;
import com.neurofleetx.dto.RouteResponse;
import com.neurofleetx.service.RouteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/route")
@CrossOrigin(origins = "*") // adjust origin in prod
public class RouteController {

    private final RouteService routeService;

    @Autowired
    public RouteController(RouteService routeService) {
        this.routeService = routeService;
    }

    @PostMapping("/optimize")
    public RouteResponse optimizeRoute(@RequestBody RouteRequest req) {
        // Basic validation
        if (Double.isNaN(req.getStartLat()) || Double.isNaN(req.getStartLng()) ||
            Double.isNaN(req.getEndLat()) || Double.isNaN(req.getEndLng())) {
            throw new IllegalArgumentException("Invalid coordinates");
        }

        return routeService.getRoute(req);
    }
}
// // RouteController.java
//  package com.neurofleetx.controller;

// import org.springframework.beans.factory.annotation.Value;
// import org.springframework.http.*;
// import org.springframework.web.bind.annotation.*;
// import org.springframework.web.client.RestTemplate;

// import java.util.*;

// @RestController
// @RequestMapping("/route")
// @CrossOrigin(origins = "*")
// public class RouteController {

//     @Value("${ors.api.key}")
//     private String orsApiKey;

//     private RestTemplate restTemplate = new RestTemplate();

//     @PostMapping("/optimize")
//     public Map<String, Object> optimizeRoute(@RequestBody Map<String, String> body) {
//         try {
//             String startAddress = body.get("startAddress");
//             String endAddress = body.get("endAddress");

//             // 1️⃣ Geocode start
//             Map<String, Object> startCoords = geocode(startAddress);
//             Map<String, Object> endCoords = geocode(endAddress);

//             double startLng = (double) startCoords.get("lng");
//             double startLat = (double) startCoords.get("lat");
//             double endLng = (double) endCoords.get("lng");
//             double endLat = (double) endCoords.get("lat");

//             // 2️⃣ Call Directions API
//             String directionsUrl = "https://api.openrouteservice.org/v2/directions/driving-car";
//             Map<String, Object> reqBody = Map.of(
//                     "coordinates", List.of(
//                             List.of(startLng, startLat),
//                             List.of(endLng, endLat)
//                     )
//             );

//             HttpHeaders headers = new HttpHeaders();
//             headers.set("Authorization", orsApiKey);
//             headers.setContentType(MediaType.APPLICATION_JSON);
//             HttpEntity<Map<String, Object>> entity = new HttpEntity<>(reqBody, headers);

//             ResponseEntity<Map> resp = restTemplate.exchange(directionsUrl, HttpMethod.POST, entity, Map.class);

//             Map<String, Object> route = (Map<String, Object>) ((List) resp.getBody().get("features")).get(0);
//             Map<String, Object> props = (Map<String, Object>) route.get("properties");

//             Map<String, Object> result = new HashMap<>();
//             result.put("distance", props.get("summary") instanceof Map ? ((Map) props.get("summary")).get("distance") : 0);
//             result.put("duration", props.get("summary") instanceof Map ? ((Map) props.get("summary")).get("duration") : 0);
//             result.put("geometry", route.get("geometry").get("coordinates") != null ? route.get("geometry").get("coordinates") : null);

//             return result;

//         } catch (Exception e) {
//             e.printStackTrace();
//             return Map.of("error", e.getMessage());
//         }
//     }

//     private Map<String, Object> geocode(String address) {
//         String geocodeUrl = "https://api.openrouteservice.org/geocode/search?api_key=" + orsApiKey + "&text=" + address;
//         Map resp = restTemplate.getForObject(geocodeUrl, Map.class);
//         List features = (List) resp.get("features");
//         if (features.isEmpty()) throw new RuntimeException("Address not found: " + address);
//         Map geometry = (Map) ((Map) features.get(0)).get("geometry");
//         List coords = (List) geometry.get("coordinates");
//         Map<String, Object> result = new HashMap<>();
//         result.put("lng", coords.get(0));
//         result.put("lat", coords.get(1));
//         return result;
//     }
// }
