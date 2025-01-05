package com.project;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.project.repository.UserRepository;

@SpringBootApplication
public class FirstSpringBootProjectApplication implements CommandLineRunner {
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@Autowired
	private UserRepository repository;

	public static void main(String[] args) {
		SpringApplication.run(FirstSpringBootProjectApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		/*String sql = "SELECT name FROM Customer";
		List<Customer> customer = jdbcTemplate.query(sql, BeanPropertyRowMapper.newInstance(Customer.class));
		customer.forEach(System.out :: println);
		System.out.println("Omkar");*/
		/*this.repository.save(new User("Arjun","Shinde","rjshinde@gmail.com"));
		this.repository.save(new User("Sachin","Shinde","sachshinde@gmail.com"));
		this.repository.save(new User("Santosh","Shinde","santshinde@gmail.com"));*/
	}
	
	@RequestMapping(value = "/")
	public ModelAndView demo() {
		ModelAndView model = new ModelAndView("home");
		return model;
	}

}
