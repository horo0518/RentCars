package com.javatpoint.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="Rentals")
public class Rental {
    @Id
    @GeneratedValue
    private int idRental;//מספר סידורי למספר השכרה
    private Date rentalDay;//יום השכרת רכב
    private Date returnDay;//יום החזרה
    private String city;
    private String street;
    private int num;
    private int showHour;//שעת הופעת הרכב בכתובת הלקוח
    private boolean miniBar;//תוספת אפשרות למיני-בר

    @ManyToOne//לכול השכרה יש רכב אחד
    private Car car;

    @ManyToOne//לכל השכרה יש שוכר אחד
    private User user;



    public Rental() {
    }

    public Rental(int idRental,Long idUser,Car car, Date rentalDay, Date returnDay,  String city, String street,int num, int showHour, boolean miniBar) {
      this.car = car;
        this.rentalDay = rentalDay;
        this.returnDay = returnDay;
        this.city = city;
        this.street = street;
        this.num = num;
        this.showHour = showHour;
        this.miniBar = miniBar;
    }

    public int getIdRental() {
        return idRental;
    }

    public void setIdRental(int idRental) {
        this.idRental = idRental;
    }



    public Car getCar() {
        return car;
    }

   public void setCar(Car car) {
        this.car = car;
    }

    public Date getRentalDay() {
        return rentalDay;
    }

    public void setRentalDay(Date rentalDay) {
        this.rentalDay = rentalDay;
    }

    public Date getReturnDay() {
        return returnDay;
    }

    public void setReturnDay(Date returnDay) {
        this.returnDay = returnDay;
    }


    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public int getNum() {
        return num;
    }

    public void setNum(int num) {
        this.num = num;
    }

    public int getShowHour() {
        return showHour;
    }

    public void setShowHour(int showHour) {
        this.showHour = showHour;
    }

    public boolean isMiniBar() {
        return miniBar;
    }

    public void setMiniBar(boolean miniBar) {
        this.miniBar = miniBar;
    }
}
