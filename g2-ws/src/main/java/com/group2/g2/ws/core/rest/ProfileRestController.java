package com.group2.g2.ws.core.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.group2.g2.model.core.service.ProfileService;
import com.ontimize.jee.server.rest.ORestController;

@RestController
@RequestMapping("/profile")
public class ProfileRestController extends ORestController<ProfileService> {

    @Autowired
    private ProfileService profileService;

    @Override
    public ProfileService getService() {
        return this.profileService;
    }

    @GetMapping(value = "/profile",  produces = MediaType.APPLICATION_JSON_VALUE)
    public String game(@RequestParam int id) throws JsonProcessingException {
       return this.profileService.getProfileFromApi(id);

    }
    
}
