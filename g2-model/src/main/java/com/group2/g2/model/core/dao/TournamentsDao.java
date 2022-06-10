package com.group2.g2.model.core.dao;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;

@Repository("TournamentsDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/TournamentsDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")

public class TournamentsDao extends OntimizeJdbcDaoSupport {
	public static final String ATTR_ID = "id";
	public static final String ATTR_TOUR_NAME = "tour_name";
	public static final String ATTR_DESCIPTION = "description";
	public static final String ATTR_START_DATE = "start_date";
	public static final String ATTR_END_DATE = "end_date";
	public static final String ATTR_TOURUSERSQUERY = "tourUsersQuery";

}
