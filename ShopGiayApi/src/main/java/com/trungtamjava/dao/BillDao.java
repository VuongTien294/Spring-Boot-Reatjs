package com.trungtamjava.dao;

import java.util.List;

import com.trungtamjava.entity.Bill;
import com.trungtamjava.model.SearchBillDTO;

public interface BillDao {
	void add(Bill bill);
	
	void update(Bill bill);
	
	void delete(Bill bill);

	Long countTotal(SearchBillDTO searchBillDTO);

	Long count(SearchBillDTO searchBillDTO);

	List<Bill> find(SearchBillDTO searchBillDTO);

	Bill getBillId(Long id);

}
