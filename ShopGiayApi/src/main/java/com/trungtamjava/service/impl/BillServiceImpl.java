package com.trungtamjava.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.trungtamjava.dao.BillDao;
import com.trungtamjava.dao.UserDao;
import com.trungtamjava.entity.Bill;
import com.trungtamjava.entity.Product;
import com.trungtamjava.entity.User;
import com.trungtamjava.model.BillDTO;
import com.trungtamjava.model.ProductDTO;
import com.trungtamjava.model.SearchBillDTO;
import com.trungtamjava.model.SearchProductDTO;
import com.trungtamjava.service.BillService;

@Service
@Transactional
public class BillServiceImpl implements BillService {

	@Autowired
	BillDao billDao;

	@Autowired
	UserDao userDao;

	@Override
	public void add(BillDTO billDTO) {
		Bill bill = new Bill();

		User user = userDao.getUserId(billDTO.getBuyerId());
		bill.setBuyer(user);

		bill.setPay(billDTO.getPay());
		bill.setPriceTotal(billDTO.getPriceTotal());
		bill.setStatus(billDTO.getStatus());
		bill.setCouponsName(billDTO.getCouponsName());
		bill.setDiscountPercent(billDTO.getDiscountPercent());

		billDao.add(bill);
		
		billDTO.setId(bill.getId());

	}

	@Override
	public void update(BillDTO billDTO) {
		Bill bill = billDao.getBillId(billDTO.getBuyerId());
		if (bill != null) {
			bill.setPay(billDTO.getPay());
			bill.setPriceTotal(billDTO.getPriceTotal());
			bill.setStatus(billDTO.getStatus());
			bill.setCouponsName(billDTO.getCouponsName());
			bill.setDiscountPercent(billDTO.getDiscountPercent());

			billDao.update(bill);
		}
	}

	@Override
	public void delete(Long id) {
		Bill bill = billDao.getBillId(id);
		billDao.delete(bill);
	}
	
	@Override
	public BillDTO getBillById(Long id) {
		Bill bill = billDao.getBillId(id);
		return convertDTO(bill);
	}
	
	@Override
	public List<BillDTO> find(SearchBillDTO searchBillDTO){
		List<Bill> listBills = billDao.find(searchBillDTO);
		List<BillDTO> listBillDTOs = new ArrayList<BillDTO>();
		listBills.forEach(bills -> {
			listBillDTOs.add(convertDTO(bills));
		});
		return listBillDTOs;
	}
	
	@Override
	public Long count(SearchBillDTO searchBillDTO) {
		return billDao.count(searchBillDTO);
	}

	
	
	
	@Override
	public Long countTotal(SearchBillDTO searchBillDTO) {
		return billDao.countTotal(searchBillDTO);
	}
	
	private BillDTO convertDTO(Bill bill) {
		BillDTO billDTO = new BillDTO();
		billDTO.setId(bill.getId());
		
		if(bill.getBuyer()!= null) {
			billDTO.setBuyerId(bill.getBuyer().getId());
		}
		billDTO.setCouponsName(bill.getCouponsName());
		billDTO.setDiscountPercent(bill.getDiscountPercent());
		
		billDTO.setPriceTotal(bill.getPriceTotal());
		billDTO.setPay(bill.getPay());
		billDTO.setStatus(bill.getStatus());

		return billDTO;
	}
}
