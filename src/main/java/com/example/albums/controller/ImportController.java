package com.example.albums.controller;

import com.example.albums.service.AlbumImportService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
@RequestMapping("/api/import")
@RequiredArgsConstructor
public class ImportController {

    private final AlbumImportService albumImportService;

    /**
     * Import albums from CSV file.
     * @param filePath path to the CSV file (relative or absolute)
     * @return success message with record count
     */
    @PostMapping("/albums")
    public ResponseEntity<String> importAlbums(@RequestParam(defaultValue = "/Users/geraldcraig/Repos/copilot-recordwebsite/src/main/resources/data/album_list_new.csv") String filePath) {
        try {
            Path csvPath = Paths.get(filePath);
            albumImportService.importAlbumsFromCsv(csvPath);
            return ResponseEntity.ok("Albums imported successfully");
        } catch (IOException e) {
            return ResponseEntity.badRequest().body("Error reading CSV file: " + e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Error importing albums: " + e.getMessage());
        }
    }
}

