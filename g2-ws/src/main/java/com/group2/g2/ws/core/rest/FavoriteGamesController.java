package com.group2.g2.ws.core.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.group2.g2.api.core.service.IFavoriteGamesService;
import com.ontimize.jee.server.rest.ORestController;

@RestController
@RequestMapping("/favorite_games")
public class FavoriteGamesController extends ORestController<IFavoriteGamesService> {

	@Autowired
	private IFavoriteGamesService favoriteGamesService;

	@Override
	public IFavoriteGamesService getService() {
		return this.favoriteGamesService;
	}
}
