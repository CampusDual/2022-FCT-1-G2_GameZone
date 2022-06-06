package com.group2.g2.ws.core.rest;


import com.group2.g2.api.core.service.IAdminService;
import com.group2.g2.api.core.service.IUserService;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.server.rest.ORestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/admin")
@ComponentScan(basePackageClasses={IAdminService.class})
public class AdminRestController extends ORestController<IAdminService> {

	@Autowired
	private IAdminService adminSrv;

	@Override
	public IAdminService getService() {
		return this.adminSrv;
	}


}
