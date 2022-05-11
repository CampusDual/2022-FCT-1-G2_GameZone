package com.group2.g2.ws.core.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.group2.g2.api.core.service.IGamesService;
import com.group2.g2.api.core.service.IUsersService;
import com.ontimize.jee.server.rest.ORestController;

@RestController
@RequestMapping("/games")
public class GamesRestController extends ORestController<IGamesService>{

	@Autowired
	private IGamesService gamesService;

	@Override
	public IGamesService getService() {
		return this.gamesService;
	}
}