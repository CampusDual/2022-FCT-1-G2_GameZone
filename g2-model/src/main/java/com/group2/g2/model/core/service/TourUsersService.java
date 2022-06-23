package com.group2.g2.model.core.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import com.group2.g2.api.core.service.ITourUsersService;
import com.group2.g2.model.core.dao.TourUsersDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;

@Service("tourusers")
@Lazy
public class TourUsersService implements ITourUsersService {
	@Autowired
	private TourUsersDao tourUsersDao;
	@Autowired
	private DefaultOntimizeDaoHelper daoHelper;

	@Override
	public EntityResult tourUsersQuery(Map<String, Object> keyMap, List<String> attrList)
			throws OntimizeJEERuntimeException {
		return this.daoHelper.query(this.tourUsersDao, keyMap, attrList);
	}

	@Override
	public EntityResult tourUsersInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException {
		return this.daoHelper.insert(this.tourUsersDao, attrMap);
	}

	@Override
	public EntityResult tourUsersUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap)
			throws OntimizeJEERuntimeException {
		return this.daoHelper.update(this.tourUsersDao, attrMap, keyMap);
	}

	@Override
	public EntityResult tourUsersDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
		return this.daoHelper.delete(this.tourUsersDao, keyMap);
	}
	
	public EntityResult countTourQuery(Map<String, Object> keyMap, List<String> attrList)
			throws OntimizeJEERuntimeException {
		return this.daoHelper.query(this.tourUsersDao, keyMap, attrList, TourUsersDao.ATTR_COUNTTOURQUERY);
	}
}
