package com.javatpoint.controller;

import com.javatpoint.DTO.CarDTO;
import com.javatpoint.model.Car;
import com.javatpoint.service.CarRepository;
import com.javatpoint.service.MapStructMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/api/car")//זה ההתחלה של כל הפונקציות'
public class CarController {

     private final CarRepository carRepository;
     private final MapStructMapper mapStructMapper;
     @Autowired
    public CarController(CarRepository carRepository,MapStructMapper mapStructMapper) {
        this.carRepository = carRepository;
        this.mapStructMapper=mapStructMapper;
     }

 @GetMapping("/cars")
        public List<Car> getAllCars() {
            return carRepository.findAll();
        }

    @GetMapping("/{id}")
    //ResponseEntity-אובייקט שמכיל את כל התגובה כולל הרכב עצמו וכולל קוד סטטוס
    public ResponseEntity<?> getCar(@PathVariable Long id)//@PathVariable-משתנה שמגיע מהניתוב
    {
        Optional<Car> c =carRepository.findById(id);
        return c.map(car1 -> ResponseEntity.ok().body(car1))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
//    @GetMapping("/cars/{color}")
//    //ResponseEntity-אובייקט שמכיל את כל התגובה כולל הרכב עצמו וכולל קוד סטטוס
//    public ResponseEntity<?> getCarsByColor(@PathVariable String color)//@PathVariable-משתנה שמגיע מהניתוב
//    {
//        Optional<Car> c =carRepository.findCarsByColor(color);
//        return c.map(car1 -> ResponseEntity.ok().body(car1))
//                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
//    }
//    @GetMapping("/{name}")
//    //ResponseEntity-אובייקט שמכיל את כל התגובה כולל הרכב עצמו וכולל קוד סטטוס
//    public ResponseEntity<?> getCarsByName(@PathVariable String name)//@PathVariable-משתנה שמגיע מהניתוב
//    {
//        Optional<Car> c =carRepository.findCarsByColor(name);
//        return c.map(car1 -> ResponseEntity.ok().body(car1))
//                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
//    }


//הוספה של רכב חדש
    @PostMapping
    public ResponseEntity<CarDTO> createCar(@RequestBody CarDTO c) throws URISyntaxException {
        Car newCar = carRepository.save(mapStructMapper.DtoToCar(c));
        return ResponseEntity.created(new URI("/api/car/"+newCar.getId())).body(mapStructMapper.carToDto(newCar));
    }

    //עדכון של רכב שכבר קיים
    @PutMapping("/{id}")
    public ResponseEntity<?> updateCar(@PathVariable Long id,@RequestBody Car c) throws URISyntaxException {
        if(id!=c.getId())//במקרה שהקוד ששלחנו בכלל לא תואם לאובייקט ששלחנו
            return ResponseEntity.badRequest().build();
       Car updateCar=carRepository.save(c);
        return ResponseEntity.created(new URI("/api/car/"+updateCar.getId())).body(updateCar);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCar(@PathVariable Long id)
    {
        carRepository.deleteById(id);
        return ResponseEntity.noContent().build();

    }

}

