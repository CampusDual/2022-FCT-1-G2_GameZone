package com.group2.g2.model.core.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import com.group2.g2.api.core.service.IEventsService;
import com.group2.g2.model.core.dao.EventsDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;

@Service("events")
@Lazy
public class EventsService implements IEventsService {
	@Autowired
	private EventsDao eventsDao;
	@Autowired
	private DefaultOntimizeDaoHelper daoHelper;

	@Override
	public EntityResult eventsQuery(Map<String, Object> keyMap, List<String> attrList)
			throws OntimizeJEERuntimeException {
		return this.daoHelper.query(this.eventsDao, keyMap, attrList);
	}

	@Override
	public EntityResult eventsInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException {
		return this.daoHelper.insert(this.eventsDao, attrMap);
	}

	@Override
	public EntityResult eventsUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap)
			throws OntimizeJEERuntimeException {
		return this.daoHelper.update(this.eventsDao, attrMap, keyMap);
	}

	@Override
	public EntityResult eventsDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
		return this.daoHelper.delete(this.eventsDao, keyMap);
	}

	@Override
	public EntityResult eventUsersQuery(Map<String, Object> keyMap, List<String> attrList)
			throws OntimizeJEERuntimeException {
		return this.daoHelper.query(this.eventsDao, keyMap, attrList, EventsDao.ATTR_EVENTUSERSQUERY);
	}
}
