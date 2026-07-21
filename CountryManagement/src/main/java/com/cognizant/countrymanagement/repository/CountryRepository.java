package com.cognizant.countrymanagement.repository;

import com.cognizant.countrymanagement.entity.Country;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CountryRepository extends JpaRepository<Country, String> {
    Country findByName(String name);

    List<Country> findByNameContainingIgnoreCaseOrderByNameAsc(String text);



}