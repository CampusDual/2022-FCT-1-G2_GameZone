package com.group2.g2.model.core.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import com.group2.g2.api.core.service.ISubscriptionTypesService;
import com.group2.g2.model.core.dao.SubscriptionTypesDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;

@Service("Subscription_types")
@Lazy
public class SubscriptionTypesService implements ISubscriptionTypesService {
	@Autowired
	private SubscriptionTypesDao subscriptionTypesDao;
	@Autowired
	private DefaultOntimizeDaoHelper daoHelper;

	@Override
	public EntityResult subscriptionTypesQuery(Map<String, Object> keyMap, List<String> attrList)
			throws OntimizeJEERuntimeException {
		return this.daoHelper.query(this.subscriptionTypesDao, keyMap, attrList);
	}

	@Override
	public EntityResult subscriptionTypesInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException {
		return this.daoHelper.insert(this.subscriptionTypesDao, attrMap);
	}

	@Override
	public EntityResult subscriptionTypesUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap)
			throws OntimizeJEERuntimeException {
		return this.daoHelper.update(this.subscriptionTypesDao, attrMap, keyMap);
	}

	@Override
	public EntityResult subscriptionTypesDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
		return this.daoHelper.delete(this.subscriptionTypesDao, keyMap);
	}
}
