package com.trungtamjava.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.trungtamjava.model.BillDTO;
import com.trungtamjava.model.BillProductDTO;
import com.trungtamjava.model.ProductDTO;
import com.trungtamjava.model.ResponseDTO;
import com.trungtamjava.model.SearchBillDTO;
import com.trungtamjava.model.UserPrincipal;
import com.trungtamjava.service.BillProductService;
import com.trungtamjava.service.BillService;
import com.trungtamjava.service.ProductService;
import com.trungtamjava.service.UserService;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*", maxAge = -1)
public class RestBill {

	@Autowired
	BillService billService;
	
	@Autowired
	UserService userService;
	
	@Autowired
	BillProductService billProductService;
	
	@Autowired
	ProductService productService;
	
	@PostMapping(value = "/bill/search")
	public ResponseDTO<BillDTO> find(@RequestBody SearchBillDTO searchBillDTO){
		ResponseDTO<BillDTO> responseDTO = new ResponseDTO<BillDTO>();
		responseDTO.setData(billService.find(searchBillDTO));
		responseDTO.setRecordsFiltered(billService.count(searchBillDTO));
		responseDTO.setRecordsTotal(billService.countTotal(searchBillDTO));
		return responseDTO;
		
	}
	

	@PostMapping(value="/bill/add")
	public BillDTO add(@RequestBody BillDTO billDTO) {
		billService.add(billDTO);
		return billDTO;
	}
	

	
	@PostMapping(value = "/bill/update")
	public void update(@RequestBody BillDTO billDTO) {
		billService.update(billDTO);
	}
	
	@DeleteMapping(value = "/bill/delete")
	public void delete(@RequestParam(name="id") Long id) {
		billService.delete(id);
	}
	
	@GetMapping(value = "/bill/{id}")
	public BillDTO get(@PathVariable(name = "id") Long id) {
		return billService.getBillById(id);
	}
}
