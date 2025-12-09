package com.neurofleetx.model;
import jakarta.persistence.*;

@Entity
public class Driver {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private String gmailAccount;

    // Constructors
    public Driver() {}
    public Driver(String name, String email, String gmailAccount) {
        this.name = name;
        this.email = email;
        this.gmailAccount = gmailAccount;
    }

    // Getters & Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getGmailAccount() { return gmailAccount; }
    public void setGmailAccount(String gmailAccount) { this.gmailAccount = gmailAccount; }
}
