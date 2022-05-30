package com.starwarsapp.starwarsapp.comicissue;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.time.LocalDate;
import java.util.Collection;

// This class contains all the resources for the API layer
@RestController
@RequestMapping(path = "api/v1/comicissue")
@CrossOrigin(origins = "http://localhost:3000")
public class ComicIssueController {

    private final ComicIssueService comicIssueService;

    @Autowired // This will auto-instantiate the parameter and include in the constructor.
    public ComicIssueController(ComicIssueService comicIssueService) {
        this.comicIssueService = comicIssueService;
    }

    @RequestMapping(value="/month")
    public Collection<ComicIssue> getFutureComicIssuesByMonth(@RequestParam(value = "month") String monthDate) {
        return comicIssueService.getFutureComicIssuesByMonth(monthDate);
    }

    @GetMapping(path = "date")
    public Collection<ComicIssue> findFutureComicIssuesFromDate(@RequestParam("date")
                                                                @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate dateAndTime) {
        return comicIssueService.findFutureComicIssuesFromDate(dateAndTime);
    }

    // Move this out of the public API, don't want people to run this.
    @RequestMapping(path = "initfuturecomics")
    public void initFutureComics() throws IOException {
        comicIssueService.initFutureComics();
    }
}
