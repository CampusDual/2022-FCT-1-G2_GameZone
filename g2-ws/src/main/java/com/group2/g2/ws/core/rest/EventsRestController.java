package com.group2.g2.ws.core.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.group2.g2.api.core.service.IEventsService;
import com.ontimize.jee.server.rest.ORestController;

@RestController
@RequestMapping("/events")
public class EventsRestController extends ORestController<IEventsService> {

	@Autowired
	private IEventsService eventsService;

	@Override
	public IEventsService getService() {
		return this.eventsService;
	}
}
