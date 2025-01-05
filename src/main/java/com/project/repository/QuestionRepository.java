package com.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.model.TblQuesion;

public interface QuestionRepository  extends JpaRepository<TblQuesion, Long>{

}
