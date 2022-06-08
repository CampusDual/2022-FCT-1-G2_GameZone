package com.group2.g2.api.core.service;

import java.util.List;
import java.util.Map;

import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;

public interface ITournamentsService {
	public EntityResult tournamentsQuery(Map<String, Object> keyMap, List<String> attrList)
			throws OntimizeJEERuntimeException;

	public EntityResult tournamentsInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException;

	public EntityResult tournamentsUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap)
			throws OntimizeJEERuntimeException;

	public EntityResult tournamentsDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException;

}
