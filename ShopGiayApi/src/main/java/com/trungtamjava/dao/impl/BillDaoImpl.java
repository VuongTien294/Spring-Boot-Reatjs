package com.trungtamjava.dao.impl;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Join;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.trungtamjava.dao.BillDao;
import com.trungtamjava.entity.Bill;
import com.trungtamjava.entity.BillProduct;
import com.trungtamjava.entity.Product;
import com.trungtamjava.entity.User;
import com.trungtamjava.model.SearchBillDTO;
import com.trungtamjava.model.SearchBillProductDTO;

@Repository
@Transactional
public class BillDaoImpl extends JPARepository<Bill> implements BillDao {

	@Autowired
	EntityManager entityManager;
	
	
	@Override
	public Bill getBillId(Long id) {
		return entityManager.find(Bill.class, id);
	}
		
	@Override
	public List<Bill> find(SearchBillDTO searchBillDTO){
		CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
		CriteriaQuery<Bill> criteriaQuery = criteriaBuilder.createQuery(Bill.class);
		Root<Bill> root = criteriaQuery.from(Bill.class);
		List<Predicate> predicates = new ArrayList<Predicate>();
		
//		if(StringUtils.isNotBlank(searchBillDTO.getKeyword())) {
//			Predicate predicate = criteriaBuilder.like(criteriaBuilder.lower(root.get("buyer")), 
//					"%"+ searchBillDTO.getKeyword().toLowerCase()+"%");
//			predicates.add(predicate);
//		}
		
		if(searchBillDTO.getBuyerId()!= null) {
			Join<Bill, User> userJoin= root.join("buyer");
			Predicate predicate = criteriaBuilder.equal(userJoin.get("id"),searchBillDTO.getBuyerId());
			predicates.add(predicate);
		}

		
		criteriaQuery.where(predicates.toArray(new Predicate[] {}));
		
		
		TypedQuery<Bill> typedQuery = entityManager.createQuery(criteriaQuery.select(root));
		if(searchBillDTO.getStart()!= null) {
			typedQuery.setFirstResult(searchBillDTO.getStart());
			typedQuery.setMaxResults(searchBillDTO.getLength());
		}
		return typedQuery.getResultList();
		
	}
	
	
	
	@Override
	public Long count(SearchBillDTO searchBillDTO) {
		CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
		CriteriaQuery<Long> criteriaQuery = criteriaBuilder.createQuery(Long.class);
		Root<Bill> root = criteriaQuery.from(Bill.class);
		
		List<Predicate> predicates = new ArrayList<Predicate>();
		
		
		if(searchBillDTO.getBuyerId()!=null) {
			Join<Bill, User> user = root.join("buyer");

			Predicate predicate = criteriaBuilder.equal(user.get("id"), searchBillDTO.getBuyerId());
			predicates.add(predicate);
		}
		
		TypedQuery<Long> typedQuery = entityManager.createQuery(criteriaQuery.select(criteriaBuilder.count(root)));
		return typedQuery.getSingleResult();
	}
	
	
	
	@Override
	public Long countTotal(SearchBillDTO searchBillDTO) {
		CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
		CriteriaQuery<Long> criteriaQuery = criteriaBuilder.createQuery(Long.class);
		Root<Bill> root = criteriaQuery.from(Bill.class);
		
		TypedQuery<Long> typedQuery = entityManager.createQuery(criteriaQuery.select(criteriaBuilder.count(root)));
		return typedQuery.getSingleResult();
		
	}
	
}
