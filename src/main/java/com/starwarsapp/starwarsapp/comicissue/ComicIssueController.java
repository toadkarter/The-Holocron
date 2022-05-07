package com.starwarsapp.starwarsapp.comicissue;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.time.LocalDate;
import java.util.Collection;
import java.util.List;

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

    @GetMapping
    public List<ComicIssue> getAllIssues() {
        return comicIssueService.getAllIssues();
    }

    @RequestMapping(value="/month")
    public Collection<ComicIssue> getFutureComicIssuesByMonth(@RequestParam(value = "month") int month) {
        return comicIssueService.getFutureComicIssuesByMonth(month);

    }







    @GetMapping(path = "date")
    public Collection<ComicIssue> findFutureComicIssuesFromDate(@RequestParam("date")
                                @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate dateAndTime) {
        return comicIssueService.findFutureComicIssuesFromDate(dateAndTime);
    }











    @RequestMapping(path="initfuturecomics")
    public void initFutureComics() throws IOException {
        comicIssueService.initFutureComics();
    }

    @PostMapping
    public void registerNewComicIssue(@RequestBody ComicIssue comicIssue) {
        comicIssueService.addNewComicIssue(comicIssue);
    }

    @DeleteMapping(path = "{comicIssueId}")
    public void deleteComicIssue(@PathVariable("comicIssueId") Long comicIssueId) {
        comicIssueService.deleteComicIssue(comicIssueId);
    }

    @PutMapping(path = "{comicIssueId}")
    public void updateComicIssue(
            @PathVariable("comicIssueId") Long comicIssueId,
            @RequestParam(required = false) String title,
            @RequestParam(required = false) int number,
            @RequestParam(required = false) String author) {
        comicIssueService.updateComicIssue(comicIssueId, title, number, author);
    }

}
