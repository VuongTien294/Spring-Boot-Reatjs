package com.trungtamjava.api;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.trungtamjava.model.CommentDTO;
import com.trungtamjava.model.ResponseDTO;
import com.trungtamjava.model.SearchCommentDTO;
import com.trungtamjava.model.UserPrincipal;
import com.trungtamjava.service.CommentService;
import com.trungtamjava.ultil.RoleEnum;

@RestController
@Transactional
@RequestMapping(value = "/api")
public class RestComment {
	@Autowired
	CommentService commentService;
	
	@PostMapping("/member/comment/add")
	public CommentDTO addComment(@RequestBody CommentDTO commentDTO, HttpServletRequest req) {
		UserPrincipal currentUser = (UserPrincipal) SecurityContextHolder.getContext().getAuthentication()
				.getPrincipal();
		if (req.isUserInRole(RoleEnum.MEMBER.getRoleName())) {
			commentDTO.setUserId(currentUser.getId());
		}
		commentService.add(commentDTO);
		return commentDTO;
	}

	@DeleteMapping(value = "/admin/comment/delete")
	public void delete(@RequestParam(name = "id") Long id) {
		commentService.delete(id);

	}

	@PostMapping(value = "/comment/search")
	public ResponseDTO<CommentDTO> find(@RequestBody SearchCommentDTO searchCommentDTO) {
		ResponseDTO<CommentDTO> responseDTO = new ResponseDTO<CommentDTO>();
		responseDTO.setData(commentService.find(searchCommentDTO));
		responseDTO.setRecordsFiltered(commentService.count(searchCommentDTO));
		responseDTO.setRecordsTotal(commentService.countTotal(searchCommentDTO));
		return responseDTO;
	}

}
