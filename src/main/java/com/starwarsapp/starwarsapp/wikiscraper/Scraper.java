package com.starwarsapp.starwarsapp.wikiscraper;

import com.starwarsapp.starwarsapp.comicissue.ComicIssue;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import java.io.IOException;
import java.util.List;

@Component
public class Scraper {

    private final String url = "https://starwars.fandom.com/wiki/Timeline_of_canon_media";
    private final FutureIssueListGenerator futureIssueListGenerator;

    @Autowired
    public Scraper(FutureIssueListGenerator futureIssueListGenerator) {
        this.futureIssueListGenerator = futureIssueListGenerator;
    }

    public List<ComicIssue> scrapeWiki() throws IOException {
        Document document = Jsoup.connect(url).get();
        Elements comics = document.getElementsByClass("comic");
        return futureIssueListGenerator.getListOfFutureIssues(comics);
    }
}
