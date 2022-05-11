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
	public static final String ATTR_NAME = "g_name";
	public static final String ATTR_GENDER = "g_gender";
	public static final String ATTR_RELEASE = "g_release";
	public static final String ATTR_DESCRIPTION = "g_description";
	public static final String ATTR_COVER = "g_cover";

}