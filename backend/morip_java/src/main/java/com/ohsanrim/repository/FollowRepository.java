package com.ohsanrim.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ohsanrim.entity.Follow;

public interface FollowRepository extends JpaRepository<Follow, String>, JpaSpecificationExecutor<Follow>   {

	void deleteByEmailAndFollowEmail(String email, String followEmail);

	Follow findByEmailAndFollowEmail(String email, String followEmail);

	@Query("select m.nickname as nickname, m.image as image, m.id, f.email, f.followEmail from Member m, Follow f where m.email=f.email and f.followEmail=:followEmail")
	List<Follow> followClick(@Param("followEmail") String followEmail);

	@Query("select m.nickname as nickname, m.image as image, m.id, f.email, f.followEmail from Member m, Follow f where m.email=f.followEmail and f.email=:email")
	List<Follow> followingClick(@Param("email") String email);

	int countByFollowEmail(String followEmail);

}
