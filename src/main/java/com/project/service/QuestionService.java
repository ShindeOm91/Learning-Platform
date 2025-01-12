package com.project.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.model.OptionDTO;
import com.project.model.QuestionDTO;
import com.project.model.TblOptions;
import com.project.model.TblQuesion;
import com.project.repository.OptionsRepository;
import com.project.repository.QuestionRepository;

@Service
public class QuestionService {
	
	@Autowired
    private QuestionRepository questionRepository;
	
	@Autowired
    private OptionsRepository optionsRepository;
	
	/*public List<TblQuesion> getQuestionsWithOptions() {
        List<TblQuesion> questions = questionRepository.findAll();

        for (TblQuesion question : questions) {
            List<TblOptions> options = optionsRepository.findByQuestion_id(question.getId());
        }

        return questions;
    }*/
	
	public List<QuestionDTO> getQuestionsWithOptions() {
	    List<TblQuesion> questions = questionRepository.findAll();
//	    List<QuestionDTO> questionDTOList = new ArrayList<>();

	    /*for (TblQuesion question : questions) {
	        List<TblOptions> options = optionsRepository.findByQuestion_id(question.getId());
	        List<String> optionTexts = options.stream().map(TblOptions::getOptionText).collect(Collectors.toList());
	        questionDTOList.add(new QuestionDTO(question.getId(), question.getQustion(), optionTexts));
	    }
	    return questionDTOList;*/
	    List<QuestionDTO> questionDTOList = new ArrayList<>();

	    for (TblQuesion question : questions) {
	        List<TblOptions> options = optionsRepository.findByQuestion_id(question.getId());
	        List<OptionDTO> optionDTOList = options.stream().map(option -> new OptionDTO(option.getOptionText(), option.getAnswer_id())).collect(Collectors.toList());
	        questionDTOList.add(new QuestionDTO(question.getId(), question.getQustion(), optionDTOList));
	    }

	    return questionDTOList;
	}

	
	public Map<String, Object> getQuestionDetails(Long questionId) {
		TblQuesion question = questionRepository.findById(questionId).orElseThrow(() -> new RuntimeException("Question not found"));
        List<TblOptions> options = optionsRepository.findByQuestion_id(questionId);

        Map<String, Object> response = new HashMap<>();
        response.put("question", question);
        response.put("options", options);

        return response;
    }
}
