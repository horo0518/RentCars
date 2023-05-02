package com.javatpoint.service;

import org.springframework.data.jpa.repository.JpaRepository;
import com.javatpoint.model.Rental;
public interface RentalRepository extends JpaRepository<Rental,Long> {
}
