//package com.starwarsapp.starwarsapp.comicissue;
//
//import org.junit.jupiter.api.Test;
//import org.mockito.Mockito;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
//import org.springframework.boot.test.mock.mockito.MockBean;
//import org.springframework.test.web.servlet.MockMvc;
//import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
//import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
//
//import java.time.LocalDate;
//import java.util.ArrayList;
//import java.util.List;
//
//@WebMvcTest(ComicIssueController.class)
//class ComicIssueControllerTest {
//
//    @Autowired
//    private MockMvc mockMvc;
//
//    @MockBean
//    private ComicIssueService comicIssueService;
//
//    @Test
//    void getAllIssues() throws Exception {
//        ComicIssue dummyComicIssue = new ComicIssue(
//                1,
//                "Star Wars",
//                6,
//                "Blah blah",
//                LocalDate.of(2022, 5, 3),
//
//        );
//        List<ComicIssue> comicIssues = new ArrayList<>();
//        comicIssues.add(dummyComicIssue);
//
//        Mockito.when(comicIssueService.getAllIssues()).thenReturn(comicIssues);
//        String url = "/api/v1/comicissue";
//
//        mockMvc.perform(MockMvcRequestBuilders.get(url)).andExpect(MockMvcResultMatchers.status().isOk());
//
//    }
//
//    @Test
//    void registerNewComicIssue() {
//    }
//
//    @Test
//    void deleteComicIssue() {
//    }
//
//    @Test
//    void updateComicIssue() {
//    }
//}