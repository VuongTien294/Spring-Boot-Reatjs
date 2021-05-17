package com.trungtamjava.dao;

import java.util.List;

import com.trungtamjava.entity.Bill;
import com.trungtamjava.entity.Coupon;
import com.trungtamjava.model.SearchCouponDTO;

public interface CouponDao {
	void add(Coupon coupon);
	
	void update(Coupon coupon);
	
	void delete(Coupon coupon);

	Long countTotal(SearchCouponDTO searchCouponDTO);

	Long count(SearchCouponDTO searchCouponDTO);

	List<Coupon> find(SearchCouponDTO searchCouponDTO);

	Coupon getId(Long id);

	Coupon getByCode(String code);

}
