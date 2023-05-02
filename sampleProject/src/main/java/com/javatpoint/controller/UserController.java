package com.javatpoint.controller;

import com.javatpoint.model.Rental;
import com.javatpoint.model.User;
import com.javatpoint.service.UserRepository;
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
@RequestMapping("/api/user")//זה ההתחלה של כל הפונקציות'
public class UserController {
    private  final UserRepository userRepository;

    @Autowired
    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/{id}")
    //ResponseEntity-אובייקט שמכיל את כל התגובה כולל המשתמש עצמו וכולל קוד סטטוס
    public ResponseEntity<?> getUser(@PathVariable Long id)//@PathVariable-משתנה שמגיע מהניתוב
    {
        Optional<User> u =userRepository.findById(id);
        return u.map(user1 -> ResponseEntity.ok().body(user1))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User u) throws URISyntaxException {
        User newUser  = userRepository.save(u);
        return ResponseEntity.created(new URI("/api/user/"+newUser.getId())).body(newUser);
    }

    //עדכון של משתמש שכבר קיים
    @PutMapping("/{id}")
    public ResponseEntity<?> updateUser(@PathVariable Long id, @RequestBody User u) throws URISyntaxException {
        if(id!=u.getId())//במקרה שהקוד ששלחנו בכלל לא תואם לאובייקט ששלחנו
            return ResponseEntity.badRequest().build();
        User updateUser=userRepository.save(u);
        return ResponseEntity.created(new URI("/api/rental/"+updateUser.getId())).body(updateUser);
    }

    @PostMapping("/signIn")
    public ResponseEntity<?> findUser(@RequestBody User u) throws URISyntaxException {
        Optional<User> newUser = userRepository.findUserByMailEquals(u.getMail());
        return newUser.map(user -> user.getPassword().equals(u.getPassword())
                ? ResponseEntity.ok().body(u) : new ResponseEntity<>(HttpStatus.UNAUTHORIZED))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));

    }

        @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id)
    {
        userRepository.deleteById(id);
        return ResponseEntity.noContent().build();

    }


}
