package com.trungtamjava.dao;

import java.util.List;

import com.trungtamjava.entity.User;
import com.trungtamjava.model.SearchUserDTO;

public interface UserDao {
	void add(User user);
	
	void update(User user);
	
	void delete(User user);

	User getByName(String name);

	User getByUsername(String username);

	long countTotal(SearchUserDTO searchUserDTO);

	long count(SearchUserDTO searchUserDTO);

	List<User> find(SearchUserDTO searchUserDTO);

	User getUserId(Long id);

}
