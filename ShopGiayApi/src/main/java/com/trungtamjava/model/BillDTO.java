package com.trungtamjava.model;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BillDTO implements Serializable{
    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public Long id;
    
    public Long buyerId;
    
	public String status;
	
    public double priceTotal;
    
    public Integer discountPercent;
    
    public String pay;
    
    public String couponsName;
}
