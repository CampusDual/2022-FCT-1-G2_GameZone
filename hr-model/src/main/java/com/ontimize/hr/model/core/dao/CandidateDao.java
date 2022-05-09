package com.ontimize.hr.model.core.dao;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;

@Repository("CandidateDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/CandidateDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")
public class CandidateDao extends OntimizeJdbcDaoSupport {

    public static final String ATTR_ID = "id";
    public static final String ATTR_PHOTO = "photo";
    public static final String ATTR_NAME = "name";
    public static final String ATTR_SURNAME = "surname";
    public static final String ATTR_BIRTHDAY = "birthday";
    public static final String ATTR_DNI = "dni";
    public static final String ATTR_PHONE = "phone";
    public static final String ATTR_EMAIL = "email";
    public static final String ATTR_EDUCATION = "education";
    public static final String ATTR_SPECIALTIES = "specialties";
    public static final String ATTR_STATUS = "status";
    public static final String ATTR_ORIGIN = "origin";
    public static final String ATTR_WAGE_LEVEL = "wage_level";
    public static final String ATTR_EXPERIENCE_LEVEL = "experience_level";
    public static final String ATTR_PROFILE = "profile";
    public static final String ATTR_COMMENT = "comment";
    public static final String ATTR_LINKEDIN = "linkedin";


}