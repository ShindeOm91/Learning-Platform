package com.project.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="tbl_role")
public class Role {

	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY)
	private long id;
	@Column(name="role_name")
	private String role_name;
	@Column(name="role_alias")
	private String role_alias;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getRole_name() {
		return role_name;
	}
	public void setRole_name(String role_name) {
		this.role_name = role_name;
	}
	public String getRole_alias() {
		return role_alias;
	}
	public void setRole_alias(String role_alias) {
		this.role_alias = role_alias;
	}
}
