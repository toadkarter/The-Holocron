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
import java.util.List;

@Component
public class FutureIssueListGenerator {

    private final String baseUrl = "https://starwars.fandom.com";

    public List<ComicIssue> getListOfFutureIssues(Elements comics) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        List<ComicIssue> futureComicIssues = new ArrayList<>();

        for (Element comic: comics) {
            Elements columns = comic.select("td");
            StringBuilder title = new StringBuilder(columns.eq(2).text());
            removeCross(title);
            if (title.toString().contains("\"")) { continue; }

            int issueNumber = -1;
            LocalDate releaseDate = null;
            String imageUrl = null;

            String author = columns.eq(3).text();
            System.out.println(author);

            try {
                issueNumber = getIssueNumber(title);
                releaseDate = getReleaseDate(columns, formatter);
                imageUrl = getImageUrl(columns.eq(2));
                deleteIssueNumberFromTitle(title);
            } catch (Exception e) {
                System.out.println("Can't get comic information");
                continue;
            }

            futureComicIssues.add(new ComicIssue(title.toString(), issueNumber, author, releaseDate, imageUrl));
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
        if (title.toString().contains("†")) {
            title.deleteCharAt(title.toString().indexOf("†"));
        }
    }

    private String getImageUrl(Elements comicInfo) throws IOException {
        String comicUrl = baseUrl + comicInfo.select("a").attr("href");
        Document comicPage = Jsoup.connect(comicUrl).get();
        String rawImageUrl = comicPage.select("figure").select("a").attr("href");
        return rawImageUrl.substring(0, rawImageUrl.indexOf("/revision"));
    }

}
