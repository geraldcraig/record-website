//package com.example.albums.service;
//
//import com.example.albums.entity.*;
//import com.example.albums.repository.*;
//import com.opencsv.CSVReader;
//import com.opencsv.exceptions.CsvValidationException;
//import lombok.RequiredArgsConstructor;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//
//import java.io.FileReader;
//import java.io.IOException;
//import java.nio.file.Path;
//import java.util.HashMap;
//import java.util.Map;
//
//@Service
//@RequiredArgsConstructor
//@Slf4j
//public class AlbumImportService {
//
//    private final ArtistRepository artistRepository;
//    private final AlbumYearRepository yearRepository;
//    private final GenreRepository genreRepository;
//    private final SubgenreRepository subgenreRepository;
//    private final AlbumRepository albumRepository;
//    private final ImageRepository imageRepository;
//
//    @Transactional
//    public void importAlbumsFromCsv(Path csvFilePath) throws IOException {
//        int recordsInserted = 0;
//
//        try (CSVReader reader = new CSVReader(new FileReader(csvFilePath.toFile()))) {
//            String[] line;
//
//            // Caches to avoid duplicate lookups
//            Map<String, Artist> artistCache = new HashMap<>();
//            Map<Integer, AlbumYear> yearCache = new HashMap<>();
//            Map<String, Genre> genreCache = new HashMap<>();
//            Map<String, Subgenre> subgenreCache = new HashMap<>();
//            Map<String, Image> imageCache = new HashMap<>();
//
//            while ((line = reader.readNext()) != null) {
//                try {
//                    if (line.length < 7) {
//                        log.warn("Skipping invalid row: insufficient columns");
//                        continue;
//                    }
//
//                    // Parse CSV columns: id, year, title, artist, genre, subgenre
//                    // int id = Integer.parseInt(line[0]); // Skip, DB generates it
//                    Integer albumYearValue = Integer.parseInt(line[1]);
//                    String title = line[2];
//                    String artistName = line[3];
//                    String genreName = line[4];
//                    String subgenreName = line[5];
//                    String imageLink = line[6];
//
//                    // 1. Get or create Artist
//                    Artist artist = artistCache.computeIfAbsent(artistName, name -> {
//                        return artistRepository.findByName(name)
//                                .orElseGet(() -> {
//                                    Artist newArtist = new Artist();
//                                    newArtist.setName(name);
//                                    return artistRepository.save(newArtist);
//                                });
//                    });
//
//                    // 2. Get or create Year
//                    AlbumYear year = yearCache.computeIfAbsent(albumYearValue, y -> {
//                        return yearRepository.findByAlbumYear(y)
//                                .orElseGet(() -> {
//                                    AlbumYear newYear = new AlbumYear();
//                                    newYear.setAlbumYear(y);
//                                    return yearRepository.save(newYear);
//                                });
//                    });
//
//                    // 3. Get or create Genre
//                    Genre genre = genreCache.computeIfAbsent(genreName, name -> {
//                        return genreRepository.findByGenre(name)
//                                .orElseGet(() -> {
//                                    Genre newGenre = new Genre();
//                                    newGenre.setGenre(name);
//                                    return genreRepository.save(newGenre);
//                                });
//                    });
//
//                    // 4. Get or create Subgenre
//                    Subgenre subgenre = subgenreCache.computeIfAbsent(subgenreName, name -> {
//                        return subgenreRepository.findBySubgenre(name)
//                                .orElseGet(() -> {
//                                    Subgenre newSubgenre = new Subgenre();
//                                    newSubgenre.setSubgenre(name);
//                                    return subgenreRepository.save(newSubgenre);
//                                });
//                    });
//
//                    // 5. Get or create Image
//                    Image image = imageCache.computeIfAbsent(imageLink, link -> {
//                        return imageRepository.findByImage(link)
//                                .orElseGet(() -> {
//                                    Image newImage = new Image();
//                                    newImage.setImage(link);
//                                    return imageRepository.save(newImage);
//                                });
//                    });
//
//                    // 5. Create and save Album
//                    Album album = new Album();
//                    album.setTitle(title);
//                    album.setArtist(artist);
//                    album.setYear(year);
//                    album.setGenre(genre);
//                    album.setSubgenre(subgenre);
//                    album.setImage(image);
//
//                    albumRepository.save(album);
//                    recordsInserted++;
//
//                    log.debug("Inserted album: {} by {} ({})", title, artistName, albumYearValue);
//
//                } catch (NumberFormatException e) {
//                    log.warn("Skipping row with invalid number format: {}", e.getMessage());
//                } catch (Exception e) {
//                    log.error("Error processing row: {}", e.getMessage(), e);
//                }
//            }
//        } catch (CsvValidationException e) {
//            throw new RuntimeException(e);
//        }
//
//        log.info("Total of {} records inserted into database table", recordsInserted);
//    }
//}
//
