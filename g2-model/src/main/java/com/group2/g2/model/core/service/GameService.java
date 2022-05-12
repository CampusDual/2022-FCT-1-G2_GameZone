package com.group2.g2.model.core.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.group2.g2.model.core.dao.GameDAO;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;

@Service
public class GameService {

    private final String API_URL = "https://api.igdb.com/v4/games";

    public void getGamesFromAPI() throws JsonProcessingException {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));

        // ENV o CONFIG
        headers.add("Authorization", "Bearer itun4ro82pfxq8ek5rnchqvsoqkpca");
        headers.add("Client-ID", "idvvhod17k3cbczniwadsu2jw2xbd4");

        String reqBody = "fields name, id, cover.url, genres.name;search \"fifa\"; limit 500;";

        HttpEntity<String> httpEntity = new HttpEntity<String>(reqBody, headers);
        String result = restTemplate.postForObject(API_URL, httpEntity, String.class);

        // MAPEADO ---
        ObjectMapper mapper = new ObjectMapper().configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        mapper.readTree(result);
        /*try {
            GameDAO[] games = mapper.readValue(result, GameDAO[].class);
            for (GameDAO game : games) {
                System.out.println(game.getName());
                System.out.println(game.getCover().getUrl());
                System.out.println(game.getGenre().getName());
                ;
            }
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }*/


        System.out.println("API RESULT: ");
    }

    public void getCoverFromAPI() {

    }
}
