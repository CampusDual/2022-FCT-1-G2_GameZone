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
import java.util.Arrays;

@Service
public class GameService {

    private final String API_URL = "https://api.igdb.com/v4/games";

    public void getGamesFromAPI(String name) throws JsonProcessingException {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));

        // ENV o CONFIG
        headers.add("Authorization", "Bearer itun4ro82pfxq8ek5rnchqvsoqkpca");
        headers.add("Client-ID", "idvvhod17k3cbczniwadsu2jw2xbd4");

        String reqBody = "fields name, id, cover.url, genres.name;search \"" + name + "\"; limit 500;";

        HttpEntity<String> httpEntity = new HttpEntity<String>(reqBody, headers);
        String result = restTemplate.postForObject(this.API_URL, httpEntity, String.class);

        System.out.println(result);


        // MAPEADO ---
        ObjectMapper mapper = new ObjectMapper().configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        JsonNode rawTree = mapper.readTree(result);
        ArrayNode parsedNode = mapper.createArrayNode();

        for (JsonNode actualNode : rawTree) {

            ObjectNode parsedActualNode = mapper.createObjectNode();
            parsedActualNode.set("name", actualNode.get("name"));

            if (actualNode.get("cover") != null) {
                parsedActualNode.set("cover", actualNode.get("cover").get("url"));
            }

            if (actualNode.get("genres") != null) {
                JsonNode genreNodes = actualNode.get("genres");
                ArrayNode genreParsedNodes = mapper.createArrayNode();
                for (JsonNode actualGenreNode : genreNodes) {
                    genreParsedNodes.add(actualGenreNode.get("name"));
                }
                parsedActualNode.set("genres", genreParsedNodes);
            }
            parsedNode.add(parsedActualNode);
        }


        ObjectMapper mapper1 = new ObjectMapper();
        GameDAO[] games = mapper1.readValue(parsedNode.toString(), GameDAO[].class);


    }


    public void getRecommendationsFromApi(String name) throws JsonProcessingException {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));

        System.out.println(name);

        // ENV o CONFIG
        headers.add("Authorization", "Bearer itun4ro82pfxq8ek5rnchqvsoqkpca");
        headers.add("Client-ID", "idvvhod17k3cbczniwadsu2jw2xbd4");

        String reqBody = "fields similar_games.name, similar_games.cover.url; where name = \"" + name + "\";";

        HttpEntity<String> httpEntity = new HttpEntity<String>(reqBody, headers);
        String result = restTemplate.postForObject(this.API_URL, httpEntity, String.class);

        System.out.println(result);

        // MAPEADO ---
        ObjectMapper mapper = new ObjectMapper().configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        JsonNode rawTree = mapper.readTree(result);
        ArrayNode parsedNode = mapper.createArrayNode();

        for (JsonNode actualNode : rawTree) {

            ObjectNode parsedActualNode = mapper.createObjectNode();
            parsedActualNode.set("similar_games.name", actualNode.get("similar_games.name"));

            if (actualNode.get("similar_games.cover") != null) {
                parsedActualNode.set("similar_games.cover", actualNode.get("similar_games.cover").get("url"));
            } else {
                System.out.println("fallo");
            }

            ObjectMapper mapper2 = new ObjectMapper();
            GameDAO[] games = mapper2.readValue(parsedNode.toString(), GameDAO[].class);


            for (GameDAO similar_game : games) {
                System.out.println(similar_game.getName());
                System.out.println(similar_game.getCover());
                System.out.println("\n");
            }

        }
    }




        public String readFeed() {
            try { URL feedUrl = new URL("http://feeds.feedburner.com/juegosadn");
                SyndFeedInput input = new SyndFeedInput();
                SyndFeed feed = input.build(new XmlReader(feedUrl));
//Recorrer los elementos del feed y mostrarlos
/*for(int i = 0; i< feed.getEntries().size(); i++){
StringBuilder (feed.getEntries().get(i).getTitle());
(feed.getEntries().get(i).getLink());
(feed.getEntries().get(i).getPublishedDate());
(feed.getEntries().get(i).getDescription().getValue());
(feed.getEntries().get(i).getContents().get(0).getValue());
}*/
                return feed.toString();
            }
            catch (Exception ex) {
                ex.printStackTrace();
                System.out.println("ERROR: "+ex.getMessage());
            }
        return "fallo";
    }




    public String getRankingFromApi() throws JsonProcessingException {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));


        // ENV o CONFIG
        headers.add("Authorization", "Bearer itun4ro82pfxq8ek5rnchqvsoqkpca");
        headers.add("Client-ID", "idvvhod17k3cbczniwadsu2jw2xbd4");

        String reqBody = "fields name, aggregated_rating, cover.url; sort aggregated_rating desc; where aggregated_rating_count > 14; limit 5;";

        HttpEntity<String> httpEntity = new HttpEntity<String>(reqBody, headers);
        String result = restTemplate.postForObject(this.API_URL, httpEntity, String.class);

        return result;


    }

}

