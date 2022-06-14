package com.group2.g2.ws.core.rest;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.group2.g2.model.core.dao.GameDAO;
import com.group2.g2.model.core.service.GameService;
import com.ontimize.jee.server.rest.ORestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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
    public List<GameDAO> game(@RequestParam String name) throws JsonProcessingException {
       return this.gameService.getGamesFromAPI(name);

    }

    @GetMapping(value = "/recommendations",  produces = MediaType.APPLICATION_JSON_VALUE)
    public List<GameDAO> similarGame(@RequestParam Integer id) throws JsonProcessingException {
        return this.gameService.getRecommendationsFromApi(id);
    }

    @GetMapping(value = "/ranking",  produces = MediaType.APPLICATION_JSON_VALUE)
    public String rankingGame() {
        return this.gameService.getRankingFromApi();

    }

}

