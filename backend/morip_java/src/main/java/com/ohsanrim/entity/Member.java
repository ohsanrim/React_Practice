package com.ohsanrim.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "Member")
public class Member {
	
	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private String id;
	
	@Column(name = "email")
	private String email;
	
	@Column(name = "pwd")
	private String pwd;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "nickname")
	private String nickname;
	
	@Column(name = "idCardNumber1")
	private String idCardNumber1;
	
	@Column(name = "idCardNumber2")
	private String idCardNumber2;
	
	@Column(name = "gender")
	private String gender;
	
	@Column(name = "image")
	private String image;
	
	@Column(name = "backimage")
	private String backimage;
	
	@Column(name = "checkid")
	private String checkid;
	
	
	
}
