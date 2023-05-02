package com.javatpoint.controller;


import com.javatpoint.model.Color;
import com.javatpoint.service.ColorRepository;
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
@RequestMapping("/api/color")//זה ההתחלה של כל הפונקציות'
public class ColorController {

    private final ColorRepository colorRepository;
    @Autowired
    public ColorController(ColorRepository colorRepository) {
        this.colorRepository = colorRepository;
    }




    @GetMapping("/colors")
    public List<Color> getAllColors() {
        return colorRepository.findAll();
    }
    @GetMapping("/{id}")
    //ResponseEntity-אובייקט שמכיל את כל התגובה כולל הרכב עצמו וכולל קוד סטטוס
    public ResponseEntity<?> getColor(@PathVariable Long id)//@PathVariable-משתנה שמגיע מהניתוב
    {
        Optional<Color> c =colorRepository.findById(id);
        return c.map(color1 -> ResponseEntity.ok().body(color1))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
//@GetMapping("/{name}")
//    public ResponseEntity<?> getCarsWithSameColor(@PathVariable String name)//@PathVariable-מקבל צבע ומחזיר רשימה של כל הרכבים באותו צבע
//    {
//        Optional<Color> c =colorRepository.findCarsByName(name);
//        return c.map(color1 -> ResponseEntity.ok().body(color1))
//                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
//    }


    //הוספה של רכב חדש
    @PostMapping
    public ResponseEntity<Color> createColor(@RequestBody Color c) throws URISyntaxException {
        Color newColor = colorRepository.save(c);
        return ResponseEntity.created(new URI("/api/color/"+newColor.getId())).body(newColor);
    }

    //עדכון של רכב שכבר קיים
    @PutMapping("/{id}")
    public ResponseEntity<?> updateColor(@PathVariable Long id,@RequestBody Color c) throws URISyntaxException {
        if(id!=c.getId())//במקרה שהקוד ששלחנו בכלל לא תואם לאובייקט ששלחנו
            return ResponseEntity.badRequest().build();
        Color updateColor=colorRepository.save(c);
        return ResponseEntity.created(new URI("/api/color/"+updateColor.getId())).body(updateColor);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteColor(@PathVariable Long id)
    {
        colorRepository.deleteById(id);
        return ResponseEntity.noContent().build();

    }


}
