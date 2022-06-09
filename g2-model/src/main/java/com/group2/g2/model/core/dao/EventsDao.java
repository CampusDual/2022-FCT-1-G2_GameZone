package com.group2.g2.model.core.dao;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;

@Repository("EventsDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/EventsDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")

public class EventsDao extends OntimizeJdbcDaoSupport {
	public static final String ATTR_ID = "id";
	public static final String ATTR_EVENT_NAME = "event_name";
	public static final String ATTR_DESCIPTION = "description";
	public static final String ATTR_START_DATE = "start_date";
	public static final String ATTR_END_DATE = "end_date";
	public static final String ATTR_EVENTUSERSQUERY = "eventUsersQuery";

}
