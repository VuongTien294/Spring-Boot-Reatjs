package com.trungtamjava.service;

import java.util.List;

import com.trungtamjava.model.BillProductDTO;
import com.trungtamjava.model.SearchBillProductDTO;

public interface BillProductService {

	List<BillProductDTO> find(SearchBillProductDTO searchBillProductDTO);

	void delete(Long id);

	void update(BillProductDTO billProductDTO);

	void add(BillProductDTO billProductDTO);

	Long countTotal(SearchBillProductDTO searchBillProductDTO);

	Long count(SearchBillProductDTO searchBillProductDTO);

	BillProductDTO getBillProductById(Long id);

}
