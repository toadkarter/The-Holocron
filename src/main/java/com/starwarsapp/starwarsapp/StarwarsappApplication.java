package com.starwarsapp.starwarsapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class StarwarsappApplication {
	public static void main(String[] args) {
		SpringApplication.run(StarwarsappApplication.class, args);
	}
}
