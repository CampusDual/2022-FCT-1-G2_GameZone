package com.group2.g2.model.core.dao;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.ArrayList;

public class GameDAO {
    private Long id;

    private String cover;
    private String name;

    @JsonProperty("genres")
    private ArrayList<String> genres;



    public ArrayList<String> getGenres() {
        return genres;
    }

    public void setGenres(ArrayList<String> genre) {
        this.genres = genre;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCover() {
        return cover;
    }

    public void setCover(String cover) {
        this.cover = cover;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}




