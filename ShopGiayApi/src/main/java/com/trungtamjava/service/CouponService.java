package com.trungtamjava.service;

import java.util.List;

import com.trungtamjava.model.CouponDTO;
import com.trungtamjava.model.SearchCouponDTO;

public interface CouponService {

	List<CouponDTO> find(SearchCouponDTO searchCouponDTO);

	CouponDTO getCouponByCode(String code);

	CouponDTO getCouponById(Long id);

	void delete(Long id);

	void update(CouponDTO couponDTO);

	void add(CouponDTO couponDTO);

	Long countTotal(SearchCouponDTO searchCouponDTO);

	Long count(SearchCouponDTO searchCouponDTO);

}
