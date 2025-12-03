package com.neurofleetx.model;

import jakarta.persistence.*;

@Entity
@Table(name = "vehicles")
public class Vehicle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String vehicleNumber;
    private String type;
    private double fuelConsumption; // liters per 100 km
    private double distanceTravelled; // km
    private boolean active;
   
    private int engineHealth;       // 0 - 100
    private int brakesHealth;       // 0 - 100
    private int acceleratorHealth;  // 0 - 100
    private int fuelLevel;          // 0 - 100
    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getVehicleNumber() {
        return vehicleNumber;
    }

    public void setVehicleNumber(String vehicleNumber) {
        this.vehicleNumber = vehicleNumber;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public double getFuelConsumption() {
        return fuelConsumption;
    }

    public void setFuelConsumption(double fuelConsumption) {
        this.fuelConsumption = fuelConsumption;
    }

    public double getDistanceTravelled() {
        return distanceTravelled;
    }

    public void setDistanceTravelled(double distanceTravelled) {
        this.distanceTravelled = distanceTravelled;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }
     
  

    public int getEngineHealth() { return engineHealth; }
    public void setEngineHealth(int engineHealth) { this.engineHealth = engineHealth; }

    public int getBrakesHealth() { return brakesHealth; }
    public void setBrakesHealth(int brakesHealth) { this.brakesHealth = brakesHealth; }

    public int getAcceleratorHealth() { return acceleratorHealth; }
    public void setAcceleratorHealth(int acceleratorHealth) { this.acceleratorHealth = acceleratorHealth; }

    public int getFuelLevel() { return fuelLevel; }
    public void setFuelLevel(int fuelLevel) { this.fuelLevel = fuelLevel; }
}
