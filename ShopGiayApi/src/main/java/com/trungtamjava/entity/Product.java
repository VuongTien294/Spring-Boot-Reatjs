package com.trungtamjava.entity;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CollectionTable;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "product")
public class Product implements Serializable {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@NonNull
	public Long id;
	
	public String name;
	
	@ElementCollection
	@CollectionTable(name = "product_images")
	public List<String> images;
	
	public double price;
	
	public int quantity;
	
	public String description;
	
	@ManyToOne
	@JoinColumn(name = "category_id")
	public Category category;

}