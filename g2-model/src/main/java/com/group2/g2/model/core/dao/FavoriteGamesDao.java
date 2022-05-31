package com.group2.g2.model.core.dao;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;

@Repository("Favorite_gamesDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/Favorite_gamesDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")

public class FavoriteGamesDao extends OntimizeJdbcDaoSupport {
	public static final String ATTR_GAME_ID = "game_id";
	public static final String ATTR_USER_ID = "user_id";

}
