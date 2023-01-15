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
@Table(name = "BlogBoard")
public class BlogBoard {
	
	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private String id;
	
	@Column(name = "nickname")
	private String nickname;
	
	@Column(name = "email")
	private String email;
	
	@Column(name = "subject")
	private String subject;
	
	@Column(name = "content", columnDefinition = "LONGTEXT")
	private String content;

	@Column(name = "mainimage")
	private String mainimage;

	@Column(name = "hit")
	private int hit;

	@Column(name = "ref")
	private int ref;

	@Column(name = "step")
	private int step;

	@Column(name = "pseq")
	private int pseq;
	
	@Column(name = "publicoption")
	private String publicoption;
	
	@Column(name = "likecount")
	private int likecount;
	
	@Column(name = "logtime")
	private Date logtime;
	
	private String image;
}
