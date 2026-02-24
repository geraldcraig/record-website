package com.example.albums.repository;

import com.example.albums.entity.Subgenre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SubgenreRepository extends JpaRepository<Subgenre, Long> {
    Optional<Subgenre> findBySubgenre(String subgenre);
}

