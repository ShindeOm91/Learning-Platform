package com.project.model;

import java.util.List;

public class QuestionDTO {

	private Long id;
    private String qustion;
    private List<OptionDTO> options;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getQustion() {
		return qustion;
	}
	public void setQustion(String qustion) {
		this.qustion = qustion;
	}
	public List<OptionDTO> getOptions() {
		return options;
	}
	public void setOptions(List<OptionDTO> options) {
		this.options = options;
	}
	public QuestionDTO(Long id, String qustion, List<OptionDTO> options) {
		super();
		this.id = id;
		this.qustion = qustion;
		this.options = options;
	}
	
}
