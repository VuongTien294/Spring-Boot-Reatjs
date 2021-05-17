package com.trungtamjava.service;

import java.util.List;

import com.trungtamjava.model.CommentDTO;
import com.trungtamjava.model.SearchCommentDTO;

public interface CommentService {

	CommentDTO get(Long id);

	Long countTotal(SearchCommentDTO searchCommentDTO);

	Long count(SearchCommentDTO searchCommentDTO);

	List<CommentDTO> find(SearchCommentDTO searchCommentDTO);

	void update(CommentDTO commentDTO);

	void delete(Long id);

	void add(CommentDTO commentDTO);

}
