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


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.trungtamjava.dao.BillProductDao;
import com.trungtamjava.entity.Bill;
import com.trungtamjava.entity.BillProduct;

import com.trungtamjava.entity.Product;
import com.trungtamjava.model.SearchBillProductDTO;


@Repository
@Transactional
public class BillProductDaoImpl extends JPARepository<BillProduct> implements BillProductDao {

	@Autowired
	EntityManager entityManager;
	
	
	@Override
	public BillProduct getBillProductId(Long id) {
		return entityManager.find(BillProduct.class, id);
	}
	
	
	@Override
	public List<BillProduct> find(SearchBillProductDTO searchBillProductDTO){
		CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
		CriteriaQuery<BillProduct> criteriaQuery = criteriaBuilder.createQuery(BillProduct.class);
		Root<BillProduct> root = criteriaQuery.from(BillProduct.class);
		List<Predicate> predicates = new ArrayList<Predicate>();
		
//		if(StringUtils.isNotBlank(searchBillProductDTO.getKeyword())) {
//			Predicate predicate = criteriaBuilder.like(criteriaBuilder.lower(root.get("")), 
//					"%"+ searchProductDTO.getKeyword().toLowerCase()+"%");
//			predicates.add(predicate);
//		}
		
		if(searchBillProductDTO.getBillId()!= null) {
			Join<BillProduct, Bill> billJoin= root.join("bill");
			Predicate predicate = criteriaBuilder.equal(billJoin.get("id"), searchBillProductDTO.getBillId());
			predicates.add(predicate);
		}

		
//		if(searchBillProductDTO.getProductId()!= null) {
//			Join<BillProduct, Product> productJoin= root.join("product");
//			Predicate predicate = criteriaBuilder.equal(productJoin.get("id"), searchBillProductDTO.getProductId());
//			predicates.add(predicate);
//		}
		
		criteriaQuery.where(predicates.toArray(new Predicate[] {}));
		
		
		TypedQuery<BillProduct> typedQuery = entityManager.createQuery(criteriaQuery.select(root));
		if(searchBillProductDTO.getStart()!= null) {
			typedQuery.setFirstResult(searchBillProductDTO.getStart());
			typedQuery.setMaxResults(searchBillProductDTO.getLength());
		}
		return typedQuery.getResultList();
		
	}
	
	
	@Override
	public Long count(SearchBillProductDTO searchBillProductDTO) {
		CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
		CriteriaQuery<Long> criteriaQuery = criteriaBuilder.createQuery(Long.class);
		Root<BillProduct> root = criteriaQuery.from(BillProduct.class);
		
		List<Predicate> predicates = new ArrayList<Predicate>();
		
		
		if(searchBillProductDTO.getBillId()!=null) {
			Join<BillProduct, Bill> bill = root.join("bill");
			Predicate predicate = criteriaBuilder.equal(bill.get("id"), searchBillProductDTO.getBillId());
			predicates.add(predicate);
		}
		
//		if(searchBillProductDTO.getProductId()!= null) {
//			Join<BillProduct, Product> productJoin= root.join("product");
//			Predicate predicate = criteriaBuilder.equal(productJoin.get("id"), searchBillProductDTO.getProductId());
//			predicates.add(predicate);
//		}
		
		TypedQuery<Long> typedQuery = entityManager.createQuery(criteriaQuery.select(criteriaBuilder.count(root)));
		return typedQuery.getSingleResult();
	}
	
	
	@Override
	public Long countTotal(SearchBillProductDTO searchBillProductDTO) {
		CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
		CriteriaQuery<Long> criteriaQuery = criteriaBuilder.createQuery(Long.class);
		Root<BillProduct> root = criteriaQuery.from(BillProduct.class);
		
		TypedQuery<Long> typedQuery = entityManager.createQuery(criteriaQuery.select(criteriaBuilder.count(root)));
		return typedQuery.getSingleResult();
		
	}
	
}
