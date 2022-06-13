package com.group2.g2.model.core.service;

import java.util.List;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.group2.g2.model.core.dao.ProfileDAO;

@Service
public class ProfileService {
    private static final String API_URL = "https://api.igdb.com/v4/games";
    private static final String AUTHORIZATION = "Authorization";
    private static final String CLIENT_ID = "Client-ID";
    private static final String BEARER = "Bearer itun4ro82pfxq8ek5rnchqvsoqkpca";

    private static final String CLIENT_TOKEN = "idvvhod17k3cbczniwadsu2jw2xbd4";
    private static final String BACKGROUND_COVER= "backgroundCover";
    private static final String COVER = "cover";
    private static final String TITLE = "title";
    private static final String DATE_RELEASE = "dateRelease";
    private static final String GENRES = "genres";
    private static final String PLATAFORMS = "plataforms";
    private static final String DESCRIPTION = "description";
    private static final String MEMBER_RATING = "memberRating";
    private static final String CRITIC_RATING = "criticRating";
    private static final String TRAILERS = "trailers";
    private static final String GAMEPLAYS = "gameplays";
    private static final String SCREENSHOTS = "screenshots";
    private static final String ARTWORK = "artwork";
    private static final String REOMMENDATIONS = "recommendations";

    public  String getProfileFromApi(int id) throws JsonProcessingException{
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(List.of(MediaType.APPLICATION_JSON));

        // ENV o CONFIG
        headers.add(AUTHORIZATION, BEARER);
        headers.add(CLIENT_ID, CLIENT_TOKEN);

        String reqBody = "fields name, cover.url, release_dates.y, genres.name, platforms.name, platforms.platform_logo.url, summary, total_rating, aggregated_rating, videos.video_id, screenshots.url, artworks.url; "+
        "where id = "+ id +";";

        HttpEntity<String> httpEntity = new HttpEntity<>(reqBody, headers);

        return restTemplate.postForObject(API_URL, httpEntity, String.class);
    }

}
