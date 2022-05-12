package com.group2.g2.model.core.dao;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GameDAO {
    private Long id;
    @JsonProperty("cover")
    private CoverDAO cover;
    private String name;
    @JsonProperty("genre")
    private GenreDAO genre;



    public GenreDAO getGenre() {
        return genre;
    }

    public void setGenre(GenreDAO genre) {
        this.genre = genre;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public CoverDAO getCover() {
        return cover;
    }

    public void setCover(CoverDAO cover) {
        this.cover = cover;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
