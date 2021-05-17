package com.trungtamjava.service.impl;


import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.trungtamjava.dao.CommentDao;
import com.trungtamjava.dao.ProductDao;
import com.trungtamjava.dao.UserDao;
import com.trungtamjava.entity.Comment;
import com.trungtamjava.entity.Product;
import com.trungtamjava.entity.User;
import com.trungtamjava.model.CommentDTO;
import com.trungtamjava.model.SearchCommentDTO;
import com.trungtamjava.service.CommentService;
import com.trungtamjava.ultil.DateTimeUtils;


@Service
@Transactional
public class CommentServiceImpl implements CommentService {

	@Autowired
	CommentDao commentDao;
	

	@Autowired
	private UserDao userDao;

	@Autowired
	private ProductDao productDao;

	
	@Override
	public void add(CommentDTO commentDTO) {
		Comment comment = new Comment();
		comment.setContent(commentDTO.getContent());
		comment.setCreatedDate(new Date());
		User user = userDao.getUserId(commentDTO.getUserId());
		comment.setUser(user);
		Product product = productDao.getProductId(commentDTO.getProductId());
		comment.setProduct(product);
		commentDao.add(comment);
		commentDTO.setId(comment.getId());

	}

	
	@Override
	public void delete(Long id) {
		Comment comment = commentDao.get(id);
		if (comment != null) {
			commentDao.delete(comment);
		}
	}

	
	@Override
	public void update(CommentDTO commentDTO) {
		Comment comment = commentDao.get(commentDTO.getId());
		if (comment != null) {
			comment.setContent(commentDTO.getContent());
			comment.setCreatedDate(new Date());
			User user = userDao.getUserId(commentDTO.getUserId());
			comment.setUser(user);
			Product product = productDao.getProductId(commentDTO.getProductId());
			comment.setProduct(product);
			commentDao.update(comment);
		}

	}

	
	@Override
	public List<CommentDTO> find(SearchCommentDTO searchCommentDTO) {
		List<Comment> commentList = commentDao.find(searchCommentDTO);
		List<CommentDTO> commentDTOs = new ArrayList<CommentDTO>();
		commentList.forEach(comments -> {
			commentDTOs.add(convertToDTO(comments));
		});
		return commentDTOs;
	}

	private CommentDTO convertToDTO(Comment comments) {
		CommentDTO commentDTO = new CommentDTO();
		commentDTO.setId(comments.getId());
		commentDTO.setContent(comments.getContent());
		if (comments.getUser() != null) {
			commentDTO.setUserId(comments.getUser().getId());
		}
		if (comments.getCreatedDate() != null) {
			commentDTO.setCreatedDate(
					DateTimeUtils.formatDate(comments.getCreatedDate(), DateTimeUtils.DD_MM_YYYY_HH_MM));
		}
		if (comments.getProduct() != null) {
			commentDTO.setProductId(comments.getProduct().getId());
		}
		return commentDTO;
	}

	
	@Override
	public Long count(SearchCommentDTO searchCommentDTO) {
		return commentDao.count(searchCommentDTO);
	}

	
	@Override
	public Long countTotal(SearchCommentDTO searchCommentDTO) {
		return commentDao.countTotal(searchCommentDTO);
	}

	
	@Override
	public CommentDTO get(Long id) {
		Comment comment = commentDao.get(id);
		return convertToDTO(comment);
	}
}
