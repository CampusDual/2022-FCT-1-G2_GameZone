package com.group2.g2.ws.core.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.group2.g2.api.core.service.IUsersService;
import com.ontimize.jee.server.rest.ORestController;

@RestController
@RequestMapping("/users")
public class UsersRestControllers extends ORestController<IUsersService>{

	@Autowired
	private IUsersService usersService;

	@Override
	public IUsersService getService() {
		return this.usersService;
	}
}