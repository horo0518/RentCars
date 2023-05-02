package com.javatpoint.service;

import com.javatpoint.DTO.CarDTO;
import com.javatpoint.model.Car;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface MapStructMapper {

    @Mapping(source = "color.id",target = "colorId")
    public CarDTO carToDto(Car C);
    @Mapping(source = "colorId",target = "color.id")
    public Car DtoToCar(CarDTO d);

    public List<CarDTO> carsToDtos(List<Car> list);


}


