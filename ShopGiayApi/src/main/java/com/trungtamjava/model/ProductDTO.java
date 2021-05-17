package com.trungtamjava.model;

import java.util.List;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductDTO {
	public Long id;
	public String name;
	public List<String> images;
	public double price;
	public int quantity;
	public String description;
	public Long categoryId;
	public String categoryName;
	
	@JsonIgnore
	public List<MultipartFile> imageFile;// dung trong rest api
}
