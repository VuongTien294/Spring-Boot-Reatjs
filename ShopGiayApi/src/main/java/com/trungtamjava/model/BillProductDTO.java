package com.trungtamjava.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class BillProductDTO {
	public Long id;
	public double unitPrice;
	public int quantity;
	public Long billId;
	public Long productId;
	public String productName;
}
