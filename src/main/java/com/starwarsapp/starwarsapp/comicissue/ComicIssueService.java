package com.starwarsapp.starwarsapp.comicissue;

import com.starwarsapp.starwarsapp.wikiscraper.Scraper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.io.IOException;
import java.time.LocalDate;
import java.time.YearMonth;
import java.util.Collection;

// This class contains the logic for the service layer
@Service // Tells Spring Boot that this is a Bean. Could easily be called a Component if we wanted.
public class ComicIssueService {

    // Creating reference to repository
    private final ComicIssueRepository comicIssueRepository;
    private final Scraper scraper;

    @Autowired
    public ComicIssueService(ComicIssueRepository comicIssueRepository, Scraper scraper) {
        this.comicIssueRepository = comicIssueRepository;
        this.scraper = scraper;
    }

    // TODO: Add error checking to see if the table already contains entries
    public void initFutureComics() throws IOException {
        comicIssueRepository.saveAll(scraper.scrapeWiki());
    }

    public Collection<ComicIssue> getFutureComicIssuesByMonth(int month) {
        YearMonth yearMonth = YearMonth.of(2022, month);
        LocalDate firstOfMonth = yearMonth.atDay(1);
        LocalDate lastOfMonth = yearMonth.atEndOfMonth();
        return comicIssueRepository.getFutureComicIssuesByMonth(firstOfMonth, lastOfMonth);
    }

    public Collection<ComicIssue> getLatestUnreleasedIssues() {
        return comicIssueRepository.getLatestUnreleasedIssues();
    }

    public Collection<ComicIssue> findFutureComicIssuesFromDate(LocalDate releaseDate) {
        return comicIssueRepository.findFutureComicIssuesFromDate(releaseDate);
    }

    @Transactional
    public void updateComicIssue(Long comicIssueId, String title, int number, String author) {
        ComicIssue comicIssue = comicIssueRepository.findById(comicIssueId).orElseThrow(
                () -> new IllegalStateException(
                        "Comic Issue with Id " + comicIssueId + " does not exist"
                ));
        comicIssue.setTitle(title);
        comicIssue.setIssueNumber(number);
        comicIssue.setAuthor(author);
    }
}
