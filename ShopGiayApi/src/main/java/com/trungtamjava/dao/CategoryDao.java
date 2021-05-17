package com.trungtamjava.dao;

import java.util.List;

import com.trungtamjava.entity.Category;
import com.trungtamjava.model.SearchCategoryDTO;

public interface CategoryDao {
	void add(Category category);

	void delete(Category category);

	void update(Category category);

	Long countTotal(SearchCategoryDTO searchCategoryDTO);

	Long count(SearchCategoryDTO searchCategoryDTO);

	List<Category> find(SearchCategoryDTO searchCategoryDTO);

	Category getId(Long id);



}
