package com.group2.g2.api.core.service;

import java.util.List;
import java.util.Map;

import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;

public interface IFavoriteGamesService {
	public EntityResult favoriteGamesQuery(Map<String, Object> keyMap, List<String> attrList)
			throws OntimizeJEERuntimeException;

	public EntityResult favoriteGamesInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException;

	public EntityResult favoriteGamesUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap)
			throws OntimizeJEERuntimeException;

	public EntityResult favoriteGamesDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException;

	public EntityResult gameAndUserQuery(Map<String, Object> keyMap, List<String> attrList)
			throws OntimizeJEERuntimeException;

}
