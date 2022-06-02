package com.group2.g2.model.core.dao;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;

@Repository("SubscriptionTypesDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/SubscriptionTypesDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")

public class SubscriptionTypesDao extends OntimizeJdbcDaoSupport {
	public static final String ATTR_ID = "id";
	public static final String ATTR_SUB_TYPE = "sub_type";
	public static final String ATTR_PRICE = "price";

}
