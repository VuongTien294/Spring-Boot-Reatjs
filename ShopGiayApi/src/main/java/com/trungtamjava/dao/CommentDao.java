package com.trungtamjava.dao;

import java.util.List;

import com.trungtamjava.entity.Comment;
import com.trungtamjava.model.SearchCommentDTO;

public interface CommentDao {
	
	void add(Comment comment);
	
	void update(Comment comment);
	
	void delete(Comment comment);

	Long countTotal(SearchCommentDTO searchCommentDTO);

	Long count(SearchCommentDTO searchCommentDTO);

	List<Comment> find(SearchCommentDTO searchCommentDTO);

	Comment get(Long id);

}
