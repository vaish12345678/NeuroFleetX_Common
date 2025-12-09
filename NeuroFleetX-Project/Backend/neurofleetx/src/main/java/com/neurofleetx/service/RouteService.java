// package com.neurofleetx.service;

// import com.fasterxml.jackson.databind.JsonNode;
// import com.fasterxml.jackson.databind.ObjectMapper;
// import com.fasterxml.jackson.databind.node.ArrayNode;
// import com.fasterxml.jackson.databind.node.ObjectNode;
// import com.neurofleetx.dto.RouteRequest;
// import com.neurofleetx.dto.RouteResponse;
// import org.springframework.beans.factory.annotation.Value;
// import org.springframework.stereotype.Service;

// import java.net.URI;
// import java.net.http.HttpClient;
// import java.net.http.HttpRequest;
// import java.net.http.HttpResponse;
// import java.time.Duration;

// @Service
// public class RouteService {

//     @Value("${ors.api.key}")
//     private String orsApiKey;

//     private final ObjectMapper mapper = new ObjectMapper();

//     /**
//      * Calls OpenRouteService directions API for driving-car profile.
//      * Returns distance (meters), duration (seconds) and geometry (encoded polyline).
//      */
//    public RouteResponse getRoute(RouteRequest req) {
//     try {
//         if (orsApiKey == null || orsApiKey.isBlank()) {
//             throw new IllegalStateException("ORS API key is not configured (ors.api.key)");
//         }

//         // Build JSON body correctly
//         ArrayNode coordinates = mapper.createArrayNode();

//         ArrayNode startCoord = mapper.createArrayNode();
//         startCoord.add(req.getStartLng());
//         startCoord.add(req.getStartLat());

//         ArrayNode endCoord = mapper.createArrayNode();
//         endCoord.add(req.getEndLng());
//         endCoord.add(req.getEndLat());

//         coordinates.add(startCoord);
//         coordinates.add(endCoord);

//         ObjectNode requestJson = mapper.createObjectNode();
//         requestJson.set("coordinates", coordinates);

//         String requestBody = requestJson.toString();

//         HttpClient client = HttpClient.newBuilder()
//                 .connectTimeout(Duration.ofSeconds(10))
//                 .build();

//         HttpRequest request = HttpRequest.newBuilder()
//                 .uri(URI.create("https://api.openrouteservice.org/v2/directions/driving-car"))
//                 .timeout(Duration.ofSeconds(20))
//                 .header("Authorization", orsApiKey)
//                 .header("Content-Type", "application/json")
//                 .POST(HttpRequest.BodyPublishers.ofString(requestBody))
//                 .build();

//         HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
//         System.out.println("ORS Status: " + response.statusCode());
// System.out.println("ORS Response Body: " + response.body());
//         int status = response.statusCode();
//         if (status != 200 && status != 201) {
//             throw new RuntimeException("ORS request failed. HTTP " + status + " Body: " + response.body());
//         }

//         JsonNode root = mapper.readTree(response.body());
//         JsonNode routes = root.path("routes");
//         if (!routes.isArray() || routes.size() == 0) {
//             throw new RuntimeException("No routes returned from ORS");
//         }

//         JsonNode first = routes.get(0);
//         JsonNode summary = first.path("summary");
//         double distance = summary.path("distance").asDouble();
//         double duration = summary.path("duration").asDouble();
//         String geometry = first.path("geometry").asText(null);

//         return new RouteResponse(distance, duration, geometry);

//     } catch (Exception ex) {
//         throw new RuntimeException("Failed to fetch route: " + ex.getMessage(), ex);
//     }
// }

// }

package com.neurofleetx.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.neurofleetx.dto.RouteRequest;
import com.neurofleetx.dto.RouteResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;

@Service
public class RouteService {

    @Value("${ors.api.key}")
    private String orsApiKey;

    private final ObjectMapper mapper = new ObjectMapper();

    public RouteResponse getRoute(RouteRequest req) {
        try {
            if (orsApiKey == null || orsApiKey.isBlank()) {
                System.err.println("ORS API key missing!");
                return new RouteResponse(0, 0, null);
            }

            // Build JSON body
            ArrayNode coordinates = mapper.createArrayNode();
            coordinates.add(mapper.createArrayNode().add(req.getStartLng()).add(req.getStartLat()));
            coordinates.add(mapper.createArrayNode().add(req.getEndLng()).add(req.getEndLat()));

            ObjectNode requestJson = mapper.createObjectNode();
            requestJson.set("coordinates", coordinates);

            String requestBody = requestJson.toString();

            HttpClient client = HttpClient.newBuilder()
                    .connectTimeout(Duration.ofSeconds(10))
                    .build();

            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create("https://api.openrouteservice.org/v2/directions/driving-car"))
                    .timeout(Duration.ofSeconds(20))
                    .header("Authorization", orsApiKey)
                    .header("Content-Type", "application/json")
                    .POST(HttpRequest.BodyPublishers.ofString(requestBody))
                    .build();

            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

            // ✅ Log everything for debugging
            System.out.println("ORS Status: " + response.statusCode());
            System.out.println("ORS Response Body: " + response.body());

            if (response.statusCode() != 200 && response.statusCode() != 201) {
                // Don’t throw 500, return zero response
                return new RouteResponse(0, 0, null);
            }

            JsonNode root = mapper.readTree(response.body());
            JsonNode routes = root.path("routes");
            if (!routes.isArray() || routes.size() == 0) {
                System.err.println("No routes returned!");
                return new RouteResponse(0, 0, null);
            }

            JsonNode first = routes.get(0);
            JsonNode summary = first.path("summary");
            double distance = summary.path("distance").asDouble();
            double duration = summary.path("duration").asDouble();
            String geometry = first.path("geometry").asText(null);

            return new RouteResponse(distance, duration, geometry);

        } catch (Exception ex) {
            ex.printStackTrace();
            return new RouteResponse(0, 0, null);
        }
    }
}
