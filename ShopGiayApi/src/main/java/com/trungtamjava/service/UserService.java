package com.trungtamjava.service;

import java.util.List;
import com.trungtamjava.model.SearchUserDTO;
import com.trungtamjava.model.UserDTO;

public interface UserService {

	long countTotal(SearchUserDTO searchUserDTO);

	long count(SearchUserDTO searchUserDTO);

	List<UserDTO> find(SearchUserDTO searchUserDTO);

	UserDTO getUserById(Long id);

	void deleteUser(Long id);

	void updateUser(UserDTO userDTO);

	void addUser(UserDTO userDTO);

	void setupUserPassword(UserDTO accountDTO);

	void changePassword(UserDTO userDTO);



}
