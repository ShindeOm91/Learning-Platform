package com.project.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="tbl_locations")
public class Locations {

	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY)
	private long id;
	private String location_name;
	private String locations_alias;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getLocation_name() {
		return location_name;
	}
	public void setLocation_name(String location_name) {
		this.location_name = location_name;
	}
	public String getLocations_alias() {
		return locations_alias;
	}
	public void setLocations_alias(String locations_alias) {
		this.locations_alias = locations_alias;
	}
	
}
