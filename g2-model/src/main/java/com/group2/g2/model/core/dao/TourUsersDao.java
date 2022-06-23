package com.group2.g2.model.core.dao;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;

@Repository("TourUsersDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/TourUsersDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")

public class TourUsersDao extends OntimizeJdbcDaoSupport {
	public static final String ATTR_ID = "id";
	public static final String ATTR_TOUR_ID = "tour_id";
	public static final String ATTR_USER_NAME = "user_name";
	public static final String ATTR_COUNTTOURQUERY = "countTourQuery";

}
