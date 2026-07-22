package com.cognizant.springresthandson.service;

import com.cognizant.springresthandson.model.Country;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CountryService {

    private final List<Country> countries = new ArrayList<>();

    public CountryService() {
        countries.add(new Country("IN", "India"));
        countries.add(new Country("US", "United States"));
        countries.add(new Country("JP", "Japan"));
    }

    public Country getCountry(String code) {
        for (Country country : countries) {
            if (country.getCode().equalsIgnoreCase(code)) {
                return country;
            }
        }
        return null;
    }
    public List<Country> getCountries() {
        return countries;
    }
}