package com.cognizant.ormlearn.repository;

import com.cognizant.ormlearn.entity.Department;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepartmentRepository extends JpaRepository<Department, Integer> {

}