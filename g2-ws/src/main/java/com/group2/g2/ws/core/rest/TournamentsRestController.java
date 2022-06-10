package com.group2.g2.ws.core.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.group2.g2.api.core.service.ITournamentsService;
import com.ontimize.jee.server.rest.ORestController;

@RestController
@RequestMapping("/tournaments")
public class TournamentsRestController extends ORestController<ITournamentsService> {

	@Autowired
	private ITournamentsService tournamentsService;

	@Override
	public ITournamentsService getService() {
		return this.tournamentsService;
	}
}
