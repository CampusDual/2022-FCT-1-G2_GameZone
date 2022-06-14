package com.group2.g2.model.core.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import com.group2.g2.api.core.service.IEventUsersService;
import com.group2.g2.model.core.dao.EventUsersDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;

@Service("eventusers")
@Lazy
public class EventUsersService implements IEventUsersService {
	@Autowired
	private EventUsersDao eventUsersDao;
	@Autowired
	private DefaultOntimizeDaoHelper daoHelper;

	@Override
	public EntityResult eventUsersQuery(Map<String, Object> keyMap, List<String> attrList)
			throws OntimizeJEERuntimeException {
		return this.daoHelper.query(this.eventUsersDao, keyMap, attrList);
	}

	@Override
	public EntityResult eventUsersInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException {
		return this.daoHelper.insert(this.eventUsersDao, attrMap);
	}

	@Override
	public EntityResult eventUsersUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap)
			throws OntimizeJEERuntimeException {
		return this.daoHelper.update(this.eventUsersDao, attrMap, keyMap);
	}

	@Override
	public EntityResult eventUsersDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
		return this.daoHelper.delete(this.eventUsersDao, keyMap);
	}
}
