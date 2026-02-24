package com.example.albums.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "albumyear", uniqueConstraints = @UniqueConstraint(columnNames = "albumyear"))
@Data
@NoArgsConstructor
@AllArgsConstructor
public class AlbumYear {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "albumyear", nullable = false, unique = true)
    private Integer albumYear;
}

