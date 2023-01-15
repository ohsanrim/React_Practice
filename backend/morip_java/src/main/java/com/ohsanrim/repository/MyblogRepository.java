package com.ohsanrim.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ohsanrim.entity.BlogBoard;

public interface MyblogRepository  extends JpaRepository<BlogBoard, String>, JpaSpecificationExecutor<BlogBoard>  {

	void deleteByIdAndPseq(String id, String pseq);

	List<BlogBoard> findByEmailAndRefOrderByStepDesc(String email, String ref);

	int countByEmailAndStep(String email, int i);

	@Query("select count(*) from BlogBoard where ref=:seq and step>0")
	int countByRef(@Param("seq") String seq);



}
