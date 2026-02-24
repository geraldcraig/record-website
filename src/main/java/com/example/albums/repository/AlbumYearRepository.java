package com.example.albums.repository;

import com.example.albums.entity.AlbumYear;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AlbumYearRepository extends JpaRepository<AlbumYear, Long> {
    Optional<AlbumYear> findByAlbumYear(Integer albumYear);
}

