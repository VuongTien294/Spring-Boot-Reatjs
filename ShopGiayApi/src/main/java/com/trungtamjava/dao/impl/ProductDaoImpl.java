package com.trungtamjava.dao.impl;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.criteria.Join;
import javax.persistence.criteria.Predicate;
import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import com.trungtamjava.dao.ProductDao;
import com.trungtamjava.entity.Category;
import com.trungtamjava.entity.Product;
import com.trungtamjava.model.SearchProductDTO;



@Repository
@Transactional
public class ProductDaoImpl extends JPARepository<Product> implements ProductDao {

	@Autowired
	EntityManager entityManager;
	
	@Override
	public Product getProductId(Long id) {
		return entityManager.find(Product.class, id);
	}
	
	@Override
	public List<Product> find(SearchProductDTO searchProductDTO){
		CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
		CriteriaQuery< Product> criteriaQuery = criteriaBuilder.createQuery(Product.class);
		Root<Product> root = criteriaQuery.from(Product.class);
		List<Predicate> predicates = new ArrayList<Predicate>();
		
		if(StringUtils.isNotBlank(searchProductDTO.getKeyword())) {
			Predicate predicate = criteriaBuilder.like(criteriaBuilder.lower(root.get("name")), 
					"%"+ searchProductDTO.getKeyword().toLowerCase()+"%");
			predicates.add(predicate);
		}
		
		if(searchProductDTO.getCategoryId()!= null) {
			Join<Product, Category> cateJoin= root.join("category");
			Predicate predicate = criteriaBuilder.equal(cateJoin.get("id"), searchProductDTO.getCategoryId());
			predicates.add(predicate);
		}
		
		criteriaQuery.where(predicates.toArray(new Predicate[] {}));
		
		// sap xep
		if (StringUtils.equals(searchProductDTO.getSortBy().getData(), "id")) {
			if (searchProductDTO.getSortBy().isAsc()) {
				criteriaQuery.orderBy(criteriaBuilder.asc(root.get("id")));
			} else {
				criteriaQuery.orderBy(criteriaBuilder.desc(root.get("id")));
			}
		} else if (StringUtils.equals(searchProductDTO.getSortBy().getData(), "name")) {
			if (searchProductDTO.getSortBy().isAsc()) {
				criteriaQuery.orderBy(criteriaBuilder.asc(root.get("name")));
			} else {
				criteriaQuery.orderBy(criteriaBuilder.desc(root.get("name")));
			}
		}
		
		TypedQuery<Product> typedQuery = entityManager.createQuery(criteriaQuery.select(root));
		if(searchProductDTO.getStart()!= null) {
			typedQuery.setFirstResult(searchProductDTO.getStart());
			typedQuery.setMaxResults(searchProductDTO.getLength());
		}
		return typedQuery.getResultList();
		
	}
	
	@Override
	public Long count(SearchProductDTO searchProductDTO) {
		CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
		CriteriaQuery<Long> criteriaQuery = criteriaBuilder.createQuery(Long.class);
		Root<Product> root = criteriaQuery.from(Product.class);
		
		List<Predicate> predicates = new ArrayList<Predicate>();
		
		if(StringUtils.isNotBlank(searchProductDTO.getKeyword())) {
			Predicate predicate = criteriaBuilder.like(criteriaBuilder.lower(root.get("name")),
					"%"+searchProductDTO.getKeyword().toLowerCase()+"%");
			predicates.add(predicate);
		}
		
		if(searchProductDTO.getCategoryId()!=null) {
			Join<Product, Category> category = root.join("category");
			Predicate predicate = criteriaBuilder.equal(category.get("id"), searchProductDTO.getCategoryId());
			predicates.add(predicate);
		}
		
		TypedQuery<Long> typedQuery = entityManager.createQuery(criteriaQuery.select(criteriaBuilder.count(root)));
		return typedQuery.getSingleResult();
	}
	
	@Override
	public Long countTotal(SearchProductDTO searchProductDTO) {
		CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
		CriteriaQuery<Long> criteriaQuery = criteriaBuilder.createQuery(Long.class);
		Root<Product> root = criteriaQuery.from(Product.class);
		
		TypedQuery<Long> typedQuery = entityManager.createQuery(criteriaQuery.select(criteriaBuilder.count(root)));
		return typedQuery.getSingleResult();
		
	}
	
}
