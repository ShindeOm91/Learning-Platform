package com.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.JsonNode;
import com.project.repository.EmailService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/mail/")
public class EmailController {

	@Autowired
    private EmailService emailService;

    @GetMapping("/send-email/{toEmails}")
    public String sendEmail(@PathVariable String toEmails) {
    	String toEmail = "om.s.91199@gmail.com";
    	String subject = "Test";
    	String body = "Hello%20World!";
        emailService.sendSimpleEmail(toEmail, subject, body);
        return "Email sent to " + toEmail;
    }
}
