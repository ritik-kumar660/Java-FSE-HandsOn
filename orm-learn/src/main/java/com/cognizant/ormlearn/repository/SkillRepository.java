package com.cognizant.ormlearn.repository;

import com.cognizant.ormlearn.entity.Skill;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SkillRepository extends JpaRepository<Skill,Integer> {

}