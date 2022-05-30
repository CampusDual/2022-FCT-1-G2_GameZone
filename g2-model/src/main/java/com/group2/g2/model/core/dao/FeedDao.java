package com.group2.g2.model.core.dao;

import java.util.Date;

public class FeedDao {

    private String title;
    private String link;
    private Date publishedDate;
    private String description;
    private String contents;

    public FeedDao( String title, String link, Date publishedDate, String description, String contents){
        this.title = title;
        this.link = link;
        this.publishedDate = publishedDate;
        this.description = description;
        this.contents = contents;
    }

    public String getTitle(){
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getLink(){
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public Date getPublishedDate(){
        return publishedDate;
    }

    public void setPublishedDate(Date publishedDate) {
        this.publishedDate = publishedDate;
    }

    public String getDescription(){
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getContents(){
        return contents;
    }

    public void setContents(String contents) {
        this.contents = contents;
    }

}
