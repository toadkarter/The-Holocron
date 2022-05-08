package com.starwarsapp.starwarsapp.comicissue;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.Collection;
import java.util.Optional;

// This is a Java implementation of the database. When we extend, we need to
// specify the type of the entity, and the type of the ID.
@Repository
public interface ComicIssueRepository extends JpaRepository<ComicIssue, Long> {

    @Query(value = "SELECT * " +
                    "FROM starwars.comic_issue " +
                    "WHERE release_date > :releaseDate " +
                    "ORDER BY release_date",
                    nativeQuery = true)
    Collection<ComicIssue> findFutureComicIssuesFromDate(@Param("releaseDate") LocalDate releaseDate);


    @Query(value = "SELECT * " +
                    "FROM starwars.comic_issue " +
                    "WHERE release_date > :firstDay && release_date < :lastDay order by release_date ;",
                    nativeQuery = true)
    Collection<ComicIssue> getFutureComicIssuesByMonth(@Param("firstDay") LocalDate firstDay,
                                                       @Param("lastDay") LocalDate lastDay);




    @Query(value = "SELECT id, author, image_url, in_collection, MAX(issue_number) AS issue_number, release_date, title FROM starwars.comic_issue GROUP BY title;", nativeQuery = true)
    Collection<ComicIssue> getLatestUnreleasedIssues();

}
