package com.group2.g2.api.core.service;

import java.util.List;
import java.util.Map;

import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;

public interface ITourUsersService {
	public EntityResult tourUsersQuery(Map<String, Object> keyMap, List<String> attrList)
			throws OntimizeJEERuntimeException;

	public EntityResult tourUsersInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException;

	public EntityResult tourUsersUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap)
			throws OntimizeJEERuntimeException;

	public EntityResult tourUsersDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException;

}
