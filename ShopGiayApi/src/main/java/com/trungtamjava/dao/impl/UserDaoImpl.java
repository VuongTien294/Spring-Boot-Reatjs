package com.trungtamjava.dao.impl;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.trungtamjava.dao.UserDao;
import com.trungtamjava.entity.User;
import com.trungtamjava.model.SearchUserDTO;

@Repository
@Transactional
public class UserDaoImpl extends JPARepository<User> implements UserDao {
	
	@Autowired
	EntityManager entityManager;
	
	@Override
	public User getUserId(Long id) {
		return entityManager.find(User.class, id);
	}
	
	@Override
	public List<User> find(SearchUserDTO searchUserDTO){
		CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
		CriteriaQuery<User> criteriaQuery = criteriaBuilder.createQuery(User.class);
		Root<User> root = criteriaQuery.from(User.class);
		
		List<Predicate> predicates = new ArrayList<Predicate>();
		if(StringUtils.isNotBlank(searchUserDTO.getKeyword())) {
			Predicate predicate1 = criteriaBuilder.like(root.get("username"),"%"+searchUserDTO.getKeyword().toLowerCase()+"%");
			Predicate predicate2 = criteriaBuilder.like(root.get("name"),"%"+searchUserDTO.getKeyword().toLowerCase()+"%");
			predicates.add(criteriaBuilder.or(predicate1,predicate2));
		}
		
		if(searchUserDTO.getRoleList()!=null) {
			predicates.add(root.join("roles").in(searchUserDTO.getRoleList()));
		}
		
		if (searchUserDTO.getEnabled() != null) {
			predicates.add(criteriaBuilder.equal(root.get("enabled"), searchUserDTO.getEnabled()));
		}
		
		criteriaQuery.where(predicates.toArray(new Predicate[] {}));
		
		if (StringUtils.equals(searchUserDTO.getSortBy().getData(), "id")) {
			if (searchUserDTO.getSortBy().isAsc()) {
				criteriaQuery.orderBy(criteriaBuilder.asc(root.get("id")));
			} else {
				criteriaQuery.orderBy(criteriaBuilder.desc(root.get("id")));
			}
		} else if (StringUtils.equals(searchUserDTO.getSortBy().getData(), "name")) {
			if (searchUserDTO.getSortBy().isAsc()) {
				criteriaQuery.orderBy(criteriaBuilder.asc(root.get("name")));
			} else {
				criteriaQuery.orderBy(criteriaBuilder.desc(root.get("name")));
			}
		} else if (StringUtils.equals(searchUserDTO.getSortBy().getData(), "createdDate")) {
			if (searchUserDTO.getSortBy().isAsc()) {
				criteriaQuery.orderBy(criteriaBuilder.asc(root.get("createdDate")));
			} else {
				criteriaQuery.orderBy(criteriaBuilder.desc(root.get("createdDate")));
			}
		}
		
		TypedQuery<User> typedQuery = entityManager.createQuery(criteriaQuery.select(root).distinct(true));
		if(searchUserDTO.getStart()!= null) {
			typedQuery.setFirstResult(searchUserDTO.getStart());
			typedQuery.setMaxResults(searchUserDTO.getLength());
		}
		
		return typedQuery.getResultList();
		
		
	}
	
	@Override
	public long count(SearchUserDTO searchUserDTO) {
		CriteriaBuilder builder = entityManager.getCriteriaBuilder();
		CriteriaQuery<Long> criteriaQuery = builder.createQuery(Long.class);
		Root<User> root = criteriaQuery.from(User.class);

		
		List<Predicate> predicates = new ArrayList<Predicate>();
		if (StringUtils.isNotBlank(searchUserDTO.getKeyword())) {
			Predicate predicate1 = builder.like(builder.lower(root.get("phone")),
					"%" + searchUserDTO.getKeyword().toLowerCase() + "%");
			Predicate predicate2 = builder.like(builder.lower(root.get("name")),
					"%" + searchUserDTO.getKeyword().toLowerCase() + "%");

			predicates.add(builder.or(predicate2, predicate1));
		}

		if (searchUserDTO.getRoleList() != null) {
			predicates.add(root.join("roles").in(searchUserDTO.getRoleList()));
		}

		if (searchUserDTO.getEnabled() != null) {
			predicates.add(builder.equal(root.get("enabled"), searchUserDTO.getEnabled()));
		}

		criteriaQuery.where(predicates.toArray(new Predicate[] {}));
		TypedQuery<Long> typedQuery = entityManager.createQuery(criteriaQuery.select(builder.count(root)));
		return typedQuery.getSingleResult();
	}
	
	
	@Override
	public long countTotal(SearchUserDTO searchUserDTO) {
		CriteriaBuilder builder = entityManager.getCriteriaBuilder();
		CriteriaQuery<Long> criteriaQuery = builder.createQuery(Long.class);
		Root<User> root = criteriaQuery.from(User.class);

		TypedQuery<Long> typedQuery = entityManager.createQuery(criteriaQuery.select(builder.count(root)));
		return typedQuery.getSingleResult();
	}
	
	@Override
	public User getByUsername(String username) {
		try {
			CriteriaBuilder builder = entityManager.getCriteriaBuilder();
			CriteriaQuery<User> criteriaQuery = builder.createQuery(User.class);
			Root<User> root = criteriaQuery.from(User.class);
			criteriaQuery.where(builder.equal(builder.lower(root.get("username")), username));
			TypedQuery<User> typedQuery = entityManager.createQuery(criteriaQuery.select(root).distinct(true));
			return typedQuery.getSingleResult();
		} catch (NoResultException exception) {
			return null;
		}
	}
	
	@Override
	public User getByName(String name) {
		try {
			CriteriaBuilder builder = entityManager.getCriteriaBuilder();
			CriteriaQuery<User> criteriaQuery = builder.createQuery(User.class);
			Root<User> root = criteriaQuery.from(User.class);
			criteriaQuery.where(builder.equal(builder.lower(root.get("name")),name));
			TypedQuery<User> typedQuery = entityManager.createQuery(criteriaQuery.select(root).distinct(true));
			return typedQuery.getSingleResult();
		} catch (NoResultException exception) {
			return null;
		}
	}
	
	

}
