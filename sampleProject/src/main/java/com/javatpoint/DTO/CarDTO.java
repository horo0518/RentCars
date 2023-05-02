package com.javatpoint.DTO;

public class CarDTO {


    private long id;//מספר סידורי באתר
    private String company;//יצרן הרכב
    private String model;//דגם הרכב
    private int seats;//מספר המושבים ברכב
    private double dayPrice;//מחיר ליום: השכרת רכב לאירוע
    private boolean status;//האם הרכב תפוס
    private int colorId;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
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

    public double getDayPrice() {
        return dayPrice;
    }

    public void setDayPrice(double dayPrice) {
        this.dayPrice = dayPrice;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public int getColorId() {
        return colorId;
    }

    public void setColorId(int colorId) {
        this.colorId = colorId;
    }
}
