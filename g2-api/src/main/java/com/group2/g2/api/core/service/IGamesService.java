package com.group2.g2.api.core.service;

import java.util.List;
import java.util.Map;

import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;

public interface IGamesService {
	public EntityResult gamesQuery(Map<String, Object> keyMap, List<String> attrList)
			throws OntimizeJEERuntimeException;

	public EntityResult gamesInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException;

	public EntityResult gamesUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap)
			throws OntimizeJEERuntimeException;

	public EntityResult gamesDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException;

}
