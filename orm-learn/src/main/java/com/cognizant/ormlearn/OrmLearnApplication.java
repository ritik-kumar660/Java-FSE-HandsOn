package com.cognizant.ormlearn;

import com.cognizant.ormlearn.entity.*;
import com.cognizant.ormlearn.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.List;

@SpringBootApplication
public class OrmLearnApplication implements CommandLineRunner {

    @Autowired
    DepartmentRepository departmentRepository;

    @Autowired
    EmployeeRepository employeeRepository;

    @Autowired
    SkillRepository skillRepository;

    public static void main(String[] args) {
        SpringApplication.run(OrmLearnApplication.class, args);
    }

    @Override
    public void run(String... args) {

        Department it = new Department();
        it.setName("IT");
        departmentRepository.save(it);

        Skill java = new Skill();
        java.setName("Java");

        Skill spring = new Skill();
        spring.setName("Spring Boot");

        skillRepository.save(java);
        skillRepository.save(spring);

        Employee emp = new Employee();
        emp.setName("Ritik");
        emp.setDepartment(it);
        emp.setSkills(List.of(java, spring));

        employeeRepository.save(emp);

        System.out.println("ORM Mapping Successful");
    }
}