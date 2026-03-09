package com.example.albums.model;

import jakarta.persistence.*;

@Entity
@Table(name = "albums")
//@Data
//@NoArgsConstructor
//@AllArgsConstructor
public class Album {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "ALBUM_YEAR")
    private Integer albumYear;

    @Column(name = "TITLE")
    private String title;

    @Column(name = "ARTIST")
    private String artist;

    @Column(name = "GENRE")
    private String genre;

    @Column(name = "SUBGENRE")
    private String subgenre;

    @Column(name = "IMAGE")
    private String image;

    public Album() {
    }

    public Album(Long id, Integer albumYear, String title, String artist, String genre, String subgenre, String image) {
        this.id = id;
        this.albumYear = albumYear;
        this.title = title;
        this.artist = artist;
        this.genre = genre;
        this.subgenre = subgenre;
        this.image = image;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getAlbumYear() {
        return albumYear;
    }

    public void setAlbumYear(Integer albumYear) {
        this.albumYear = albumYear;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getArtist() {
        return artist;
    }

    public void setArtist(String artist) {
        this.artist = artist;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getSubgenre() {
        return subgenre;
    }

    public void setSubgenre(String subgenre) {
        this.subgenre = subgenre;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}

