package com.trungtamjava.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.trungtamjava.model.BillProductDTO;
import com.trungtamjava.model.ResponseDTO;
import com.trungtamjava.model.SearchBillProductDTO;
import com.trungtamjava.service.BillProductService;


@RestController
@Transactional
@RequestMapping("/api")
@CrossOrigin(origins = "*", maxAge = -1)
public class RestBillProduct {


	@Autowired
	BillProductService billProductService;
	
	@PostMapping(value = "/billproduct/search")
	public ResponseDTO<BillProductDTO> find(@RequestBody SearchBillProductDTO searchBillProductDTO){
		ResponseDTO<BillProductDTO> responseDTO = new ResponseDTO<BillProductDTO>();
		responseDTO.setData(billProductService.find(searchBillProductDTO));
		responseDTO.setRecordsFiltered(billProductService.count(searchBillProductDTO));
		responseDTO.setRecordsTotal(billProductService.countTotal(searchBillProductDTO));
		return responseDTO;
		
	}
	
	@PostMapping(value="/billproduct/add")
	public BillProductDTO add(@RequestBody BillProductDTO billProductDTO) {
		billProductService.add(billProductDTO);
		return billProductDTO;
	}
	
	@PostMapping(value = "/billproduct/update")
	public void update(@RequestBody BillProductDTO billProductDTO) {
		billProductService.update(billProductDTO);
	}
	
	@DeleteMapping(value = "/billproduct/delete")
	public void delete(@RequestParam(name="id") Long id) {
		billProductService.delete(id);
	}
	
	@GetMapping(value = "/billproduct/{id}")
	public BillProductDTO get(@PathVariable(name = "id") Long id) {
		return billProductService.getBillProductById(id);
	}
	
}
