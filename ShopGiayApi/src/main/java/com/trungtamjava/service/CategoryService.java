package com.trungtamjava.service;

import java.util.List;

import com.trungtamjava.model.CategoryDTO;
import com.trungtamjava.model.SearchCategoryDTO;

public interface CategoryService {

	Long countTotal(SearchCategoryDTO searchCategoryDTO);

	Long count(SearchCategoryDTO searchCategoryDTO);

	List<CategoryDTO> find(SearchCategoryDTO searchCategoryDTO);

	CategoryDTO getId(Long id);

	void update(CategoryDTO categoryDTO);

	void delete(Long id);

	void add(CategoryDTO category);



}
