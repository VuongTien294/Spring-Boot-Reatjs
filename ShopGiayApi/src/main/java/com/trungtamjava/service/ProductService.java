package com.trungtamjava.service;

import java.util.List;

import com.trungtamjava.model.ProductDTO;
import com.trungtamjava.model.SearchProductDTO;

public interface ProductService {

	Long countTotal(SearchProductDTO searchProductDTO);

	Long count(SearchProductDTO searchProductDTO);

	List<ProductDTO> find(SearchProductDTO searchProductDTO);

	ProductDTO getProductId(Long id);

	void delete(Long id);

	void updateProduct(ProductDTO productDTO);

	void addProduct(ProductDTO productDTO);



}
