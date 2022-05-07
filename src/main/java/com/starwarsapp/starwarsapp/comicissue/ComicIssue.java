package com.starwarsapp.starwarsapp.comicissue;

import javax.persistence.*;
import java.time.LocalDate;

@Entity // Says that the class is mapped to a database table
@Table // This allows you to use it as a mysql table
public class ComicIssue {

    @Id // Specifies the primary key of an entity
    @SequenceGenerator(
            name = "comic_issue_sequence",
            sequenceName = "comic_issue_sequence",
            allocationSize = 1 // The amount by which to increment
    )

    // Creates the primary key for each entry in the database
    @GeneratedValue (
            strategy = GenerationType.IDENTITY,
            generator = "comic_issue_sequence"
    )

    private int id;
    private String title;
    private int number;
    private String author;
    private LocalDate releaseDate;
    private String imageUrl;
    private boolean inCollection;

    // Null constructor
    public ComicIssue() {
    }

    // Constructor without id (for database generation)
    public ComicIssue(String title, int number, String author, LocalDate releaseDate, String imageUrl, boolean inCollection) {
        this.title = title;
        this.number = number;
        this.author = author;
        this.releaseDate = releaseDate;
        this.imageUrl = imageUrl;
        this.inCollection = inCollection;
    }

    // Full constructor (for user input)
    public ComicIssue(int id, String title, int number, String author, LocalDate releaseDate, String image, boolean inCollection) {
        this.id = id;
        this.title = title;
        this.number = number;
        this.author = author;
        this.releaseDate = releaseDate;
        this.imageUrl = imageUrl;
        this.inCollection = inCollection;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public LocalDate getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(LocalDate releaseDate) {
        this.releaseDate = releaseDate;
    }

    public String getAuthor() { return author; }

    public void setAuthor(String author) { this.author = author; }


    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String image) {
        this.imageUrl = imageUrl;
    }

    public boolean isInCollection() {
        return inCollection;
    }

    public void setInCollection(boolean inCollection) {
        this.inCollection = inCollection;
    }


}
