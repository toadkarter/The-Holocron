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

    private Long id;
    private String title;
    private int issueNumber;
    private String author;
    private LocalDate releaseDate;
    private String imageUrl;
    private boolean inCollection;

    // Null constructor
    public ComicIssue() {
    }

    // Constructor without id (for database generation)
    public ComicIssue(String title, int issueNumber, String author, LocalDate releaseDate, String imageUrl, boolean inCollection) {
        this.title = title;
        this.issueNumber = issueNumber;
        this.author = author;
        this.releaseDate = releaseDate;
        this.imageUrl = imageUrl;
        this.inCollection = inCollection;
    }

    // Full constructor (for user input)
    public ComicIssue(Long id, String title, int issueNumber, String author, LocalDate releaseDate, String imageUrl, boolean inCollection) {
        this.id = id;
        this.title = title;
        this.issueNumber = issueNumber;
        this.author = author;
        this.releaseDate = releaseDate;
        this.imageUrl = imageUrl;
        this.inCollection = inCollection;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getIssueNumber() { return issueNumber; }

    public void setIssueNumber(int number) {
        this.issueNumber = number;
    }

    public void setAuthor(String author) { this.author = author; }



}
