package com.trungtamjava.service.impl;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.trungtamjava.dao.CategoryDao;
import com.trungtamjava.dao.ProductDao;
import com.trungtamjava.entity.Category;
import com.trungtamjava.entity.Product;
import com.trungtamjava.model.ProductDTO;
import com.trungtamjava.model.SearchProductDTO;
import com.trungtamjava.service.ProductService;


@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	ProductDao productDao;

	@Autowired
	CategoryDao categoryDao;

	@Override
	public void addProduct(ProductDTO productDTO) {
		Product product = new Product();
//		product.setId(productDTO.getId());
		product.setName(productDTO.getName());
		product.setImages(productDTO.getImages());
		product.setPrice(productDTO.getPrice());
		product.setQuantity(productDTO.getQuantity());
		product.setDescription(productDTO.getDescription());

		Category category = categoryDao.getId(productDTO.getCategoryId());
		product.setCategory(category);

		productDao.add(product);
		productDTO.setId(product.getId());
	}

	
	@Override
	public void updateProduct(ProductDTO productDTO) {
		Product product = new Product();
		product.setId(productDTO.getId());
		product.setName(productDTO.getName());
		product.setImages(productDTO.getImages());
		product.setPrice(productDTO.getPrice());
		product.setQuantity(product.getQuantity());
		product.setDescription(productDTO.getDescription());

		Category category = categoryDao.getId(productDTO.getCategoryId());
		product.setCategory(category);

		productDao.update(product);
		productDTO.setId(product.getId());

	}

	
	@Override
	public void delete(Long id) {
		Product product = productDao.getProductId(id);
		productDao.delete(product);
	}
	
	
	@Override
	public ProductDTO getProductId(Long id) {
		Product product = productDao.getProductId(id);
		return convertDTO(product);
	}
	
	
	@Override
	public List<ProductDTO> find(SearchProductDTO searchProductDTO){
		List<Product> listProducts = productDao.find(searchProductDTO);
		List<ProductDTO> listProductDTOs = new ArrayList<ProductDTO>();
		listProducts.forEach(products -> {
			listProductDTOs.add(convertDTO(products));
		});
		return listProductDTOs;
	}
	
	
	@Override
	public Long count(SearchProductDTO searchProductDTO) {
		return productDao.count(searchProductDTO);
	}

	
	
	@Override
	public Long countTotal(SearchProductDTO searchProductDTO) {
		return productDao.countTotal(searchProductDTO);
	}

	private ProductDTO convertDTO(Product product) {
		ProductDTO productDTO = new ProductDTO();
		productDTO.setId(product.getId());
		productDTO.setName(product.getName());
		if (product.getImages() != null) {
			productDTO.setImages(new ArrayList<String>(product.getImages()));
		}
		productDTO.setPrice(product.getPrice());
		productDTO.setQuantity(product.getQuantity());
		productDTO.setDescription(product.getDescription());
		if (product.getCategory() != null) {
			productDTO.setCategoryId(product.getCategory().getId());
			productDTO.setCategoryName(product.getCategory().getName());
		}
		return productDTO;
	}
	
	
}
