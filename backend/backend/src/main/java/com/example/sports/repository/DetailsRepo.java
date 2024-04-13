package com.example.sports.repository;

import com.example.sports.model.Details;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DetailsRepo extends JpaRepository<Details, Long> {
}
