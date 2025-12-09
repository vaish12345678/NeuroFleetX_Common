package com.neurofleetx.model;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.Map;
import java.util.List;

@Service
public class DistanceService {

    @Value("${google.api.key}")
    private String apiKey;

    private final RestTemplate rest = new RestTemplate();

    // returns route info as Map { distanceText, distanceMeters, durationText, durationSeconds }
    public Map<String, Object> getRouteInfo(String origin, String destination) {
        try {
            String o = URLEncoder.encode(origin, StandardCharsets.UTF_8);
            String d = URLEncoder.encode(destination, StandardCharsets.UTF_8);

            // Use Distance Matrix API (road distance & duration)
            String dmUrl = "https://maps.googleapis.com/maps/api/distancematrix/json?origins=" +
                    o + "&destinations=" + d + "&key=" + apiKey + "&units=metric";

            Map dmResp = rest.getForObject(dmUrl, Map.class);

            List rows = (List) dmResp.get("rows");
            if (rows == null || rows.isEmpty()) throw new RuntimeException("No rows in DM response");

            Map element = (Map) ((List) ((Map) rows.get(0)).get("elements")).get(0);

            Map distance = (Map) element.get("distance");
            Map duration = (Map) element.get("duration");

            String distanceText = distance != null ? (String) distance.get("text") : null;
            Integer distanceMeters = distance != null ? ((Number) distance.get("value")).intValue() : null;

            String durationText = duration != null ? (String) duration.get("text") : null;
            Integer durationSeconds = duration != null ? ((Number) duration.get("value")).intValue() : null;

            return Map.of(
                    "distanceText", distanceText,
                    "distanceMeters", distanceMeters,
                    "durationText", durationText,
                    "durationSeconds", durationSeconds
            );
        } catch (Exception ex) {
            ex.printStackTrace();
            return Map.of("error", ex.getMessage());
        }
    }
}