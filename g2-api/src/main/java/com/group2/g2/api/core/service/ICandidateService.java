package com.group2.g2.api.core.service;

import java.util.List;
import java.util.Map;

import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;

public interface ICandidateService {

	// CANDIDATE
	EntityResult candidateQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException;
	EntityResult candidateInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException;
	EntityResult candidateUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap) throws OntimizeJEERuntimeException;
	EntityResult candidateDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException;

}