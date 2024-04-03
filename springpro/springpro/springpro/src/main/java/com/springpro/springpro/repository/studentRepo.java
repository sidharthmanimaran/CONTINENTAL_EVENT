package com.springpro.springpro.repository;



import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springpro.springpro.entity.student;

public interface studentRepo extends JpaRepository<student, Integer> {

    
    Optional<com.springpro.springpro.entity.student> findByEmail(String email);
    boolean existsByEmail(String email);

    void deleteByEmail(String email);
    
}