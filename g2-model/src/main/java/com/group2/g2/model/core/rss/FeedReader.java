package com.group2.g2.model.core.rss;

import java.net.URL;

import com.rometools.rome.feed.synd.SyndFeed;
import com.rometools.rome.io.SyndFeedInput;
import com.rometools.rome.io.XmlReader;

public class FeedReader {
	
	  public static void main(String[] args) {
	        boolean ok = false;
	     
	            try {
	                URL feedUrl = new URL("http://feeds.feedburner.com/juegosadn");
	                
	               
	                SyndFeedInput input = new SyndFeedInput();
	                SyndFeed feed = input.build(new XmlReader(feedUrl));

	                System.out.println(feed);

	                ok = true;
	            }
	            catch (Exception ex) {
	                ex.printStackTrace();
	                System.out.println("ERROR: "+ex.getMessage());
	            }
	       

	        if (!ok) {
	            System.out.println();
	            System.out.println("FeedReader reads and prints any RSS/Atom feed type.");
	            System.out.println("The first parameter must be the URL of the feed to read.");
	            System.out.println();
	        }
	    }

}
