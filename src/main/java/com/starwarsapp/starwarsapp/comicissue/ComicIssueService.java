package com.starwarsapp.starwarsapp.comicissue;

import com.starwarsapp.starwarsapp.wikiscraper.Scraper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
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

    // This will run as soon as the application starts.
    @EventListener(ApplicationReadyEvent.class)
    public void initFutureComics() throws IOException {
        Collection<ComicIssue> comics = scraper.scrapeWiki();
        System.out.println(comics);
        comicIssueRepository.saveAll(comics);
    }

    public Collection<ComicIssue> getFutureComicIssuesByMonth(String monthDate) {
        String[] monthDateSplit = monthDate.split("-");
        int year = Integer.parseInt(monthDateSplit[0]);
        int month = Integer.parseInt(monthDateSplit[1]);

        YearMonth yearMonth = YearMonth.of(year, month);
        LocalDate firstOfMonth = yearMonth.atDay(1);
        LocalDate lastOfMonth = yearMonth.atEndOfMonth();

        return comicIssueRepository.findComicIssuesByReleaseDateBetween(firstOfMonth, lastOfMonth);
    }

//    public Collection<ComicIssue> getLatestUnreleasedIssues() {
//        return comicIssueRepository.getLatestUnreleasedIssues();
//    }

    public Collection<ComicIssue> findFutureComicIssuesFromDate(LocalDate releaseDate) {
        LocalDate currentDate = LocalDate.now();
        return comicIssueRepository.findComicIssuesByReleaseDateBetween(releaseDate, currentDate);
    }

}
