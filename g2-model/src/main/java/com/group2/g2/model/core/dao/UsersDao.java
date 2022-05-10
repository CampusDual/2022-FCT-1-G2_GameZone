package com.group2.g2.model.core.dao;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;

@Repository("UsersDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/UserDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")
public class UsersDao extends OntimizeJdbcDaoSupport {

	public static final String ATTR_ID = "id";
	public static final String ATTR_NAME = "u_name";
	public static final String ATTR_SURNAME = "u_surname";
	public static final String ATTR_MAIL = "u_mail";
	public static final String ATTR_USER = "u_user";
	public static final String ATTR_PASSWORD = "u_password";
	public static final String ATTR_DATE = "u_date";

	/*
	 * public static final String ATTR_ORIGIN = "ORIGIN"; public static final String
	 * ATTR_WAGE_LEVEL = "WAGE_LEVEL"; public static final String
	 * ATTR_EXPERIENCE_LEVEL = "EXPERIENCE_LEVEL"; public static final String
	 * ATTR_PROFILE = "PROFILE"; public static final String ATTR_COMMENT =
	 * "COMMENT"; public static final String ATTR_LINKEDIN = "LINKEDIN";
	 */
}
