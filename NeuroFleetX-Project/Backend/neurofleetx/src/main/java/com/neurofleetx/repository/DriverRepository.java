package com.neurofleetx.repository;

import com.neurofleetx.model.Driver;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DriverRepository extends JpaRepository<Driver, Long> {}
