package com.group2.g2.ws.core.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.group2.g2.api.core.service.ISubscriptionTypesService;
import com.ontimize.jee.server.rest.ORestController;

@RestController
@RequestMapping("/subscription_types")
public class SubscriptionTypesRestController extends ORestController<ISubscriptionTypesService> {

	@Autowired
	private ISubscriptionTypesService subscriptionTypesService;

	@Override
	public ISubscriptionTypesService getService() {
		return this.subscriptionTypesService;
	}
}
