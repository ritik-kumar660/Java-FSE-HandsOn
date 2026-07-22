package com.cognizant.springresthandson.controller;

import com.cognizant.springresthandson.model.Country;
import com.cognizant.springresthandson.model.HelloWorld;
import com.cognizant.springresthandson.service.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class HelloWorldController {

    @Autowired
    private CountryService countryService;

    @GetMapping("/hello")
    public HelloWorld helloWorld() {
        return new HelloWorld("Hello World");
    }

    @GetMapping("/country")
    public Country getCountry() {
        return new Country("IN", "India");
    }

    @GetMapping("/countries/{code}")
    public Country getCountryByCode(@PathVariable String code) {
        return countryService.getCountry(code);
    }


    @GetMapping("/countries")
    public List<Country> getCountries() {
        return countryService.getCountries();
    }
}