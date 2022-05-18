package com.group2.g2.model.core.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.introspect.TypeResolutionContext.Empty;
import com.group2.g2.api.core.service.IFavorite_gamesService;
import com.group2.g2.model.core.dao.Favorite_gamesDao;
import com.group2.g2.model.core.dao.GamesDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;

@Service("Favorite_gamesService")
@Lazy
public class Favorite_gamesService implements IFavorite_gamesService {
	@Autowired
	private Favorite_gamesDao favorite_gamesDao;
	@Autowired
	private DefaultOntimizeDaoHelper daoHelper;
	@Autowired
	private GamesService gamesService;

	@Override
	public EntityResult favorite_gamesQuery(Map<String, Object> keyMap, List<String> attrList)
			throws OntimizeJEERuntimeException {
		return this.daoHelper.query(this.favorite_gamesDao, keyMap, attrList);
	}

	@Override
	public EntityResult favorite_gamesInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException {

		Map<String, Object> gameKey = new HashMap<>();
		gameKey.put(GamesDao.ATTR_GAME_NAME, attrMap.remove(GamesDao.ATTR_GAME_NAME));

		List<String> game_id = new ArrayList<String>();
		game_id.add(GamesDao.ATTR_ID);

		EntityResult gamesQuery = gamesService.gamesQuery(gameKey, game_id);

		if (gamesQuery.getCode() != EntityResult.OPERATION_WRONG) {
			if (gamesQuery.calculateRecordNumber() > 0) {
				Map recordValues = gamesQuery.getRecordValues(0);
				attrMap.put(Favorite_gamesDao.ATTR_GAME_ID, recordValues.get(GamesDao.ATTR_ID));

			} else {
				EntityResult gamesInsert = gamesService.gamesInsert(gameKey);
				if (gamesInsert.getCode() != EntityResult.OPERATION_WRONG) {
					gamesInsert.get(GamesDao.ATTR_ID);
					attrMap.put(Favorite_gamesDao.ATTR_GAME_ID, gamesInsert.get(GamesDao.ATTR_ID));

				}
			}

		}

		return this.daoHelper.insert(this.favorite_gamesDao, attrMap);
	}

	@Override
	public EntityResult favorite_gamesUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap)
			throws OntimizeJEERuntimeException {
		return this.daoHelper.update(this.favorite_gamesDao, attrMap, keyMap);
	}

	@Override
	public EntityResult favorite_gamesDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
		return this.daoHelper.delete(this.favorite_gamesDao, keyMap);
	}
}
