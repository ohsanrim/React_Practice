package com.ohsanrim.service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ohsanrim.entity.BlogBoard;
import com.ohsanrim.entity.Follow;
import com.ohsanrim.entity.UserLike;
import com.ohsanrim.entity.Member;
import com.ohsanrim.repository.FollowRepository;
import com.ohsanrim.repository.LikeRepository;
import com.ohsanrim.repository.MemberRepository;
import com.ohsanrim.repository.MyblogRepository;

//import java.util.HashMap;
//import java.util.List;
//import java.util.Map;
//
//import javax.servlet.http.HttpSession;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import hashtag.bean.HashtagDTO;
//import member.bean.MemberDTO;
//import myblog.bean.FollowDTO;
//import myblog.bean.LikeDTO;
//import myblog.bean.MyblogDTO;
//import myblog.dao.MyblogDAO;
//
@Service
public class MyblogServiceImpl{
	
	@Autowired
	private MyblogRepository myblogRepository;
	
	@Autowired
	private MemberRepository memberRepository;
	
	@Autowired
	private LikeRepository likeRepository;
	
	@Autowired
	private FollowRepository followRepository;
	
	
	final String email = "ka28@naver.com";
	
	public List<BlogBoard> infinityScroll(Map<String,Object> map) {
		
		List<BlogBoard> blogList = myblogRepository.findAll();
		
		return blogList;
//		return myblogDAO.infinityScroll(map);
	}

	public int blogCount(String email) {
		// TODO Auto-generated method stub
		return (int) myblogRepository.count();
	}

//	@Autowired
//	private MyblogDAO myblogDAO;
//	
//	@Autowired
//	private HttpSession session;
//	
	

	
	public void insertWriteBlog(BlogBoard blogBoard) {
		myblogRepository.save(blogBoard);
	}

	public BlogBoard viewPage(String id) {
		Optional<BlogBoard> blog = myblogRepository.findById(id);
		return blog.get();
	}
//
//	@Override
	public void deleteBlogBoard(Map<String, String> map) {
		String id = map.get("id");
		String pseq = map.get("pseq");
		myblogRepository.deleteByIdAndPseq(id, pseq);
	}
//
//	@Override
	public void insertReply(BlogBoard blogBoard) {
		myblogRepository.save(blogBoard);
		
	}
//	@Override
	public List<BlogBoard> loadReply(int ref) {
		return myblogRepository.findByEmailAndRefOrderByStepDesc(email, Integer.toString(ref));
	}
//
//	@Override
	public void updateReply(BlogBoard blogBoard) {
		myblogRepository.save(blogBoard);
	}
//
//
//	@Override
	public Member loadMember(String nickname) {
		return memberRepository.findByNickname(nickname);
//		return myblogDAO.loadMember(nickname);
	}
//
//	@Override
	   public int boardSize(String email) {
	      
	      return myblogRepository.countByEmailAndStep(email, 0);
	   }
//
//	
//	@Override
	public BlogBoard boardWriteCheck(String id) {

		Optional<BlogBoard> blog = myblogRepository.findById(id);
		return blog.get();
	}
//	
//	@Override
	public void like(Map<String, String> map) {
		
//		String email = (String) session.getAttribute("memEmail");
//		map.put("email", email);
		String id = map.get("id");
		UserLike like = new UserLike();
		
		like.setMemberEmail(email);
		like.setId(id);
		likeRepository.save(like);
		
		Optional<BlogBoard> blog = myblogRepository.findById(id);
		BlogBoard blogBoard = blog.get();
		blogBoard.setLikecount(blogBoard.getLikecount()+1);
		myblogRepository.save(blogBoard);
	}
//	
//	@Override
	public void unlike(Map<String, String> map) {
		String seq = map.get("seq");
		
		likeRepository.deleteByBoardSeqAndMemberEmail(seq, email);
//		String email = (String) session.getAttribute("memEmail");
//		map.put("email", email);
//		
//		myblogDAO.unlike(map);
		Optional<BlogBoard> blog = myblogRepository.findById(seq);
		BlogBoard blogBoard = blog.get();
		blogBoard.setLikecount(blogBoard.getLikecount()-1);
		myblogRepository.save(blogBoard);
	}
//	
//	@Override
	public List<UserLike> likeCheck() {
		
//		String email = (String) session.getAttribute("memEmail");
//		
		return likeRepository.findByMemberEmail(email);
	}
//	
//	@Override
	public UserLike likeViewCheck(Map<String, String> map) {
		String seq = map.get("id");
		
		return likeRepository.findByMemberEmailAndBoardSeq(email, seq);
	}
//	
//	@Override
	public int likeSize(Map<String, String> map) {
		String id = map.get("id");
		Optional<BlogBoard> blogboardOp = myblogRepository.findById(id);
		BlogBoard blogboard = blogboardOp.get();
		return blogboard.getLikecount();
	}
//	
//	@Override
	public List<BlogBoard> likeListSize() {
		
		return myblogRepository.findAll();
	}
//	
//	@Override
	public void follow(Map<String, String> map) {
		
//		String email = (String) session.getAttribute("memEmail");
//		map.put("email", email);
		String followEmail = map.get("followEmail");
		
		Follow follow = new Follow();
		follow.setEmail(email);
		follow.setFollowEmail(followEmail);
		followRepository.save(follow);
	}
	
//	@Override
	public void unfollow(Map<String, String> map) {
		
//		String email = (String) session.getAttribute("memEmail");
//		map.put("email", email);
		String followEmail = map.get("followEmail");
		
		followRepository.deleteByEmailAndFollowEmail(email, followEmail);
		
	}
	
	public Follow followCheck(Follow follow) {
		
//		String email = (String) session.getAttribute("memEmail");
//		map.put("email", email);
		String followEmail = follow.getFollowEmail();
		
		return followRepository.findByEmailAndFollowEmail(email, followEmail);
//		return myblogDAO.followCheck(map);
	}
	
//	@Override
	public List<Follow> followClick(String email) {
		return followRepository.followClick(email);
//		return myblogDAO.followClick(email);
	}
//	
//	@Override
	public List<Follow> followingClick(String follow_email) {
		
		return followRepository.followingClick(follow_email);
	}
//	
//	@Override
	public int followerSize(String follow_email) {
		return followRepository.countByFollowEmail(follow_email);
//		return myblogDAO.followerSize(follow_email);
	}
//	
//	@Override
	public int followingSize(String email) {
		return followRepository.countByFollowEmail(email);
//		return myblogDAO.followingSize(email);
	}
//	
//	@Override
	public int replySize(String seq) {
		return myblogRepository.countByRef(seq);
//		return myblogDAO.replySize(seq);
	}
//
//	@Override
	public void updateBgImg(Map <String, String> map) {
		Member member = memberRepository.findByEmail(email);
		
		String backimage = map.get("backimage");
		member.setBackimage(backimage);
		
		memberRepository.save(member);
//		myblogRepository.save();
//		myblogDAO.updateBgImg(map);
		
	}
//
//	@Override
	public void modifyBoard(BlogBoard blogBoard) {
//		String seq = map.get("seq");
		myblogRepository.save(blogBoard);
	}
//
//	@Override
	public void boardHit(String seq) {
		
		Optional<BlogBoard> blogBoard = myblogRepository.findById(seq);
		BlogBoard modifyBlogBoard = blogBoard.get();
		modifyBlogBoard.setHit(modifyBlogBoard.getHit()+1);
		myblogRepository.save(modifyBlogBoard);
//		myblogDAO.boardHit(seq);
	}
//
//	@Override
//	public List<HashtagDTO> loadHashtag(String seq) {
//		return myblogDAO.loadHashtag(Integer.parseInt(seq));
//	}
//
//	@Override
//	public void modifyHashtag(int seq, String hashtag) {
//		String [] ar = hashtag.split(" ");
//		Map <String, Object> map = new HashMap<String, Object>();
//		map.put("seq", seq);
//		map.put("ar", ar);
//		myblogDAO.modifyHashtag(map);
//	}
//
//  public List<String> bestWriter() {
//		return myblogDAO.bestWriter();
//	}
//
//	@Override
//	public List<MyblogDTO> bestTrip(Map<String, String> map) {
//		return myblogDAO.bestTrip(map);
//	}
}
