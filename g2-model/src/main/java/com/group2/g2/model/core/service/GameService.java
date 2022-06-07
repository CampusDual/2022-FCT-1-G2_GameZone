package com.group2.g2.model.core.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.group2.g2.model.core.dao.GameDAO;
import com.rometools.rome.feed.synd.SyndFeed;
import com.rometools.rome.io.SyndFeedInput;
import com.rometools.rome.io.XmlReader;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.net.URL;
import java.util.List;

@Service
public class GameService {

    private static final String API_URL = "https://api.igdb.com/v4/games";
    private static final String AUTHORIZATION = "Authorization";
    private static final String CLIENT_ID = "Client-ID";
    private static final String BEARER = "Bearer itun4ro82pfxq8ek5rnchqvsoqkpca";

    private static final String CLIENT_TOKEN = "idvvhod17k3cbczniwadsu2jw2xbd4";
    private static final String COVER = "cover";
    private static final String NAME = "name";
    private static final String GENRES = "genres";

    private static final String SIMILAR_GAMES_COVER = "similar_games.cover";

    public void getGamesFromAPI(String name) throws JsonProcessingException {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(List.of(MediaType.APPLICATION_JSON));

        // ENV o CONFIG
        headers.add(AUTHORIZATION, BEARER);
        headers.add(CLIENT_ID, CLIENT_TOKEN);

        String reqBody = "fields name, id, cover.url, genres.name;search \"" + name + "\"; limit 500;";

        HttpEntity<String> httpEntity = new HttpEntity<>(reqBody, headers);
        String result = restTemplate.postForObject(API_URL, httpEntity, String.class);

        // MAPEADO ---
        ObjectMapper mapper = new ObjectMapper().configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        JsonNode rawTree = mapper.readTree(result);
        ArrayNode parsedNode = mapper.createArrayNode();

        for (JsonNode actualNode : rawTree) {

            ObjectNode parsedActualNode = mapper.createObjectNode();
            parsedActualNode.set(NAME, actualNode.get(NAME));

            if (actualNode.get(COVER) != null) {
                parsedActualNode.set(COVER, actualNode.get(COVER).get("url"));
            }

            if (actualNode.get(GENRES) != null) {
                JsonNode genreNodes = actualNode.get(GENRES);
                ArrayNode genreParsedNodes = mapper.createArrayNode();
                for (JsonNode actualGenreNode : genreNodes) {
                    genreParsedNodes.add(actualGenreNode.get(NAME));
                }
                parsedActualNode.set(GENRES, genreParsedNodes);
            }
            parsedNode.add(parsedActualNode);
        }


        ObjectMapper mapper1 = new ObjectMapper();
        GameDAO[] games = mapper1.readValue(parsedNode.toString(), GameDAO[].class);


    }


    public void getRecommendationsFromApi(String name) throws JsonProcessingException {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(List.of(MediaType.APPLICATION_JSON));


        // ENV o CONFIG
        headers.add(AUTHORIZATION, BEARER);
        headers.add(CLIENT_ID, CLIENT_TOKEN);

        String reqBody = "fields similar_games.name, similar_games.cover.url; where name = \"" + name + "\";";

        HttpEntity<String> httpEntity = new HttpEntity<>(reqBody, headers);
        String result = restTemplate.postForObject(API_URL, httpEntity, String.class);


        // MAPEADO ---
        ObjectMapper mapper = new ObjectMapper().configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        JsonNode rawTree = mapper.readTree(result);
        ArrayNode parsedNode = mapper.createArrayNode();

        for (JsonNode actualNode : rawTree) {

            ObjectNode parsedActualNode = mapper.createObjectNode();
            parsedActualNode.set("similar_games.name", actualNode.get("similar_games.name"));

            if (actualNode.get(SIMILAR_GAMES_COVER) != null) {
                parsedActualNode.set(SIMILAR_GAMES_COVER, actualNode.get(SIMILAR_GAMES_COVER).get("url"));
            }

            ObjectMapper mapper2 = new ObjectMapper();
            GameDAO[] games = mapper2.readValue(parsedNode.toString(), GameDAO[].class);


        }
    }


    public String readFeed() {
        try {
            URL feedUrl = new URL("http://feeds.feedburner.com/juegosadn");
            SyndFeedInput input = new SyndFeedInput();
            SyndFeed feed = input.build(new XmlReader(feedUrl));
            return feed.toString();
        } catch (Exception ex) {
            ex.printStackTrace();

        }
        return "fallo";
    }


    public String getRankingFromApi() {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(List.of(MediaType.APPLICATION_JSON));


        // ENV o CONFIG
        headers.add(AUTHORIZATION, BEARER);
        headers.add(CLIENT_ID, CLIENT_TOKEN);

        String reqBody = "fields name, aggregated_rating, cover.url; sort aggregated_rating desc; where aggregated_rating_count > 14; limit 10;";

        HttpEntity<String> httpEntity = new HttpEntity<>(reqBody, headers);

        return restTemplate.postForObject(API_URL, httpEntity, String.class);


    }

}

