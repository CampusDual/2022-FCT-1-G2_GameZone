package com.group2.g2.ws.core.rest;

import com.group2.g2.model.core.dao.FeedDao;
import com.group2.g2.model.core.service.FeedService;
import com.ontimize.jee.server.rest.ORestController;
import com.rometools.rome.io.FeedException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/feedReader")
public class FeedRestController extends ORestController<FeedService>{

    @Autowired
    private FeedService feedService;
    
    @Override
    public  FeedService getService() {
        return this.feedService;
    }

    @GetMapping(value = "/feed",  produces = MediaType.APPLICATION_JSON_VALUE)
    public List<FeedDao> getFeedDaos() throws IllegalArgumentException, FeedException, IOException {
        return this.feedService.readFeed();
    }

}
