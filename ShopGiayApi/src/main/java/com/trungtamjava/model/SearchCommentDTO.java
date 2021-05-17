package com.trungtamjava.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SearchCommentDTO extends SearchDTO {
	private Long userId;
	private Long productId;

}
