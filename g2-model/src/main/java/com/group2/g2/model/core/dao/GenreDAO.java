package com.group2.g2.model.core.dao;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.sql.Time;
import java.sql.Timestamp;

public class GenreDAO {

    @JsonProperty("id")
    private long id;
    @JsonProperty("created_at")
    private Timestamp created_at;
    @JsonProperty("name")
    private String name;
    @JsonProperty("slug")
    private String slug;
    @JsonProperty("updated_at")
    private Timestamp updated_at;
    @JsonProperty("url")
    private String url;
    @JsonProperty("checksum")
    private String checksum;


    public GenreDAO(long id, Timestamp created_at, String name, String slug, Timestamp updated_at, String url, String checksum) {
        this.id = id;
        this.created_at = created_at;
        this.name = name;
        this.slug = slug;
        this.updated_at = updated_at;
        this.url = url;
        this.checksum = checksum;
    }

    public Timestamp getCreated_at() {
        return created_at;
    }

    public void setCreated_at(Timestamp created_at) {
        this.created_at = created_at;
    }

    public String getSlug() {
        return slug;
    }

    public void setSlug(String slug) {
        this.slug = slug;
    }

    public Timestamp getUpdated_at() {
        return updated_at;
    }

    public void setUpdated_at(Timestamp updated_at) {
        this.updated_at = updated_at;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getChecksum() {
        return checksum;
    }

    public void setChecksum(String checksum) {
        this.checksum = checksum;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
