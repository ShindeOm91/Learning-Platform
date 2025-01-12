package com.project.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.aspectj.weaver.patterns.TypePatternQuestions.Question;

@Entity
@Table(name="tbl_options")
public class TblOptions {

	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY)
	private Long id;
	@Column(name="option_text")
	private String optionText;
/*	@Column(name = "question_id")
	private Long question_id;*/
	@ManyToOne
	@JoinColumn(name = "question_id")  // Assuming "question_id" is the foreign key
	private TblQuesion question;
	private int sequence;
	private int answer_id;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getOptionText() {
		return optionText;
	}
	public void setOptionText(String optionText) {
		this.optionText = optionText;
	}
	
	public int getSequence() {
		return sequence;
	}
	public void setSequence(int sequence) {
		this.sequence = sequence;
	}
	public int getAnswer_id() {
		return answer_id;
	}
	public void setAnswer_id(int answer_id) {
		this.answer_id = answer_id;
	}
	public TblQuesion getQuestion() {
		return question;
	}
	public void setQuestion(TblQuesion question) {
		this.question = question;
	}
	
}
