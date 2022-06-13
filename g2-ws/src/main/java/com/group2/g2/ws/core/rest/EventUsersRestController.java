package com.group2.g2.ws.core.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.group2.g2.api.core.service.IEventUsersService;
import com.ontimize.jee.server.rest.ORestController;

@RestController
@RequestMapping("/eventusers")
public class EventUsersRestController extends ORestController<IEventUsersService> {

	@Autowired
	private IEventUsersService eventUsersService;

	@Override
	public IEventUsersService getService() {
		return this.eventUsersService;
	}
}
