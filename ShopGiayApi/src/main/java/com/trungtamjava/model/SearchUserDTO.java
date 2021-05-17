package com.trungtamjava.model;

import java.util.List;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SearchUserDTO extends SearchDTO{
	private Boolean enabled;
	private List<String> roleList;
}
