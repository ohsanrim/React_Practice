package com.ohsanrim.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.ohsanrim.entity.UserLike;

public interface LikeRepository extends JpaRepository<UserLike, String>, JpaSpecificationExecutor<UserLike>   {

	void deleteByBoardSeqAndMemberEmail(String seq, String email);

	List<UserLike> findByMemberEmail(String email);

	UserLike findByMemberEmailAndBoardSeq(String memEmail, String seq);

}
