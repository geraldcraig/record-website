package com.example.albums.controller;

import com.example.albums.model.Album;
import com.example.albums.service.AlbumService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/albums")
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class AlbumController {

    private final AlbumService albumService;

//    @GetMapping
//    public ResponseEntity<List<Album>> getAllAlbums() {
//        List<Album> albums = albumRepository.findAll();
//        return ResponseEntity.ok(albums);
//    }
//
//    @GetMapping("/{id}")
//    public ResponseEntity<Album> getAlbumById(@PathVariable Long id) {
//        return albumRepository.findById(id)
//                .map(ResponseEntity::ok)
//                .orElse(ResponseEntity.notFound().build());
//    }

    @GetMapping
    public List<Album> getAllAlbums() {
        return albumService.getAllAlbums();
    }

    @PostMapping
    public Album createAlbum(@RequestBody Album album) {
        return albumService.createAlbum(album);
    }

    @GetMapping("/{id}")
    public Album getAlbumById(@PathVariable Long id) {
        return albumService.getAlbumById(id);
    }

}

