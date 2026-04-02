//package com.example.albums.util;
//
//import com.opencsv.CSVReader;
//import com.opencsv.exceptions.CsvValidationException;
//
//import java.io.FileReader;
//import java.io.FileWriter;
//import java.io.IOException;
//import java.nio.file.Path;
//import java.nio.file.Paths;
//
///**
// * Utility class to convert album_list_new.csv to data.sql
// * Run this class to generate the data.sql file that will populate the albums database on startup
// */
//public class CsvToSqlGenerator {
//
//    public static void main(String[] args) {
//        String csvFilePath = "src/main/resources/data/album_list_new.csv";
//        String sqlFilePath = "src/main/resources/data.sql";
//
//        try {
//            generateSqlFromCsv(Paths.get(csvFilePath), Paths.get(sqlFilePath));
//            System.out.println("Successfully generated " + sqlFilePath + " from " + csvFilePath);
//        } catch (IOException | CsvValidationException e) {
//            System.err.println("Error generating SQL file: " + e.getMessage());
//            e.printStackTrace();
//        }
//    }
//
//    public static void generateSqlFromCsv(Path csvFilePath, Path sqlFilePath)
//            throws IOException, CsvValidationException {
//
//        StringBuilder sqlBuilder = new StringBuilder();
//        sqlBuilder.append("-- Auto-generated SQL from album_list_new.csv\n");
//        sqlBuilder.append("-- Generated on: ").append(java.time.LocalDateTime.now()).append("\n\n");
//
//        // Keep the existing users data
//        sqlBuilder.append("-- Users data\n");
//        sqlBuilder.append("INSERT INTO users(FIRST_NAME, LAST_NAME, USER_NAME, USER_PASSWORD, ADMIN) VALUES\n");
//        sqlBuilder.append("('John', 'Doe', 'johndoe', 'password123', 0),\n");
//        sqlBuilder.append("('Jane', 'Smith', 'janesmith', 'password456', 0),\n");
//        sqlBuilder.append("('Admin', 'User', 'adminuser', 'adminpassword', 1);\n\n");
//
//        // Albums data
//        sqlBuilder.append("-- Albums data\n");
//        sqlBuilder.append("INSERT INTO albums (ALBUM_YEAR, TITLE, ARTIST, GENRE, SUBGENRE, IMAGE) VALUES\n");
//
//        try (CSVReader reader = new CSVReader(new FileReader(csvFilePath.toFile()))) {
//            String[] line;
//            boolean firstLine = true;
//            int recordCount = 0;
//
//            while ((line = reader.readNext()) != null) {
//                try {
//                    if (line.length < 7) {
//                        System.err.println("Skipping invalid row: insufficient columns");
//                        continue;
//                    }
//
//                    // Parse CSV columns: id, year, title, artist, genre, subgenre, image
//                    // Skip id (line[0]) as DB will auto-generate
//                    Integer albumYear = Integer.parseInt(line[1].trim());
//                    String title = escapeSqlString(line[2].trim());
//                    String artist = escapeSqlString(line[3].trim());
//                    String genre = escapeSqlString(line[4].trim());
//                    String subgenre = escapeSqlString(line[5].trim());
//                    String image = escapeSqlString(line[6].trim());
//
//                    // Add comma for previous line if not first
//                    if (!firstLine) {
//                        sqlBuilder.append(",\n");
//                    } else {
//                        firstLine = false;
//                    }
//
//                    // Create INSERT values
//                    sqlBuilder.append(String.format("(%d, '%s', '%s', '%s', '%s', '%s')",
//                            albumYear, title, artist, genre, subgenre, image));
//
//                    recordCount++;
//
//                } catch (NumberFormatException e) {
//                    System.err.println("Skipping row with invalid year format: " + e.getMessage());
//                } catch (Exception e) {
//                    System.err.println("Error processing row: " + e.getMessage());
//                }
//            }
//
//            sqlBuilder.append(";\n");
//            System.out.println("Processed " + recordCount + " album records");
//        }
//
//        // Write to file
//        try (FileWriter writer = new FileWriter(sqlFilePath.toFile())) {
//            writer.write(sqlBuilder.toString());
//        }
//    }
//
//    /**
//     * Escape single quotes in SQL strings by doubling them
//     */
//    private static String escapeSqlString(String input) {
//        if (input == null) {
//            return "";
//        }
//        // Replace single quote with two single quotes for SQL escaping
//        return input.replace("'", "''");
//    }
//}
//
