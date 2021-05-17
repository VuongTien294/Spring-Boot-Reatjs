package com.trungtamjava.entity;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "bill")
public class Bill extends CreateAuditable implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;
	
	@ManyToOne
	@JoinColumn(name = "buyer_id")
    public User buyer;
	
	@Column(name = "status")
	public String status;
	
	
	@Column(name = "price_total")
    public double priceTotal;
	
//	@Column(name = "discount_percent")
//	private Integer discountPercent;
	
//	@OneToMany(cascade = CascadeType.ALL, mappedBy = "bill")
//	@Column(name = "bill_Products")
//	public List<BillProduct> billProducts;
	
	@Column(name = "pay")
	public String pay;
	
	@OneToMany(mappedBy = "bill", fetch = FetchType.LAZY)
	private Set<BillProduct> listbillproduct = new HashSet<BillProduct>();
	
//    @Column(name = "couponsName")
//    public String couponsName;
}
