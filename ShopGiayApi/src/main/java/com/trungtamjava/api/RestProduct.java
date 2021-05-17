package com.trungtamjava.api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.trungtamjava.model.ProductDTO;
import com.trungtamjava.model.ResponseDTO;
import com.trungtamjava.model.SearchProductDTO;
import com.trungtamjava.service.ProductService;
import com.trungtamjava.ultil.FileStore;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*", maxAge = -1)
public class RestProduct {
	@Autowired
	ProductService productService;
	
	@PostMapping(value = "/product/search")
	public ResponseDTO<ProductDTO> find(@RequestBody SearchProductDTO searchProductDTO){
		ResponseDTO<ProductDTO> responseDTO = new ResponseDTO<ProductDTO>();
		responseDTO.setData(productService.find(searchProductDTO));
		responseDTO.setRecordsFiltered(productService.count(searchProductDTO));
		responseDTO.setRecordsTotal(productService.countTotal(searchProductDTO));
		return responseDTO;
		
	}
	
	@PostMapping(value="/admin/product/add")
	public ProductDTO add(@ModelAttribute ProductDTO productDTO) {
		productDTO.setImages(FileStore.getFilePaths(productDTO.getImageFile(), "product-"));
		productService.addProduct(productDTO);
		return productDTO;
	}
	
	@PostMapping(value = "/admin/product/update")
	public void update(@ModelAttribute ProductDTO productDTO) {
		productDTO.setImages(FileStore.getFilePaths(productDTO.getImageFile(), "product-"));
		productService.updateProduct(productDTO);
	}
	
	@DeleteMapping(value = "/admin/product/delete")
	public void delete(@RequestParam(name="id") Long id) {
		productService.delete(id);
	}
	
	@GetMapping(value = "/product/{id}")
	public ProductDTO get(@PathVariable(name = "id") Long id) {
		return productService.getProductId(id);
	}
	
	

}
