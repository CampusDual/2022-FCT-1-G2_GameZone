package com.group2.g2.model.core.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import com.group2.g2.api.core.service.ITournamentsService;
import com.group2.g2.model.core.dao.TournamentsDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;

@Service("tournaments")
@Lazy
public class TournamentsService implements ITournamentsService {
	@Autowired
	private TournamentsDao tournamentsDao;
	@Autowired
	private DefaultOntimizeDaoHelper daoHelper;

	@Override
	public EntityResult tournamentsQuery(Map<String, Object> keyMap, List<String> attrList)
			throws OntimizeJEERuntimeException {
		return this.daoHelper.query(this.tournamentsDao, keyMap, attrList);
	}

	@Override
	public EntityResult tournamentsInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException {
		return this.daoHelper.insert(this.tournamentsDao, attrMap);
	}

	@Override
	public EntityResult tournamentsUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap)
			throws OntimizeJEERuntimeException {
		return this.daoHelper.update(this.tournamentsDao, attrMap, keyMap);
	}

	@Override
	public EntityResult tournamentsDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
		return this.daoHelper.delete(this.tournamentsDao, keyMap);
	}
}
