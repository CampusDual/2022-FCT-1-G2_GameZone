package com.group2.g2.ws.core.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.group2.g2.api.core.service.IFavorite_gamesService;
import com.ontimize.jee.server.rest.ORestController;

@RestController
@RequestMapping("/favorite_games")
public class Favorite_gamesController extends ORestController<IFavorite_gamesService> {

	@Autowired
	private IFavorite_gamesService favorite_gamesService;

	@Override
	public IFavorite_gamesService getService() {
		return this.favorite_gamesService;
	}
}
