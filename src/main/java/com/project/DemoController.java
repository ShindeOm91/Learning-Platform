package com.project;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class DemoController {

	@RequestMapping("/hello")
    @ResponseBody 
    public String helloWorld()
    {
        //return "Hello World!";
        return "demo";
    }
	
	@RequestMapping("/demo")
    @ResponseBody 
    public ModelAndView demo() {
		ModelAndView model = new ModelAndView("demo");
		return model;
	}
}
