package com.javatpoint.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="Cars")
public class Car {
    @Id
    @GeneratedValue
    private long id;//מספר סידורי באתר
    private long LicensePlate;//לוחית רישוי
    private String company;//יצרן הרכב
    private String model;//דגם הרכב
    private int seats;//מספר המושבים ברכב
    private double dayPrice;//מחיר ליום: השכרת רכב לאירוע
    private boolean status;//האם הרכב תפוס
    private String src;


    @ManyToOne//לכל רכב יש צבע אחד
    private Color color;//אוביקט צבע הרכב

    @JsonIgnore//annotation
    @OneToMany(mappedBy = "car")//לכל רכב יש הסטורית השכרות
    private List<Rental> rentalList;


    public Car() {
    }

    public Car(long id, long licensePlate, String company, String model, int seats, Color color, double dayPrice,String src) {
        this.id = id;
        this.LicensePlate = licensePlate;
        this.company = company;
        this.model = model;
        this.seats = seats;
        this.color = color;
        this.dayPrice = dayPrice;
        this.src=src;

    }

    public Color getColor() {
        return color;
    }

    public void setColor(Color color) {
        this.color = color;
    }

    public double getDayPrice() {
        return dayPrice;
    }

    public void setDayPrice(double dayPrice) {
        this.dayPrice = dayPrice;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public long getId() {
        return id;
    }

    public long getLicensePlate() {
        return LicensePlate;
    }

    public void setLicensePlate(long licensePlate) {
        LicensePlate = licensePlate;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public int getSeats() {
        return seats;
    }

    public void setSeats(int seats) {
        this.seats = seats;
    }

    public String getSrc() {
        return src;
    }

    public void setSrc(String src) {
        this.src = src;
    }
}
