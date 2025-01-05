package com.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.model.Locations;

public interface LocationsRepository  extends JpaRepository<Locations, Long>{

}
