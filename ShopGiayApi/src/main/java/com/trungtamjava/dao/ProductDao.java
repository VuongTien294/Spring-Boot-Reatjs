package com.trungtamjava.dao;

import java.util.List;

import com.trungtamjava.entity.Product;
import com.trungtamjava.model.SearchProductDTO;

public interface ProductDao {
	void add(Product product);
	
	void update(Product product);
	
	void delete(Product product);

	Long countTotal(SearchProductDTO searchProductDTO);

	Long count(SearchProductDTO searchProductDTO);

	List<Product> find(SearchProductDTO searchProductDTO);

	Product getProductId(Long id);

}
