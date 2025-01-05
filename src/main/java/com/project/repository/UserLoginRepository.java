package com.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.model.UserLogin;

public interface UserLoginRepository extends JpaRepository<UserLogin, Long>{
	
	UserLogin getUserDetailsByuname(String uname);

}
