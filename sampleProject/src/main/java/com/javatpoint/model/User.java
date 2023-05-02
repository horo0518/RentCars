package com.javatpoint.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="Users")
public class User {
   @Id
   @GeneratedValue
    private Long id;
    private String tz;
    private String password;
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private String mail;
    private int status;
  @JsonIgnore
  @OneToMany(mappedBy = "user")//לכל משתמש יש לפחות השכרה אחת
  private List<Rental> rentalList;


  public User() {

  }

  public User(Long id, String tz, String password, String firstName, String lastName, String phoneNumber, String mail, int status) {
    this.id = id;
    this.tz = tz;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.mail = mail;
    this.status = status;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getTz() {
    return tz;
  }

  public void setTz(String tz) {
    this.tz = tz;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public String getLastName() {
    return lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  public String getPhoneNumber() {
    return phoneNumber;
  }

  public void setPhoneNumber(String phoneNumber) {
    this.phoneNumber = phoneNumber;
  }

  public String getMail() {
    return mail;
  }

  public void setMail(String mail) {
    this.mail = mail;
  }

  public int getStatus() {
    return status;
  }

  public void setStatus(int status) {
    this.status = status;
  }
}