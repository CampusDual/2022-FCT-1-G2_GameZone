package com.group2.g2.ws.core.rest;

import java.io.IOException;
import java.util.List;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.group2.g2.model.core.dao.FeedDao;
import com.group2.g2.model.core.service.FeedService;
import com.ontimize.jee.server.rest.ORestController;
import com.rometools.rome.feed.synd.SyndFeed;
import com.rometools.rome.io.FeedException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/feedReader")
public class FeedRestController extends ORestController<FeedService>{

    @Autowired
    private FeedService feedService;
    
    @Override
    public  FeedService getService() {
        return this.feedService;
    }

    @RequestMapping(value = "/feed", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public List<FeedDao> getFeedDaos() throws IllegalArgumentException, FeedException, IOException {
        return this.feedService.readFeed();
    }

}
