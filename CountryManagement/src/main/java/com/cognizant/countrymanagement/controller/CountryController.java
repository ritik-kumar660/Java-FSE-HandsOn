package com.cognizant.countrymanagement.controller;

import com.cognizant.countrymanagement.entity.Country;
import com.cognizant.countrymanagement.service.CountryService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CountryController {

    private final CountryService countryService;

    public CountryController(CountryService countryService) {
        this.countryService = countryService;
    }

    @GetMapping("/countries")
    public List<Country> getCountries() {
        return countryService.getAllCountries();
    }
    @GetMapping("/countries/{code}")
    public Country getCountry(@PathVariable String code) {
        return countryService.getCountryByCode(code);
    }
    @PostMapping("/countries")
    public Country addCountry(@RequestBody Country country) {
        return countryService.addCountry(country);
    }
    @PutMapping("/countries")
    public Country updateCountry(@RequestBody Country country) {
        return countryService.updateCountry(country);
    }
    @DeleteMapping("/countries/{code}")
    public String deleteCountry(@PathVariable String code) {
        countryService.deleteCountry(code);
        return "Country Deleted Successfully";
    }
    @GetMapping("/countries/search")
    public List<Country> searchCountry(@RequestParam String text) {
        return countryService.searchCountry(text);
    }
}