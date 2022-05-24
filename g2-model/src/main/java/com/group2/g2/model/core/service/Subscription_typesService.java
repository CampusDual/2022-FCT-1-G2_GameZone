package com.group2.g2.model.core.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import com.group2.g2.api.core.service.ISubscription_typesService;
import com.group2.g2.model.core.dao.Subscription_typesDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;

@Service("Subscription_types")
@Lazy
public class Subscription_typesService implements ISubscription_typesService {
	@Autowired
	private Subscription_typesDao subscription_typesDao;
	@Autowired
	private DefaultOntimizeDaoHelper daoHelper;

	@Override
	public EntityResult subscription_typesQuery(Map<String, Object> keyMap, List<String> attrList)
			throws OntimizeJEERuntimeException {
		return this.daoHelper.query(this.subscription_typesDao, keyMap, attrList);
	}

	@Override
	public EntityResult subscription_typesInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException {
		return this.daoHelper.insert(this.subscription_typesDao, attrMap);
	}

	@Override
	public EntityResult subscription_typesUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap)
			throws OntimizeJEERuntimeException {
		return this.daoHelper.update(this.subscription_typesDao, attrMap, keyMap);
	}

	@Override
	public EntityResult subscription_typesDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
		return this.daoHelper.delete(this.subscription_typesDao, keyMap);
	}
}
