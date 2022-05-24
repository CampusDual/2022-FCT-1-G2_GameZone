package com.group2.g2.model.core.dao;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;

@Repository("GamesDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/GamesDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")

public class GamesDao extends OntimizeJdbcDaoSupport {
	public static final String ATTR_ID = "id";
	public static final String ATTR_GAME_NAME = "game_name";

}
