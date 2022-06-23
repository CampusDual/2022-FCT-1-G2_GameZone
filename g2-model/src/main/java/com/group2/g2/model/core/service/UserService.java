package com.group2.g2.model.core.service;

import com.group2.g2.api.core.service.IUserService;
import com.group2.g2.model.core.dao.UserDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Lazy
@Service("UserService")
public class UserService implements IUserService {

	@Autowired
	private UserDao userDao;

	@Autowired
	private DefaultOntimizeDaoHelper daoHelper;



	@Override
	public EntityResult userQuery(Map<String, Object> keyMap, List<String> attrList)
			throws OntimizeJEERuntimeException {
		return this.daoHelper.query(this.userDao, keyMap, attrList);
	}

	@Override
	public EntityResult userInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException {
		return this.daoHelper.insert(this.userDao, attrMap);
	}

	@Override
	public EntityResult userUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap)
			throws OntimizeJEERuntimeException {
		return this.daoHelper.update(this.userDao, attrMap, keyMap);
	}

	@Override
	public EntityResult userDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
		return this.daoHelper.delete(this.userDao, keyMap);
	}


	public EntityResult registerInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException {
		return this.daoHelper.insert(this.userDao,attrMap);
	}

	public EntityResult updateUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap)
			throws OntimizeJEERuntimeException {
		return this.daoHelper.update(this.userDao, attrMap, keyMap);
	}
	
	public EntityResult newSubsQuery(Map<String, Object> keyMap, List<String> attrList)
			throws OntimizeJEERuntimeException {
		return this.daoHelper.query(this.userDao, keyMap, attrList, UserDao.NEWSUBSQUERY);
	}
	
	public EntityResult subsPriceQuery(Map<String, Object> keyMap, List<String> attrList)
			throws OntimizeJEERuntimeException {
		return this.daoHelper.query(this.userDao, keyMap, attrList, UserDao.SUBSPRICEQUERY);
	}
	
	public EntityResult dashBoardQuery(Map<String, Object> keyMap, List<String> attrList)
			throws OntimizeJEERuntimeException {
		return this.daoHelper.query(this.userDao, keyMap, attrList, UserDao.DASHBOARDQUERY);
	}

}
