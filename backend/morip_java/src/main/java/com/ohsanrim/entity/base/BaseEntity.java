package com.ohsanrim.entity.base;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Transient;

import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.ohsanrim.util.DateUtils;

import lombok.Getter;
import lombok.Setter;

@EntityListeners(AuditingEntityListener.class)
@MappedSuperclass
@Getter
@Setter
public class BaseEntity implements Serializable {
	
	@Column(name = "created_date", nullable = false, updatable=false)
	@Temporal(TemporalType.TIMESTAMP)
    @CreatedDate
	private Date createdDate;
	@Transient
	public String getCreatedDateView() {
		return DateUtils.yyyyMMddhhmmss(createdDate);
	}
	
	@Column(name = "created_by", nullable = false, updatable=false)
    @CreatedBy
    private String createdBy;
	
	
	@Column(name = "modified_date", nullable = false, updatable=true)
	@Temporal(TemporalType.TIMESTAMP)
    @LastModifiedDate
	private Date modifiedDate;
	@Transient
	public String getModifiedDateView() {
		return DateUtils.yyyyMMddhhmmss(modifiedDate);
	}

	@Column(name = "modified_by", nullable = false, updatable=true)
    @LastModifiedBy
    private String modifiedBy;
}
