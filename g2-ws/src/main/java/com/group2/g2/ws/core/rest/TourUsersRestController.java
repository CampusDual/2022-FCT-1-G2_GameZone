package com.group2.g2.ws.core.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.group2.g2.api.core.service.ITourUsersService;
import com.ontimize.jee.server.rest.ORestController;

@RestController
	@RequestMapping("/tourusers")
public class TourUsersRestController extends ORestController<ITourUsersService> {

	@Autowired
	private ITourUsersService tourUsersService;

	@Override
	public ITourUsersService getService() {
		return this.tourUsersService;
	}
}
