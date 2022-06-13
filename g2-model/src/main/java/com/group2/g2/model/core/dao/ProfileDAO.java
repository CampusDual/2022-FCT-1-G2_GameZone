package com.group2.g2.model.core.dao;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ProfileDAO {

    private Long id;
    private String backgroundCover;
    private String cover;
    private String title;
    private String dateRelease;
    private String companies;
    private String description;
    
    
    @JsonProperty("genres")
    private List<String> genres;

    @JsonProperty("plataforms")
    private List<String> plataforms;

    @JsonProperty("memberRating")
    private List<String> memberRating;

    @JsonProperty("criticRating")
    private List<String> criticRating;

    @JsonProperty("trailers")
    private List<String> trailers;

    @JsonProperty("gameplays")
    private List<String> gameplays;
    
    @JsonProperty("screenshots")
    private List<String> screenshots;

    @JsonProperty("artwork")
    private List<String> artwork;

    @JsonProperty("recommendations")
    private List<String> recommendations;


    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBackgroundCover() {
        return this.backgroundCover;
    }

    public void setBackgroundCover(String backgroundCover) {
        this.backgroundCover = backgroundCover;
    }

    public String getCover() {
        return this.cover;
    }

    public void setCover(String cover) {
        this.cover = cover;
    }

    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDateRelease() {
        return this.dateRelease;
    }

    public void setDateRelease(String dateRelease) {
        this.dateRelease = dateRelease;
    }

    public String getCompanies() {
        return this.companies;
    }

    public void setCompanies(String companies) {
        this.companies = companies;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<String> getGenres() {
        return this.genres;
    }

    public void setGenres(List<String> genres) {
        this.genres = genres;
    }

    public List<String> getPlataforms() {
        return this.plataforms;
    }

    public void setPlataforms(List<String> plataforms) {
        this.plataforms = plataforms;
    }

    public List<String> getMemberRating() {
        return this.memberRating;
    }

    public void setMemberRating(List<String> memberRating) {
        this.memberRating = memberRating;
    }

    public List<String> getCriticRating() {
        return this.criticRating;
    }

    public void setCriticRating(List<String> criticRating) {
        this.criticRating = criticRating;
    }

    public List<String> getTrailers() {
        return this.trailers;
    }

    public void setTrailers(List<String> trailers) {
        this.trailers = trailers;
    }

    public List<String> getGameplays() {
        return this.gameplays;
    }

    public void setGameplays(List<String> gameplays) {
        this.gameplays = gameplays;
    }

    public List<String> getScreenshots() {
        return this.screenshots;
    }

    public void setScreenshots(List<String> screenshots) {
        this.screenshots = screenshots;
    }

    public List<String> getArtwork() {
        return this.artwork;
    }

    public void setArtwork(List<String> artwork) {
        this.artwork = artwork;
    }

    public List<String> getRecommendations() {
        return this.recommendations;
    }

    public void setRecommendations(List<String> recommendations) {
        this.recommendations = recommendations;
    }

}
