package com.project.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.model.TblOptions;

public interface OptionsRepository  extends JpaRepository<TblOptions, Long>{

//	List<TblOptions> findByQuestionId(Long questionId);
	/*@Query("SELECT o FROM TblOptions o WHERE o.question_id = :questionId")
    List<TblOptions> findByQuestionId(@Param("questionId") Long questionId);*/
	
	List<TblOptions> findByQuestion_id(Long question_id);
}
