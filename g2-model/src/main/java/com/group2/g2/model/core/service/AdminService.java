package com.group2.g2.model.core.service;

import com.group2.g2.api.core.service.IAdminService;
import com.group2.g2.model.core.dao.AdminDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Lazy
@Service("AdminService")
public class AdminService implements IAdminService {

	@Autowired
	private AdminDao adminDao;

	@Autowired
	private DefaultOntimizeDaoHelper daoHelper;



	@Override
	public EntityResult adminQuery(Map<String, Object> keyMap, List<String> attrList)
			throws OntimizeJEERuntimeException {
		return this.daoHelper.query(this.adminDao, keyMap, attrList);
	}

	@Override
	public EntityResult adminInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException {
		return this.daoHelper.insert(this.adminDao, attrMap);
	}

	@Override
	public EntityResult adminUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap)
			throws OntimizeJEERuntimeException {
		return this.daoHelper.update(this.adminDao, attrMap, keyMap);
	}

	@Override
	public EntityResult adminDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
		return this.daoHelper.delete(this.adminDao, keyMap);
	}


	public EntityResult registerInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException {
		return this.daoHelper.insert(this.adminDao,attrMap);
	}

	public EntityResult updateUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap)
			throws OntimizeJEERuntimeException {
		return this.daoHelper.update(this.adminDao, attrMap, keyMap);
	}

}
