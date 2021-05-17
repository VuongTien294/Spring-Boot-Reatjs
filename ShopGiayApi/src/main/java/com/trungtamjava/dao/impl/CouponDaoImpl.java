package com.trungtamjava.dao.impl;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.trungtamjava.dao.CouponDao;

import com.trungtamjava.entity.Coupon;

import com.trungtamjava.model.SearchCouponDTO;

@Repository
@Transactional
public class CouponDaoImpl extends JPARepository<Coupon> implements CouponDao {

	@Autowired
	private EntityManager entityManager;

	
	@Override
	public Coupon getId(Long id) {
		return entityManager.find(Coupon.class, id);
	}

	
	@Override
	public List<Coupon> find(SearchCouponDTO searchCouponDTO) {
		CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
		CriteriaQuery<Coupon> criteriaQuery = criteriaBuilder.createQuery(Coupon.class);

		Root<Coupon> root = criteriaQuery.from(Coupon.class);

		List<Predicate> predicates = new ArrayList<Predicate>();

		if (StringUtils.isNotBlank(searchCouponDTO.getKeyword())) {
			Predicate predicate = criteriaBuilder.like(criteriaBuilder.lower(root.get("code")),
					"%" + searchCouponDTO.getKeyword().toLowerCase() + "%");
			predicates.add(predicate);
		}

		criteriaQuery.where(predicates.toArray(new Predicate[] {}));

		// order
		if (StringUtils.equals(searchCouponDTO.getSortBy().getData(), "id")) {
			if (searchCouponDTO.getSortBy().isAsc()) {
				criteriaQuery.orderBy(criteriaBuilder.asc(root.get("id")));
			} else {
				criteriaQuery.orderBy(criteriaBuilder.desc(root.get("id")));
			}
		} else if (StringUtils.equals(searchCouponDTO.getSortBy().getData(), "code")) {
			if (searchCouponDTO.getSortBy().isAsc()) {
				criteriaQuery.orderBy(criteriaBuilder.asc(root.get("code")));
			} else {
				criteriaQuery.orderBy(criteriaBuilder.desc(root.get("code")));
			}
		}


		TypedQuery<Coupon> typedQuery = entityManager.createQuery(criteriaQuery.select(root));
		if (searchCouponDTO.getStart() != null) {
			typedQuery.setFirstResult((searchCouponDTO.getStart()));
			typedQuery.setMaxResults(searchCouponDTO.getLength());
		}
		return typedQuery.getResultList();
	}

	
	@Override
	public Long count(SearchCouponDTO searchCouponDTO) {
		CriteriaBuilder builder = entityManager.getCriteriaBuilder();
		CriteriaQuery<Long> criteriaQuery = builder.createQuery(Long.class);
		Root<Coupon> root = criteriaQuery.from(Coupon.class);

		// Constructing list of parameters
		List<Predicate> predicates = new ArrayList<Predicate>();
		if (StringUtils.isNotBlank(searchCouponDTO.getKeyword())) {
			Predicate predicate1 = builder.like(builder.lower(root.get("code")),
					"%" + searchCouponDTO.getKeyword().toLowerCase() + "%");
			predicates.add(predicate1);
		}

		criteriaQuery.where(predicates.toArray(new Predicate[] {}));
		TypedQuery<Long> typedQuery = entityManager.createQuery(criteriaQuery.select(builder.count(root)));
		return typedQuery.getSingleResult();
	}

	
	@Override
	public Long countTotal(SearchCouponDTO searchCouponDTO) {
		CriteriaBuilder builder = entityManager.getCriteriaBuilder();
		CriteriaQuery<Long> criteriaQuery = builder.createQuery(Long.class);
		Root<Coupon> root = criteriaQuery.from(Coupon.class);

		TypedQuery<Long> typedQuery = entityManager.createQuery(criteriaQuery.select(builder.count(root)));
		return typedQuery.getSingleResult();
	}
	
	@Override
	public Coupon getByCode(String code) {
		String jql = "SELECT coupon FROM Coupon coupon WHERE coupon.code = :code";
		Query query = entityManager.createQuery(jql ,Coupon.class).setParameter("code", code );
		return (Coupon) query.getSingleResult();
	}
}
