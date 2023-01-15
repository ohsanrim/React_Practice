package com.ohsanrim;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class OhsanrimApplication extends SpringBootServletInitializer {
	
	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
		return builder.sources(OhsanrimApplication.class);
	}
	
	public static void main(String[] args) {
		System.out.println("asdasdasdsa");
		SpringApplication.run(OhsanrimApplication.class, args);
	}

}
