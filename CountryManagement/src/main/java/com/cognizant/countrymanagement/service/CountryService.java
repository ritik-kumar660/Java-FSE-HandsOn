package com.cognizant.countrymanagement.service;

import com.cognizant.countrymanagement.entity.Country;
import com.cognizant.countrymanagement.repository.CountryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryService {

    private final CountryRepository countryRepository;

    public CountryService(CountryRepository countryRepository) {
        this.countryRepository = countryRepository;
    }

    public List<Country> getAllCountries() {
        return countryRepository.findAll();
    }
    public Country getCountryByCode(String code) {
        return countryRepository.findById(code).orElse(null);
    }
    public Country addCountry(Country country) {
        return countryRepository.save(country);
    }
    public Country updateCountry(Country country) {
        return countryRepository.save(country);
    }
    public void deleteCountry(String code) {
        countryRepository.deleteById(code);
    }
    public List<Country> searchCountry(String text) {
        return countryRepository.findByNameContainingIgnoreCaseOrderByNameAsc(text);
    }

}