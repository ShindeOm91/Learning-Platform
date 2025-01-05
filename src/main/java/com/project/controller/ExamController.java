package com.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.JsonNode;
import com.project.model.TblOptions;
import com.project.model.TblQuesion;
import com.project.repository.OptionsRepository;
import com.project.repository.QuestionRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/exam")
public class ExamController {
	
	@Autowired
	QuestionRepository questionRepository;
	
	@Autowired
	OptionsRepository optionsRepository;
	
	@PostMapping("/addExamQuestion")
    public ResponseEntity<String> addExamQuestion(@RequestBody JsonNode json) {
        // Extract data from JsonNode
        String question = json.get("question").asText();
        JsonNode options = json.get("options");
        int correctAnswer = json.get("correctAnswer").asInt();

        // Example: Log extracted data
        System.out.println("Question: " + question);
        System.out.println("Options: " + options.toString());
        System.out.println("Correct Answer: " + correctAnswer);

        // TODO: Process or save the data as needed
        TblQuesion quesion = new TblQuesion();
        quesion.setQustion(question);
        quesion.setStatus(1);
        TblQuesion quesions = questionRepository.save(quesion);
        
        for(int i=0; i<options.size(); i++) {
        	TblOptions options2 = new TblOptions();
        	int count = i+1;
        	String optionss = "option"+count;
            options2.setOptionText(options.get(optionss).toString());
            options2.setQuestion_id(Integer.parseInt(quesions.getId().toString()));
            options2.setSequence(i+1);
            if(correctAnswer==count) {
            	options2.setAnswer_id(1);
            } else {
            	options2.setAnswer_id(0);
            }
            optionsRepository.save(options2);
        }
        
        return ResponseEntity.ok("Exam question processed successfully!");
    }

}