package com.ohsanrim.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.ohsanrim.entity.Member;

public interface MemberRepository  extends JpaRepository<Member, String>, JpaSpecificationExecutor<Member>  {

	Member findByNickname(String nickname);

	Member findByEmail(String email);



}
