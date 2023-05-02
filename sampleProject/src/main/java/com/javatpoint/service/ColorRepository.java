package com.javatpoint.service;

import com.javatpoint.model.Color;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ColorRepository extends JpaRepository<Color,Long> {
    Optional<Color> findCarsByName(String name);

}
