package com.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.model.DocumentUpload;

public interface DocumentUploadRepository extends JpaRepository<DocumentUpload, Long>{

}
