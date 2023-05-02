package com.javatpoint.service;

import com.javatpoint.model.Car;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface CarRepository extends JpaRepository<Car,Long> {
    Optional<Car> findCarsByColor(String color);
//    public List<Car> findCarsByNameContains(String name);
//    public List<Car> findCarByColor(String color);
//
//
//    Optional<Car> findCarsByColor(String color);
//
//    Optional<Car> findCarsByColorName(String color);
}
