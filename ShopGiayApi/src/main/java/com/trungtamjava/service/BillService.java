package com.trungtamjava.service;

import java.util.List;

import com.trungtamjava.model.BillDTO;
import com.trungtamjava.model.SearchBillDTO;

public interface BillService {

	Long countTotal(SearchBillDTO searchBillDTO);

	Long count(SearchBillDTO searchBillDTO);

	List<BillDTO> find(SearchBillDTO searchBillDTO);

	BillDTO getBillById(Long id);

	void delete(Long id);

	void update(BillDTO billDTO);

	void add(BillDTO billDTO);

}
