package com.group2.g2.model.core.dao;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CoverDAO {

    @JsonProperty("id")
    private long id;
    @JsonProperty("alpha_channel")
    private boolean alpha_channel;
    @JsonProperty("animated")
    private boolean animated;
    @JsonProperty("game")
    private int game;
    @JsonProperty("height")
    private int height;
    @JsonProperty("image_id")
    private String image_id;
    @JsonProperty("url")
    private String url;
    @JsonProperty("width")
    private int width;
    @JsonProperty("checksum")
    private String checksum;


    public CoverDAO(long id, boolean alpha_channel, boolean animated, int game, int height, String image_id, String url, int width, String checksum) {
        this.id = id;
        this.alpha_channel = alpha_channel;
        this.animated = animated;
        this.game = game;
        this.height = height;
        this.image_id = image_id;
        this.url = url;
        this.width = width;
        this.checksum = checksum;
    }

    public boolean isAlpha_channel() {
        return alpha_channel;
    }

    public void setAlpha_channel(boolean alpha_channel) {
        this.alpha_channel = alpha_channel;
    }

    public int getHeight() {
        return height;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    public int getWidth() {
        return width;
    }

    public void setWidth(int width) {
        this.width = width;
    }

    public String getChecksum() {
        return checksum;
    }

    public void setChecksum(String checksum) {
        this.checksum = checksum;
    }

    public String getImage_id() {
        return image_id;
    }

    public void setImage_id(String image_id) {
        this.image_id = image_id;
    }

    public int getGame() {
        return game;
    }

    public void setGame(int game) {
        this.game = game;
    }

    public boolean isAnimated() {
        return animated;
    }

    public void setAnimated(boolean animated) {
        this.animated = animated;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }
}
