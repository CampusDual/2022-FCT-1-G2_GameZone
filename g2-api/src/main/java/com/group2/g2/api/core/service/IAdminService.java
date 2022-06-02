package com.group2.g2.api.core.service;

import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;

import java.util.List;
import java.util.Map;

public interface IAdminService {

	public EntityResult adminQuery(Map<String, Object> keyMap, List<String> attrList)
			throws OntimizeJEERuntimeException;

	public EntityResult adminInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException;

	public EntityResult adminUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap)
			throws OntimizeJEERuntimeException;

	public EntityResult adminDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException;


}
