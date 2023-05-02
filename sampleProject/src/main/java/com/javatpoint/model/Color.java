package com.javatpoint.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="Colors")
public class Color {
    @Id
    @GeneratedValue
    private  int id;
    private  String name;
    private  String description;

    @JsonIgnore
    @OneToMany(mappedBy = "color")//לכול צבע יש הרבה רכבים
    private List<Car> cars;

    public Color(String color, int idColor, String description) {
        this.name = color;
        this.id = idColor;
        this.description = description;
    }


    public Color() {
    }

    public String getName() {
        return name;
    }

    public void setName(String color) {
        this.name = color;
    }

    public int getId() {
        return id;
    }

    public void setId(int idColor) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Car> getCars() {
        return cars;
    }

    public void setCars(List<Car> cars) {
        this.cars = cars;
    }
}
