package com.group2.g2.model.core.rss;

import java.net.MalformedURLException;
import java.net.URL;
import java.nio.charset.MalformedInputException;

import com.rometools.rome.feed.synd.SyndFeed;
import com.rometools.rome.io.SyndFeedInput;
import com.rometools.rome.io.XmlReader;

public class FeedReader {
	
	  public static void readFeed(URL feedUrl) {
	       
	     
	            try {

	                SyndFeedInput input = new SyndFeedInput();
	                SyndFeed feed = input.build(new XmlReader(feedUrl));

	                //Recorrer los elementos del feed y mostrarlos
					for(int i = 0; i< feed.getEntries().size(); i++){
						/*System.out.println(feed.getEntries().get(i).getTitle());
						System.out.println(feed.getEntries().get(i).getLink());
						System.out.println(feed.getEntries().get(i).getPublishedDate());
						System.out.println(feed.getEntries().get(i).getDescription().getValue());*/

						for(int j = 0; j< feed.getEntries().get(i).getContents().size();j++){
							System.out.println(feed.getEntries().get(i).getContents().get(j).getValue());
						}
					}

					System.out.println("----------------------------------------------------------------");

	            
	            }
	            catch (Exception ex) {
	                ex.printStackTrace();
	                System.out.println("ERROR: "+ex.getMessage());
	            }
				
	    }

		public static void main(String[] args) throws MalformedURLException {
			URL feedUrl = new URL("http://feeds.feedburner.com/juegosadn");
			readFeed(feedUrl);
		}

}
