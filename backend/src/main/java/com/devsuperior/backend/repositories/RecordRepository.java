package com.devsuperior.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RecordRepository extends JpaRepository<com.devsuperior.backend.entities.Record, Long> {
    
}
