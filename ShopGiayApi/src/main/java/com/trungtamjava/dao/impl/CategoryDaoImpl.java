package com.trungtamjava.dao.impl;


import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import com.trungtamjava.dao.CategoryDao;
import com.trungtamjava.entity.Category;
import com.trungtamjava.model.SearchCategoryDTO;

@Repository
@Transactional
public class CategoryDaoImpl extends JPARepository<Category> implements CategoryDao {

	@Autowired
	private EntityManager entityManager;

	@Override
	public Category getId(Long id) {
		return entityManager.find(Category.class, id);
	}

	@Override
	public List<Category> find(SearchCategoryDTO searchCategoryDTO) {
		// JPA Criteria API cho phép ta tạo ra các câu truy vấn bằng Java Object thay vì
		// việc khai báo
		// trực tiếp trong String (JPQL) nhu la : select o from Office o :

		// Tao doi tuong CriteriaBuider
		// CriteriaBuilder: Để xây dựng một câu query, các bạn sẽ cần tới interface
		// CriteriaBuilder,
		// mục đích của nó là giúp tạo ra đối tượng chứa câu lệnh truy vấn CriteriaQuery
		// và cung cấp cơ số các phép biến đổi
		// phép logic, điều kiện cho câu lệnh (and, or, not, avg, greater than,v.v...)
		CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();

		// Mục đích là khai báo đối tượng bạn muốn lấy ra sau khi thực hiện query. Nó
		// tương đương với đoạn ngoặc đơn sau select
		CriteriaQuery<Category> criteriaQuery = criteriaBuilder.createQuery(Category.class);

		// root là khai báo đối tượng bạn sẽ sử dụng trong query, tương đương với đối
		// tượng sau mệnh đề from
		Root<Category> root = criteriaQuery.from(Category.class);

		List<Predicate> predicates = new ArrayList<Predicate>();

		// StringUtils la 1 lop trong lop commons.lang3.StringUtils.TRong do co nhieu
		// phuong thuc kiem tra chuoi
		// isNotBlank se tra ve true neu chuoi do ko blank.Chuoi blank la chuoi chi co
		// khoang trang(khac voi null)
		if (StringUtils.isNotBlank(searchCategoryDTO.getKeyword())) {
			Predicate predicate = criteriaBuilder.like(criteriaBuilder.lower(root.get("name")),
					"%" + searchCategoryDTO.getKeyword().toLowerCase() + "%");
			predicates.add(predicate);
		}

		criteriaQuery.where(predicates.toArray(new Predicate[] {}));

		// order
		if (StringUtils.equals(searchCategoryDTO.getSortBy().getData(), "id")) {
			if (searchCategoryDTO.getSortBy().isAsc()) {
				criteriaQuery.orderBy(criteriaBuilder.asc(root.get("id")));
			} else {
				criteriaQuery.orderBy(criteriaBuilder.desc(root.get("id")));
			}
		} else if (StringUtils.equals(searchCategoryDTO.getSortBy().getData(), "name")) {
			if (searchCategoryDTO.getSortBy().isAsc()) {
				criteriaQuery.orderBy(criteriaBuilder.asc(root.get("name")));
			} else {
				criteriaQuery.orderBy(criteriaBuilder.desc(root.get("name")));
			}
		}

		// goi xuong database
		// Để sử dụng câu lệnh đã tạo, các bạn làm giống với JPQL đó là sử dụng đối
		// tượng EntityManager
		TypedQuery<Category> typedQuery = entityManager.createQuery(criteriaQuery.select(root));
		if (searchCategoryDTO.getStart() != null) {
			typedQuery.setFirstResult((searchCategoryDTO.getStart()));
			typedQuery.setMaxResults(searchCategoryDTO.getLength());
		}
		return typedQuery.getResultList();
	}

	@Override
	public Long count(SearchCategoryDTO searchCategoryDTO) {
		CriteriaBuilder builder = entityManager.getCriteriaBuilder();
		CriteriaQuery<Long> criteriaQuery = builder.createQuery(Long.class);
		Root<Category> root = criteriaQuery.from(Category.class);

		// Constructing list of parameters
		List<Predicate> predicates = new ArrayList<Predicate>();
		if (StringUtils.isNotBlank(searchCategoryDTO.getKeyword())) {
			Predicate predicate1 = builder.like(builder.lower(root.get("name")),
					"%" + searchCategoryDTO.getKeyword().toLowerCase() + "%");
			predicates.add(predicate1);
		}

		criteriaQuery.where(predicates.toArray(new Predicate[] {}));
		TypedQuery<Long> typedQuery = entityManager.createQuery(criteriaQuery.select(builder.count(root)));
		return typedQuery.getSingleResult();
	}

	@Override
	public Long countTotal(SearchCategoryDTO searchCategoryDTO) {
		CriteriaBuilder builder = entityManager.getCriteriaBuilder();
		CriteriaQuery<Long> criteriaQuery = builder.createQuery(Long.class);
		Root<Category> root = criteriaQuery.from(Category.class);

		TypedQuery<Long> typedQuery = entityManager.createQuery(criteriaQuery.select(builder.count(root)));
		return typedQuery.getSingleResult();
	}

}
