//package com.example.albums.example;
//
//import com.example.albums.service.AlbumImportService;
//import lombok.RequiredArgsConstructor;
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.stereotype.Component;
//
//import java.nio.file.Paths;
//
///**
// * Example usage of AlbumImportService.
// * This class runs on application startup and imports albums from CSV.
// *
// * To enable this, uncomment the @Component annotation below.
// * Or you can use the REST endpoint: POST /api/import/albums
// */
//// @Component
//@RequiredArgsConstructor
//public class AlbumImportExample implements CommandLineRunner {
//
//    private final AlbumImportService albumImportService;
//
//    @Override
//    public void run(String... args) throws Exception {
//        System.out.println("Starting album import from CSV...");
//
//        // Path to your CSV file
//        String csvFilePath = "data/album_list.csv";
//
//        try {
//            albumImportService.importAlbumsFromCsv(Paths.get(csvFilePath));
//            System.out.println("Album import completed successfully!");
//        } catch (Exception e) {
//            System.err.println("Error importing albums: " + e.getMessage());
//            e.printStackTrace();
//        }
//    }
//}
//
