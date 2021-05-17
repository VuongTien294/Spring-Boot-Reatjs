package com.trungtamjava.dao;

import java.util.List;

import com.trungtamjava.entity.BillProduct;
import com.trungtamjava.model.SearchBillProductDTO;

public interface BillProductDao {
	
	void add(BillProduct billProduct);
	
	void update(BillProduct billProduct);
	
	void delete(BillProduct billProduct);
	
	Long countTotal(SearchBillProductDTO searchBillProductDTO);

	Long count(SearchBillProductDTO searchBillProductDTO);

	List<BillProduct> find(SearchBillProductDTO searchBillProductDTO);

	BillProduct getBillProductId(Long id);

}
