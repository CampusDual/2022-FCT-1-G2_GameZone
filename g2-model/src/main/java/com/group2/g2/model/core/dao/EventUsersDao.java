package com.group2.g2.model.core.dao;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;

@Repository("EventUsersDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/EventUsersDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")

public class EventUsersDao extends OntimizeJdbcDaoSupport {
	public static final String ATTR_ID = "id";
	public static final String ATTR_EVENT_ID = "event_id";
	public static final String ATTR_USER_NAME = "user_name";

}
