package com.group2.g2.model.core.service;

import java.io.DataInput;
import java.io.IOException;
import java.util.Arrays;

import com.group2.g2.model.core.dao.GameDAO;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;

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

		String reqBody = "fields name, id, cover.url, genres.name;search \""+name+"\"; limit 500;";

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
			} else {
				System.out.println("fallo");
			}

			if (actualNode.get("genres") != null) {
				JsonNode genreNodes = actualNode.get("genres");
				ArrayNode genreParsedNodes = mapper.createArrayNode();
				for (JsonNode actualGenreNode : genreNodes) {
					genreParsedNodes.add(actualGenreNode.get("name"));
				}
				parsedActualNode.set("genres", genreParsedNodes);
			} else {
				System.out.println("fallo");
			}
			parsedNode.add(parsedActualNode);
		}


		ObjectMapper mapper1 = new ObjectMapper();
		GameDAO[] games = mapper1.readValue(parsedNode.toString(), GameDAO[].class);


		for (GameDAO game : games) {
			System.out.println(game.getName());
			System.out.println(game.getCover());
			System.out.println(game.getGenres());
			System.out.println("\n");
		}
	}


	public void getRecommendationsFromApi(String name) throws JsonProcessingException {
		RestTemplate restTemplate = new RestTemplate();
		HttpHeaders headers = new HttpHeaders();
		headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));

		System.out.println(name);

		// ENV o CONFIG
		headers.add("Authorization", "Bearer itun4ro82pfxq8ek5rnchqvsoqkpca");
		headers.add("Client-ID", "idvvhod17k3cbczniwadsu2jw2xbd4");

		String reqBody = "fields similar_games.name, similar_games.cover.url; where name = \""+name+"\";";

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
	public void getRankingFromApi(String name) throws JsonProcessingException {
		RestTemplate restTemplate = new RestTemplate();
		HttpHeaders headers = new HttpHeaders();
		headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));

		System.out.println(name);

		// ENV o CONFIG
		headers.add("Authorization", "Bearer itun4ro82pfxq8ek5rnchqvsoqkpca");
		headers.add("Client-ID", "idvvhod17k3cbczniwadsu2jw2xbd4");

		String reqBody = "fields name; sort aggregated_rating desc; where aggregated_rating_count = \""+name+"\"; limit 5;";

		HttpEntity<String> httpEntity = new HttpEntity<String>(reqBody, headers);
		String result = restTemplate.postForObject(this.API_URL, httpEntity, String.class);

		System.out.println(result);

		// MAPEADO ---
		ObjectMapper mapper = new ObjectMapper().configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
		JsonNode rawTree = mapper.readTree(result);
		ArrayNode parsedNode = mapper.createArrayNode();

	}

	}

