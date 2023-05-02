package com.javatpoint.controller;

import com.javatpoint.model.Rental;
import com.javatpoint.service.RentalRepository;
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
@RequestMapping("/api/rental")//זה ההתחלה של כל הפונקציות'
public class RentalController {
    private final RentalRepository rentalRepository;

    @Autowired
    public RentalController(RentalRepository rentalRepository) {
        this.rentalRepository = rentalRepository;
    }



    @GetMapping("/rentals")
    public List<Rental> getAllRentals() {
        return rentalRepository.findAll();
    }
    @GetMapping("/{idRental}")
    //ResponseEntity-אובייקט שמכיל את כל התגובה כולל ההשכרה עצמו וכולל קוד סטטוס
    public ResponseEntity<?> getRental(@PathVariable Long idRental)//@PathVariable-משתנה שמגיע מהניתוב
    {
        Optional<Rental> r =rentalRepository.findById(idRental);
        return r.map(rental1 -> ResponseEntity.ok().body(rental1))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    //הוספה של השכרה חדש
    @PostMapping
    public ResponseEntity<Rental> createRental(@RequestBody Rental c) throws URISyntaxException {
        Rental newRental = rentalRepository.save(c);
        return ResponseEntity.created(new URI("/api/rental/"+newRental.getIdRental())).body(newRental);
    }

    //עדכון של השכרה שכבר קיים
    @PutMapping("/{id}")
    public ResponseEntity<?> updateRental(@PathVariable Long id, @RequestBody Rental r) throws URISyntaxException {
        if(id!=r.getIdRental())//במקרה שהקוד ששלחנו בכלל לא תואם לאובייקט ששלחנו
            return ResponseEntity.badRequest().build();
        Rental updateRental=rentalRepository.save(r);
        return ResponseEntity.created(new URI("/api/rental/"+updateRental.getIdRental())).body(updateRental);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRental(@PathVariable Long id)
    {
        rentalRepository.deleteById(id);
        return ResponseEntity.noContent().build();

    }

}
