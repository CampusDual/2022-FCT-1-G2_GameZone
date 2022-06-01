package com.group2.g2.ws.core.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.group2.g2.api.core.service.ISubscription_typesService;
import com.ontimize.jee.server.rest.ORestController;

@RestController
@RequestMapping("/subscription_types")
public class Subscription_typesRestController extends ORestController<ISubscription_typesService> {

	@Autowired
	private ISubscription_typesService subscription_typesService;

	@Override
	public ISubscription_typesService getService() {
		return this.subscription_typesService;
	}
}
