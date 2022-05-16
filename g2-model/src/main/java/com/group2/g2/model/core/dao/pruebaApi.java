package com.group2.g2.model.core.dao;

import com.google.gson.Gson;
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.JsonNode;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;
import org.json.JSONArray;
import org.json.JSONObject;

import java.util.ArrayList;

public class pruebaApi {
    public static void postIGDB(String name) throws UnirestException {
        HttpResponse<JsonNode> jsonResponse = Unirest.post("https://api.igdb.com/v4/games")
                .header("Client-ID", "idvvhod17k3cbczniwadsu2jw2xbd4")
                .header("Authorization", "Bearer itun4ro82pfxq8ek5rnchqvsoqkpca")
                .header("Accept", "application/json")
                .body("fields name,genres,cover,release_dates;")
                .asJson();

        JSONArray jsonArray = jsonResponse.getBody().getArray();

        System.out.println(jsonArray);
    }

    public static void main (String[]args) throws UnirestException {
            postIGDB("FIFA 19");
    }
}


