package com.javatpoint.service;

import org.springframework.data.jpa.repository.JpaRepository;
import com.javatpoint.model.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Long> {

    Optional<User> findByMailAndPassword(String mail,String password);//פונקציה שמחזירה משתמש לפי המייל שלו שמתקבל ולפי הסיסמא

    Optional<User> findUserByMailEquals(String mail);
}
