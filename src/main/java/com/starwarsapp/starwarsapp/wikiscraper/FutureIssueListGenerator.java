package com.starwarsapp.starwarsapp.wikiscraper;

import com.starwarsapp.starwarsapp.comicissue.ComicIssue;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Component
public class FutureIssueListGenerator {

    private final String baseUrl = "https://starwars.fandom.com";

    public Collection<ComicIssue> getListOfFutureIssues(Elements comics) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        Collection<ComicIssue> futureComicIssues = new ArrayList<>();

        for (Element comic: comics) {
            Elements columns = comic.select("td");
            StringBuilder title = new StringBuilder(columns.eq(2).text());
            removeCross(title);
            if (title.toString().contains("\"")) { continue; }

            int issueNumber = -1;
            LocalDate releaseDate = null;
            String linkUrl = null;
            String imageUrl = null;

            String author = columns.eq(3).text();
            System.out.println(author);

            try {
                issueNumber = getIssueNumber(title);
                releaseDate = getReleaseDate(columns, formatter);
                linkUrl = getLinkUrl(columns.eq(2));
                imageUrl = getImageUrl(linkUrl);
                deleteIssueNumberFromTitle(title);
            } catch (Exception e) {
                System.out.println("Can't get comic information");
                continue;
            }
            futureComicIssues.add(new ComicIssue(title.toString(), issueNumber, author, releaseDate, linkUrl, imageUrl));
        }

        return futureComicIssues;
    }

    private LocalDate getReleaseDate(Elements columns, DateTimeFormatter formatter) {
        return LocalDate.parse(columns.eq(4).text(), formatter);
    }

    private void deleteIssueNumberFromTitle(StringBuilder title) {
        title.delete(title.lastIndexOf(" "), title.length());
    }

    private int getIssueNumber(StringBuilder title) {
        return Integer.parseInt(title.substring(title.lastIndexOf(" ") + 1));
    }

    private void removeCross(StringBuilder title) {
        if (title.toString().contains("???")) {
            title.delete(title.toString().indexOf("???") - 1, title.toString().length());
        }
    }

    private String getLinkUrl(Elements comicInfo) throws IOException {
        return baseUrl + comicInfo.select("a").attr("href");
    }

    private String getImageUrl(String linkUrl) throws IOException {
        Document comicPage = Jsoup.connect(linkUrl).get();
        String rawImageUrl = comicPage.select("figure").select("a").attr("href");
        return rawImageUrl.substring(0, rawImageUrl.indexOf("/revision"));
    }

}
