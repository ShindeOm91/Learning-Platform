package com.project.model;

public class OptionDTO {
	private String optionText;
    private int answerId;
	public String getOptionText() {
		return optionText;
	}
	public void setOptionText(String optionText) {
		this.optionText = optionText;
	}
	public int getAnswerId() {
		return answerId;
	}
	public void setAnswerId(int answerId) {
		this.answerId = answerId;
	}
	public OptionDTO(String optionText, int answerId) {
		super();
		this.optionText = optionText;
		this.answerId = answerId;
	}
}
