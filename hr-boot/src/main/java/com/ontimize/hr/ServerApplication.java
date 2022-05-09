package com.ontimize.hr;


import org.junit.platform.commons.logging.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.logging.Logger;


@SpringBootApplication
public class ServerApplication {






	public static void main(String[] args) {
		SpringApplication.run(ServerApplication.class, args);
	}




}
