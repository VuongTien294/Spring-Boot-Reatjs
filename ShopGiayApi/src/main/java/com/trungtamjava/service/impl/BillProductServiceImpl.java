package com.trungtamjava.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.trungtamjava.dao.BillDao;
import com.trungtamjava.dao.BillProductDao;
import com.trungtamjava.entity.Bill;
import com.trungtamjava.entity.BillProduct;
import com.trungtamjava.entity.Product;
import com.trungtamjava.model.BillDTO;
import com.trungtamjava.model.BillProductDTO;
import com.trungtamjava.model.ProductDTO;
import com.trungtamjava.model.SearchBillDTO;
import com.trungtamjava.model.SearchBillProductDTO;
import com.trungtamjava.model.SearchProductDTO;
import com.trungtamjava.service.BillProductService;

@Service
@Transactional
public class BillProductServiceImpl implements BillProductService {

	
	@Autowired
	private BillProductDao billProductDao;
	
	@Autowired
	private BillDao billDao;

	
	@Override
	public void add(BillProductDTO billProductDTO) {
		BillProduct billProduct =new BillProduct();
		billProduct.setQuantity(billProductDTO.getQuantity());
		billProduct.setUnitPrice(billProductDTO.getUnitPrice());
		
		Product product =new Product();
		product.setId(billProductDTO.getProductId());
		
		Bill bill =new Bill();
		bill.setId(billProductDTO.getBillId());
		
		billProduct.setProduct(product);
		billProduct.setBill(bill);
		
		billProductDao.add(billProduct);
		
	}

	
	@Override
	public void update(BillProductDTO billProductDTO) {
		BillProduct billProduct=new BillProduct();
		billProduct.setQuantity(billProductDTO.getQuantity());
		billProduct.setUnitPrice(billProductDTO.getUnitPrice());
		
		Product product =new Product();
		product.setId(billProductDTO.getProductId());
		
		Bill bill=new Bill();
		bill.setId(billProductDTO.getBillId());
		
		billProductDao.update(billProduct);
	}

	
	@Override
	public void delete(Long id) {
		BillProduct billProduct =billProductDao.getBillProductId(id);
		if(billProduct!=null) {
			billProductDao.delete(billProduct);
		}
		
	}

	@Override
	public Long count(SearchBillProductDTO searchBillProductDTO) {
		return billProductDao.count(searchBillProductDTO);
	}

	
	@Override
	public Long countTotal(SearchBillProductDTO searchBillProductDTO) {
		return billProductDao.countTotal(searchBillProductDTO);
	}
	
	@Override
	public BillProductDTO getBillProductById(Long id) {
		BillProduct billProduct = billProductDao.getBillProductId(id);
		return convert(billProduct);
	}

	
	@Override
	public List<BillProductDTO> find(SearchBillProductDTO searchBillProductDTO){
		List<BillProduct> listProducts = billProductDao.find(searchBillProductDTO);
		List<BillProductDTO> listProductDTOs = new ArrayList<BillProductDTO>();
		listProducts.forEach(products -> {
			listProductDTOs.add(convert(products));
		});
		return listProductDTOs;
	}

	private BillProductDTO convert(BillProduct billProduct) {
		BillProductDTO billProductDTO =new BillProductDTO();
		billProductDTO.setId(billProduct.getId());
		billProductDTO.setQuantity(billProduct.getQuantity());
		billProductDTO.setUnitPrice(billProduct.getUnitPrice());
		
		if(billProduct.getProduct()!= null) {
			billProductDTO.setProductId(billProduct.getProduct().getId());
			billProductDTO.setProductName(billProduct.getProduct().getName());
		}
		
		if(billProduct.getBill()!= null) {
			billProductDTO.setBillId(billProduct.getBill().getId());
		}
		
		return billProductDTO;
	}
	
}
