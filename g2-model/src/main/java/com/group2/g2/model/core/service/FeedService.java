package com.group2.g2.model.core.service;

import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.group2.g2.model.core.dao.FeedDao;
import com.rometools.rome.feed.synd.SyndFeed;
import com.rometools.rome.io.FeedException;
import com.rometools.rome.io.SyndFeedInput;
import com.rometools.rome.io.XmlReader;

import org.springframework.stereotype.Service;

@Service
public class FeedService {

	public List<FeedDao> readFeed() throws IllegalArgumentException, FeedException, IOException {

		URL feedUrl = new URL("http://feeds.feedburner.com/juegosadn");
		List<FeedDao> feedDaos = new ArrayList<>();

		SyndFeedInput input = new SyndFeedInput();
		SyndFeed feed = input.build(new XmlReader(feedUrl));

		for (int i = 0; i < 5; i++) {
			String title = feed.getEntries().get(i).getTitle();

			String link = feed.getEntries().get(i).getLink();

			Date publishedDate = feed.getEntries().get(i).getPublishedDate();

			String description = feed.getEntries().get(i).getDescription().toString();

			String contents = feed.getEntries().get(i).getContents().get(0).getValue();

			FeedDao feedDao = new FeedDao(title, link, publishedDate, description, contents);
			feedDaos.add(feedDao);


		}
		
		return feedDaos;
	}

}
