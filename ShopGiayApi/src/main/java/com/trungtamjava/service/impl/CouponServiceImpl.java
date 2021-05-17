package com.trungtamjava.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.trungtamjava.dao.CouponDao;
import com.trungtamjava.entity.Bill;
import com.trungtamjava.entity.Coupon;
import com.trungtamjava.model.BillDTO;
import com.trungtamjava.model.CouponDTO;
import com.trungtamjava.model.SearchBillDTO;
import com.trungtamjava.model.SearchCouponDTO;
import com.trungtamjava.service.CouponService;
import com.trungtamjava.ultil.DateTimeUtils;

@Repository
@Service
public class CouponServiceImpl implements CouponService {
	@Autowired
	CouponDao couponDao;
	
	@Override
	public void add(CouponDTO couponDTO) {
		Coupon coupon=new Coupon();
		coupon.setCode(couponDTO.getCode());
		coupon.setPresent(couponDTO.getPersent());
		coupon.setExpiredDate(DateTimeUtils.parseDate(couponDTO.getExpiredDate(), DateTimeUtils.DD_MM_YYYY));
		
		couponDao.add(coupon);
		couponDTO.setId(coupon.getId());
	}
	
	@Override
	public void update(CouponDTO couponDTO) {
		Coupon coupon=couponDao.getId(couponDTO.getId());
		if(coupon != null) {
			coupon.setId(couponDTO.getId());
			coupon.setCode(couponDTO.getCode());
			coupon.setPresent(couponDTO.getPersent());
			coupon.setExpiredDate(DateTimeUtils.parseDate(couponDTO.getExpiredDate(), DateTimeUtils.DD_MM_YYYY));
			couponDao.update(coupon);
		}		
	}
	
	@Override
	public void delete(Long id) {
		Coupon coupon=couponDao.getId(id);
		if(coupon != null) {			
			couponDao.delete(coupon);
		}		
	}
	
	@Override
	public CouponDTO getCouponById(Long id) {
		Coupon coupon = couponDao.getId(id);
		return convert(coupon);
	}
	
	@Override
	public CouponDTO getCouponByCode(String code) {
		Coupon coupon = couponDao.getByCode(code);
		return convert(coupon);
	}
	
	@Override
	public List<CouponDTO> find(SearchCouponDTO searchCouponDTO){
		List<Coupon> listBills = couponDao.find(searchCouponDTO);
		List<CouponDTO> listCouponDTO = new ArrayList<CouponDTO>();
		listBills.forEach(coupon -> {
			listCouponDTO.add(convert(coupon));
		});
		return listCouponDTO;
	}
	
	@Override
	public Long count(SearchCouponDTO searchCouponDTO) {
		return couponDao.count(searchCouponDTO);
	}

	
	@Override
	public Long countTotal(SearchCouponDTO searchCouponDTO) {
		return couponDao.countTotal(searchCouponDTO);
	}
	
	private CouponDTO convert(Coupon coupon) {
		CouponDTO couponDTO=new CouponDTO();
		couponDTO.setId(coupon.getId());
		couponDTO.setCode(coupon.getCode());
		couponDTO.setPersent(coupon.getPresent());
		couponDTO.setExpiredDate(DateTimeUtils.formatDate(coupon.getExpiredDate(), DateTimeUtils.DD_MM_YYYY));
		return couponDTO;
	}

}
