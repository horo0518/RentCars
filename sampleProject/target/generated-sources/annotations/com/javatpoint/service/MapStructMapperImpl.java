package com.javatpoint.service;

import com.javatpoint.DTO.CarDTO;
import com.javatpoint.model.Car;
import com.javatpoint.model.Color;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-01-13T11:37:19+0200",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 1.8.0_91 (Oracle Corporation)"
)
@Component
public class MapStructMapperImpl implements MapStructMapper {

    @Override
    public CarDTO carToDto(Car C) {
        if ( C == null ) {
            return null;
        }

        CarDTO carDTO = new CarDTO();

        carDTO.setColorId( cColorId( C ) );
        carDTO.setId( C.getId() );
        carDTO.setCompany( C.getCompany() );
        carDTO.setModel( C.getModel() );
        carDTO.setSeats( C.getSeats() );
        carDTO.setDayPrice( C.getDayPrice() );

        return carDTO;
    }

    @Override
    public Car DtoToCar(CarDTO d) {
        if ( d == null ) {
            return null;
        }

        Car car = new Car();

        car.setColor( carDTOToColor( d ) );
        car.setDayPrice( d.getDayPrice() );
        car.setCompany( d.getCompany() );
        car.setId( d.getId() );
        car.setModel( d.getModel() );
        car.setSeats( d.getSeats() );

        return car;
    }

    @Override
    public List<CarDTO> carsToDtos(List<Car> list) {
        if ( list == null ) {
            return null;
        }

        List<CarDTO> list1 = new ArrayList<CarDTO>( list.size() );
        for ( Car car : list ) {
            list1.add( carToDto( car ) );
        }

        return list1;
    }

    private int cColorId(Car car) {
        if ( car == null ) {
            return 0;
        }
        Color color = car.getColor();
        if ( color == null ) {
            return 0;
        }
        int id = color.getId();
        return id;
    }

    protected Color carDTOToColor(CarDTO carDTO) {
        if ( carDTO == null ) {
            return null;
        }

        Color color = new Color();

        color.setId( carDTO.getColorId() );

        return color;
    }
}
