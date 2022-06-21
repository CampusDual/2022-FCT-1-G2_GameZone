package com.group2.g2.model.core.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import com.group2.g2.api.core.service.IFavoriteGamesService;
import com.group2.g2.model.core.dao.FavoriteGamesDao;
import com.group2.g2.model.core.dao.GamesDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;

@Service("Favorite_gamesService")
@Lazy
public class FavoriteGamesService implements IFavoriteGamesService {
	@Autowired
	private FavoriteGamesDao favoriteGamesDao;
	@Autowired
	private DefaultOntimizeDaoHelper daoHelper;
	@Autowired
	private GamesService gamesService;

	@Override
	public EntityResult favoriteGamesQuery(Map<String, Object> keyMap, List<String> attrList)
			throws OntimizeJEERuntimeException {
		return this.daoHelper.query(this.favoriteGamesDao, keyMap, attrList);
	}

	@Override
	public EntityResult favoriteGamesInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException {

		Map<String, Object> gameKey = new HashMap<>();
		System.out.println(attrMap);
		//gameKey.put(GamesDao.ATTR_GAME_NAME, attrMap.remove(GamesDao.ATTR_GAME_NAME));
		gameKey.put(GamesDao.ATTR_GAME_ID, attrMap.remove(GamesDao.ATTR_GAME_ID));

		List<String> gameId = new ArrayList<>();
		gameId.add(GamesDao.ATTR_ID);

		EntityResult gamesQuery = gamesService.gamesQuery(gameKey, gameId);

		if (gamesQuery.getCode() != EntityResult.OPERATION_WRONG) {
			if (gamesQuery.calculateRecordNumber() > 0) {
				Map recordValues = gamesQuery.getRecordValues(0);
				attrMap.put(FavoriteGamesDao.ATTR_GAME_ID, recordValues.get(GamesDao.ATTR_ID));

			} else {
				EntityResult gamesInsert = gamesService.gamesInsert(gameKey);
				if (gamesInsert.getCode() != EntityResult.OPERATION_WRONG) {
					gamesInsert.get(GamesDao.ATTR_ID);
					attrMap.put(FavoriteGamesDao.ATTR_GAME_ID, gamesInsert.get(GamesDao.ATTR_ID));

				}
			}

		}

		return this.daoHelper.insert(this.favoriteGamesDao, attrMap);
	}

	@Override
	public EntityResult favoriteGamesUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap)
			throws OntimizeJEERuntimeException {
		return this.daoHelper.update(this.favoriteGamesDao, attrMap, keyMap);
	}

	@Override
	public EntityResult favoriteGamesDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
		return this.daoHelper.delete(this.favoriteGamesDao, keyMap);
	}

	public EntityResult gameAndUserQuery(Map<String, Object> keyMap, List<String> attrList)
			throws OntimizeJEERuntimeException {
		return this.daoHelper.query(this.favoriteGamesDao, keyMap, attrList,favoriteGamesDao.ATTR_GAME_AND_USER);
	}




}
