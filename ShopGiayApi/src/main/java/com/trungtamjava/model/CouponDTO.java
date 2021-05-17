package com.trungtamjava.model;

import lombok.Data;

@Data
public class CouponDTO {
	private Long id;
	private String code;
	private int persent;
	private String expiredDate;
}