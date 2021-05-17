package com.trungtamjava.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
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

import com.trungtamjava.model.BillProductDTO;
import com.trungtamjava.model.CouponDTO;
import com.trungtamjava.model.ProductDTO;
import com.trungtamjava.model.ResponseDTO;
import com.trungtamjava.model.SearchBillProductDTO;
import com.trungtamjava.model.SearchCouponDTO;
import com.trungtamjava.service.BillProductService;
import com.trungtamjava.service.CouponService;
import com.trungtamjava.ultil.FileStore;

@Transactional
@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*", maxAge = -1)
public class RestCoupon {
	@Autowired
	CouponService couponService;
	
	@PostMapping(value = "/admin/coupon/search")
	public ResponseDTO<CouponDTO> find(@RequestBody SearchCouponDTO searchCouponDTO){
		ResponseDTO<CouponDTO> responseDTO = new ResponseDTO<CouponDTO>();
		responseDTO.setData(couponService.find(searchCouponDTO));
		responseDTO.setRecordsFiltered(couponService.count(searchCouponDTO));
		responseDTO.setRecordsTotal(couponService.countTotal(searchCouponDTO));
		return responseDTO;
		
	}
	
	@PostMapping(value="/coupon/add")
	public CouponDTO add(@RequestBody CouponDTO couponDTO) {
		couponService.add(couponDTO);
		return couponDTO;
	}
	
	@PostMapping(value = "/admin/coupon/update")
	public void update(@RequestBody CouponDTO couponDTO) {
		couponService.update(couponDTO);
	}
	
	@DeleteMapping(value = "/admin/coupon/delete")
	public void delete(@RequestParam(name="id") Long id) {
		couponService.delete(id);
	}
	
	@GetMapping(value = "/admin/coupon/{id}")
	public CouponDTO get(@PathVariable(name = "id") Long id) {
		return couponService.getCouponById(id);
	}
	
	@GetMapping(value="/coupon/{code}")
	public CouponDTO getByCode(@PathVariable(name = "code") String code) {
		return couponService.getCouponByCode(code);
	}
}
