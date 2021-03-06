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
    private String linkUrl;
    private String imageUrl;

    // Null constructor
    public ComicIssue() {
    }

    // Constructor without id (for database generation)
    public ComicIssue(String title, int issueNumber, String author, LocalDate releaseDate, String linkUrl, String imageUrl) {
        this.title = title;
        this.issueNumber = issueNumber;
        this.author = author;
        this.releaseDate = releaseDate;
        this.linkUrl = linkUrl;
        this.imageUrl = imageUrl;
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

    public int getIssueNumber() {
        return issueNumber;
    }

    public void setIssueNumber(int issueNumber) {
        this.issueNumber = issueNumber;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public LocalDate getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(LocalDate releaseDate) {
        this.releaseDate = releaseDate;
    }

    public String getLinkUrl() { return linkUrl; }

    public void setLinkUrl(String linkUrl) { this.linkUrl = linkUrl; }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}
