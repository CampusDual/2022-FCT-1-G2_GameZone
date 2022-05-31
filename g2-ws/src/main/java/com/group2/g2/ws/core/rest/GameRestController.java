package com.group2.g2.ws.core.rest;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.group2.g2.model.core.service.GameService;
import com.ontimize.jee.server.rest.ORestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/game")
public class GameRestController extends ORestController<GameService> {

    @Autowired
    private GameService gameService;

    @Override
    public GameService getService() {
        return this.gameService;
    }

    @GetMapping(value = "/game",  produces = MediaType.APPLICATION_JSON_VALUE)
    public String game(@RequestParam String name) throws JsonProcessingException {
        this.gameService.getGamesFromAPI(name);
        return "Endpoint is working!";
    }

    @GetMapping(value = "/recommendations",  produces = MediaType.APPLICATION_JSON_VALUE)
    public String similarGame(@RequestParam String name) throws JsonProcessingException {
        this.gameService.getRecommendationsFromApi(name);
        return "Endpoint is working!";
    }

    @GetMapping(value = "/ranking",  produces = MediaType.APPLICATION_JSON_VALUE)
    public String rankingGame() throws JsonProcessingException {
        return this.gameService.getRankingFromApi();

    }

}

