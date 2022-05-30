package com.starwarsapp.starwarsapp.comicissue;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.Collection;

// This is a Java implementation of the database. When we extend, we need to
// specify the type of the entity, and the type of the ID.
@Repository
public interface ComicIssueRepository extends JpaRepository<ComicIssue, Long> {
    Collection<ComicIssue> findComicIssuesByReleaseDateBetween(LocalDate startDate, LocalDate endDate);
}
