package com.ohsanrim.controller;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.ohsanrim.entity.BlogBoard;
import com.ohsanrim.entity.Follow;
import com.ohsanrim.entity.Member;
import com.ohsanrim.entity.UserLike;
import com.ohsanrim.service.MyblogServiceImpl;


@RestController
@RequestMapping(value = "myblog")
public class MyblogController {
	@Autowired
	private MyblogServiceImpl myblogServiceImpl;
	
	@PostMapping(value = "infinityScroll")
	public ModelAndView infinityScroll(Model model, @RequestParam(value = "pg") String pg,
			@RequestParam(value = "email") String email) {
		int endNum = Integer.parseInt(pg) * 9;
		int startNum = endNum - 8;
		email = "ka28@naver.com";
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("endNum", endNum);
		map.put("startNum", startNum);
		map.put("email", email);

		List<BlogBoard> list = myblogServiceImpl.infinityScroll(map);
		System.out.println();
		ModelAndView mav = new ModelAndView();
		mav.addObject("list", list);
		mav.addObject("pg", pg);
		mav.setViewName("jsonView");
		return mav;
	}
	
	@PostMapping(value = "boardSize")
	@ResponseBody
	public ModelAndView boardSize(@RequestParam String email) {
		int size = myblogServiceImpl.blogCount(email);
		ModelAndView mav = new ModelAndView();
		System.out.println("boardSize >> "+size);
		mav.addObject("size", size);
		mav.setViewName("jsonView");
		return mav;
	}
	
//	@PostMapping(value = "bgImageSave", produces = "application/text; charset=utf8")
//	@ResponseBody
//	public String bgImageSave(HttpSession session, @RequestParam MultipartFile backgroundImg) {
//		System.out.println("bgImageSave >> "+backgroundImg.getOriginalFilename());
//		UUID uid = UUID.randomUUID();
//		String fileName = uid.toString() + "_" + backgroundImg.getOriginalFilename();
//		String filePath = "E:\\spring\\gihwan\\morip\\morip\\src\\main\\webapp\\storage";
//		String filePath2 = "E:\\spring\\gihwan\\.metadata\\.plugins\\org.eclipse.wst.server.core\\tmp0\\wtpwebapps\\morip\\storage";
//		File file = new File(filePath,fileName);
//		File file2 = new File(filePath2,fileName);
//		try {
//			FileCopyUtils.copy(backgroundImg.getInputStream(), new FileOutputStream(file));
//			FileCopyUtils.copy(backgroundImg.getInputStream(), new FileOutputStream(file2));
//		} catch (FileNotFoundException e) {
//			e.printStackTrace();
//		} catch (IOException e) {
//			e.printStackTrace();
//		}
//		fileName = file.getName();
//		// memberTable 안에 베경 이미지 이름 저장
//		Map<String, String> map = new HashMap<String, String>();
//		map.put("email", (String) session.getAttribute("memEmail"));
//		map.put("backimage", fileName);
//		myblogServiceImpl.updateBgImg(map);
//		return fileName;
//	}
//}
//	@Autowired
//	private MyblogService myblogService;
//	@Autowired
//	private HashtagService hashtagService;
//	@Autowired
//	private MemberService memberService;
//
//	/********************* mypage.jsp ***********************/
//	@RequestMapping(value = "", method = RequestMethod.GET)
//	public String mypage(HttpSession session, Model model, @RequestParam(value = "nickname") String nickname,
//			HttpServletResponse response) {
//		// 쿠키
//		if (nickname != null) {
//			Cookie cookie = new Cookie("memHit", "ok");
//			cookie.setMaxAge(30 * 60);
//			cookie.setPath("/");
//			response.addCookie(cookie);// 클라이언트에게 보내기
//		}
//
//		// DB 에서 해당 유저에 대한 정보 및 작성한 모든 글 호출.
//		Member memberDTO = myblogServiceImpl.loadMember(nickname);
//		// 배경 사진이 등록되지 않았을 경우
//
//		if (memberDTO.getImage().equals("0")) {
//			// 프로필사진이 비어있을 경우
//			memberDTO.setImage("basicUserImg.png");
//		} // 배경사진이 비어있을 경우
//		if (memberDTO.getBackimage().equals("0")) {
//			memberDTO.setBackimage("basicBgImg.jpg");
//		}
//
//		model.addAttribute("memberDTO", memberDTO);
//		model.addAttribute("pageNickname", nickname);
//		model.addAttribute("memEmail", (String) session.getAttribute("memEamil"));
//		model.addAttribute("display", "/resources/myblog/mypage.jsp");
//		return "/myblog/main"; 
//	}


//
	@ResponseBody
	@RequestMapping(value = "bgImageSave", method = RequestMethod.POST, produces = "application/text; charset=utf8")
	public String bgImageSave(HttpSession session, @RequestParam MultipartFile backgroundImg) {
		UUID uid = UUID.randomUUID();
		String fileName = uid.toString() + "_" + backgroundImg.getOriginalFilename();
		String filePath = "E:\\spring\\gihwan\\morip\\morip\\src\\main\\webapp\\storage";
		String filePath2 = "E:\\spring\\gihwan\\.metadata\\.plugins\\org.eclipse.wst.server.core\\tmp0\\wtpwebapps\\morip\\storage";
		File file = new File(filePath,fileName);
		File file2 = new File(filePath2,fileName);
		try {
			FileCopyUtils.copy(backgroundImg.getInputStream(), new FileOutputStream(file));
			FileCopyUtils.copy(backgroundImg.getInputStream(), new FileOutputStream(file2));
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		fileName = file.getName();
		// memberTable 안에 베경 이미지 이름 저장
		Map<String, String> map = new HashMap<String, String>();
		map.put("email", (String) session.getAttribute("memEmail"));
		map.put("backimage", fileName);
		myblogServiceImpl.updateBgImg(map);
		return fileName;
	}

	/*********************** writeBlog 부분(에세이 작성) **********************/
	@RequestMapping(value = "writeBlog0", method = RequestMethod.GET)
	public ModelAndView writeBlog(HttpSession session) {
		ModelAndView mav = new ModelAndView();
		mav.setViewName("/resources/main/index");
		mav.addObject("display", "/resources/myblog/writeBlog0.jsp");
		return mav;
	}

	@RequestMapping(value = "writeBlog1", method = RequestMethod.GET)
	public ModelAndView writeBlog1(HttpSession session, @RequestParam(value = "startdate") String startdate,
			@RequestParam(value = "enddate") String enddate) {
		ModelAndView mav = new ModelAndView();
		mav.setViewName("/resources/main/index");
		mav.addObject("startdate", startdate);
		mav.addObject("enddate", enddate);
		mav.addObject("display", "/resources/myblog/writeBlog1.jsp");
		return mav;
	}

	@ResponseBody
	@RequestMapping(value = "imageSave", method = RequestMethod.POST, produces = "application/text; charset=utf8")
	public String imageSave(HttpSession session, @RequestParam(value = "backgroundImg") MultipartFile backgroundImg) {
		UUID uid = UUID.randomUUID();
		String fileName = uid.toString() + "_" + backgroundImg.getOriginalFilename();
		String filePath = "E:\\spring\\gihwan\\morip\\morip\\src\\main\\webapp\\storage";
		String filePath2 = "E:\\spring\\gihwan\\.metadata\\.plugins\\org.eclipse.wst.server.core\\tmp0\\wtpwebapps\\morip\\storage";
		File file = new File(filePath,fileName);
		File file2 = new File(filePath2,fileName);
		try {
			FileCopyUtils.copy(backgroundImg.getInputStream(), new FileOutputStream(file));
			FileCopyUtils.copy(backgroundImg.getInputStream(), new FileOutputStream(file2));
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		fileName = file.getName();
		return fileName;
	}

	@RequestMapping(value = "writeBlog2", method = RequestMethod.GET)
	public ModelAndView writeBlog2(HttpSession session, @RequestParam Map<String, String> map) {
		ModelAndView mav = new ModelAndView();
		mav.addObject("subject", map.get("subject"));
		mav.addObject("fileName", map.get("fileName"));
		mav.addObject("startdate", map.get("startdate"));
		mav.addObject("enddate", map.get("enddate"));
		mav.setViewName("/resources/main/index");
		mav.addObject("display", "/resources/myblog/writeBlog2.jsp");
		return mav;
	}

	/* 작성한 글 저장 */
	@ResponseBody
	@RequestMapping(value = "save", method = { RequestMethod.POST })
	public void saveWriteBlog(HttpSession session, BlogBoard blogBoard) {
		blogBoard.setNickname((String) session.getAttribute("nickname"));
		blogBoard.setEmail((String) session.getAttribute("memEmail"));
		blogBoard.getContent();
//		map.put("nickname", (String) session.getAttribute("nickname"));
//		map.put("email", (String) session.getAttribute("memEmail"));
//		String content = map.get("content");
		String content = blogBoard.getContent();

		myblogServiceImpl.insertWriteBlog(blogBoard);
//		if (map.get("hashtag") != null) {
//			hashtagService.insertHashTag(map.get("hashtag"));
//		}
	}

	@RequestMapping(value = "imageUpload", method = { RequestMethod.POST })
	@ResponseBody
	public ModelAndView handleFileUpload(@RequestParam("file") MultipartFile file) throws IOException {
		UUID uid = UUID.randomUUID();
		String fileName=uid.toString() + "_" + file.getOriginalFilename();
		String filePath = "E:\\spring\\gihwan\\morip\\morip\\src\\main\\webapp\\storage";
		String filePath2 = "E:\\spring\\gihwan\\.metadata\\.plugins\\org.eclipse.wst.server.core\\tmp0\\wtpwebapps\\morip\\storage";
		File file1 = new File(filePath,fileName);
		File file2 = new File(filePath2,fileName);
		try {
			FileCopyUtils.copy(file.getInputStream(), new FileOutputStream(file1));
			FileCopyUtils.copy(file.getInputStream(), new FileOutputStream(file2));
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		ModelAndView mav = new ModelAndView();
		mav.addObject("url", "../storage/" + file1.getName());
		mav.addObject("fileName" + fileName);
		mav.setViewName("jsonView");
		try {
		} catch (Exception e) {
			e.printStackTrace();
		}
		return mav;
	}

	// *********************view 부분*****************************
	@RequestMapping(value = "view", method = RequestMethod.GET)
	public ModelAndView view(@RequestParam(value = "seq") String seq, HttpSession session,
			@CookieValue(value = "memHit", required = false) Cookie cookie, HttpServletResponse response) {
		// 쿠키 - 조회수 증가
		if (cookie != null) {
			myblogServiceImpl.boardHit(seq); // 조회수 증가

			// 쿠키삭제
			cookie.setMaxAge(0);
			cookie.setPath("/");
			response.addCookie(cookie);
		}
		BlogBoard myblogDTO = myblogServiceImpl.viewPage(seq);
		Member memberDTO = myblogServiceImpl.loadMember(myblogDTO.getNickname());
		ModelAndView mav = new ModelAndView();
		mav.addObject("myblogDTO", myblogDTO);
		mav.addObject("memberDTO", memberDTO);
		mav.addObject("nickname", (String) session.getAttribute("nickcname"));
		mav.addObject("seq", seq);
		mav.setViewName("/resources/main/index");
		mav.addObject("display", "/resources/myblog/view.jsp");
		return mav;
	}

	@ResponseBody
	@RequestMapping(value = "deleteBlogBoard", method = RequestMethod.GET)
	public void deleteBlogBoard(@RequestParam Map<String, String> map) {
		myblogServiceImpl.deleteBlogBoard(map);
	}

	@RequestMapping(value = "insertReply", method = { RequestMethod.POST })
	public @ResponseBody void insertReply(HttpSession session, BlogBoard blogBoard) {
		
		blogBoard.setNickname((String) session.getAttribute("nickname"));
		blogBoard.setEmail((String) session.getAttribute("memEmail"));
//		map.put("nickname", (String) session.getAttribute("nickname"));
//		map.put("email", (String) session.getAttribute("memEmail"));
		myblogServiceImpl.insertReply(blogBoard);
	}

	@RequestMapping(value = "loadReply", method = { RequestMethod.POST })
	public ModelAndView loadReply(HttpSession session, @RequestParam(value = "ref") String ref) {
		ModelAndView mav = new ModelAndView();
		List<BlogBoard> list = myblogServiceImpl.loadReply(Integer.parseInt(ref));
		mav.addObject("list", list);
		mav.setViewName("jsonView");
		return mav;
	}

	@RequestMapping(value = "selectReply", method = RequestMethod.GET)
	public ModelAndView selectReply(@RequestParam(value = "seq") String seq) {
		BlogBoard myblogDTO = myblogServiceImpl.viewPage(seq);
		ModelAndView mav = new ModelAndView();
		mav.addObject("myblogDTO", myblogDTO);
		mav.setViewName("jsonView");
		return mav;
	}

	@RequestMapping(value = "updateReply", method = { RequestMethod.GET })
	public @ResponseBody void updateReply(HttpSession session,BlogBoard blogBoard) {
		System.out.println("asdfasdfasdfas");
		myblogServiceImpl.updateReply(blogBoard);
	}

	@RequestMapping(value = "boardWriteCheck", method = RequestMethod.POST)
	@ResponseBody
	public ModelAndView boardWriteCheck(BlogBoard blogBoard, HttpSession session) {
		BlogBoard myblogDTO = myblogServiceImpl.boardWriteCheck(blogBoard.getId());
		ModelAndView mav = new ModelAndView();
		mav.addObject("memEmail", (String) session.getAttribute("memEmail"));
		mav.addObject("myblogDTO", myblogDTO);
		mav.setViewName("jsonView");
		return mav;
	}

	@RequestMapping(value = "like", method = RequestMethod.POST)
	@ResponseBody
	public void like(@RequestParam Map<String, String> map) {
		myblogServiceImpl.like(map);
	}

	@RequestMapping(value = "unlike", method = RequestMethod.POST)
	@ResponseBody
	public void unlike(@RequestParam Map<String, String> map) {
		myblogServiceImpl.unlike(map);
	}

	@RequestMapping(value = "likeCheck", method = RequestMethod.POST)
	@ResponseBody
	public ModelAndView likeCheck() {
		List<UserLike> list = myblogServiceImpl.likeCheck();
		ModelAndView mav = new ModelAndView();
		mav.addObject("list", list);
		mav.setViewName("jsonView");
		return mav;
	}

	@RequestMapping(value = "likeViewCheck", method = RequestMethod.POST)
	@ResponseBody
	public ModelAndView likeViewCheck(@RequestParam Map<String, String> map, HttpSession session) {
		String memEmail = (String) session.getAttribute("memEmail");
		map.put("memEmail", memEmail);
		UserLike likeDTO = myblogServiceImpl.likeViewCheck(map);
		ModelAndView mav = new ModelAndView();
		mav.addObject("likeDTO", likeDTO);
		mav.addObject("memEmail", memEmail);
		mav.setViewName("jsonView");
		return mav;
	}

	@RequestMapping(value = "likeSize", method = RequestMethod.POST)
	@ResponseBody
	public ModelAndView likeSize(@RequestParam Map<String, String> map) {
		int likeSize = myblogServiceImpl.likeSize(map);
		ModelAndView mav = new ModelAndView();
		mav.addObject("likeSize", likeSize);
		mav.setViewName("jsonView");
		return mav;
	}

	@RequestMapping(value = "likeListSize", method = RequestMethod.POST)
	@ResponseBody
	public ModelAndView likeListSize() {
		List<BlogBoard> list = myblogServiceImpl.likeListSize();
		ModelAndView mav = new ModelAndView();
		mav.addObject("list", list);
		mav.setViewName("jsonView");
		return mav;
	}

	@RequestMapping(value = "follow", method = RequestMethod.POST)
	@ResponseBody
	public void follow(@RequestParam Map<String, String> map) {
		myblogServiceImpl.follow(map);
	}

	@RequestMapping(value = "unfollow", method = RequestMethod.POST)
	@ResponseBody
	public void unfollow(@RequestParam Map<String, String> map) {
		myblogServiceImpl.unfollow(map);
	}

	@RequestMapping(value = "followCheck", method = RequestMethod.POST)
	@ResponseBody
	public ModelAndView followCheck(Follow follow, HttpSession session) {
		Follow followDTO = myblogServiceImpl.followCheck(follow);
		ModelAndView mav = new ModelAndView();
		mav.addObject("followDTO", followDTO);
		mav.addObject("email", "ka28@naver.com");
//		mav.addObject("email", (String) session.getAttribute("memEmail"));
		mav.setViewName("jsonView");
		return mav;
	}

	@RequestMapping(value = "followClick", method = RequestMethod.POST)
	@ResponseBody
	public ModelAndView followClick(@RequestParam String email) {
		List<Follow> list = myblogServiceImpl.followClick(email);
		ModelAndView mav = new ModelAndView();
		mav.addObject("list", list);
		mav.setViewName("jsonView");
		return mav;
	}

	@RequestMapping(value = "followingClick", method = RequestMethod.POST)
	@ResponseBody
	public ModelAndView followingClick(@RequestParam String follow_email) {
		List<Follow> list = myblogServiceImpl.followingClick(follow_email);
		ModelAndView mav = new ModelAndView();
		mav.addObject("list", list);
		mav.setViewName("jsonView");
		return mav;
	}

	@RequestMapping(value = "followerSize", method = RequestMethod.POST)
	@ResponseBody
	public ModelAndView followerSize(@RequestParam String follow_email) {
		int size = myblogServiceImpl.followerSize(follow_email);
		ModelAndView mav = new ModelAndView();
		mav.addObject("size", size);
		mav.setViewName("jsonView");
		return mav;
	}

	@RequestMapping(value = "followingSize", method = RequestMethod.POST)
	@ResponseBody
	public ModelAndView followingSize(@RequestParam String email) {
		int size = myblogServiceImpl.followingSize(email);
		ModelAndView mav = new ModelAndView();
		mav.addObject("size", size);
		mav.setViewName("jsonView");
		return mav;
	}

	@RequestMapping(value = "replySize", method = RequestMethod.POST)
	@ResponseBody
	public ModelAndView replySize(@RequestParam String seq) {
		int size = myblogServiceImpl.replySize(seq);
		ModelAndView mav = new ModelAndView();
		mav.addObject("size", size);
		mav.setViewName("jsonView");
		return mav;
	}
//	
//	@RequestMapping(value = "/myblog/loadHashtagList", method = { RequestMethod.POST })
//	public ModelAndView loadHashtagList(@RequestParam(value = "seq") String seq) {
//		ModelAndView mav = new ModelAndView();
//		List<HashtagDTO> list = myblogService.loadHashtag(seq);
//		mav.addObject("list", list);
//		mav.setViewName("jsonView");
//		return mav;
//	}
//
//	/**********************************
//	 * modifyForm.jsp
//	 **************************************/
	@RequestMapping(value = "/myblog/modifyForm", method = RequestMethod.GET)
	public ModelAndView modifyForm(@RequestParam(value = "seq") String seq, HttpSession session) {
		BlogBoard myblogDTO = myblogServiceImpl.viewPage(seq);
		ModelAndView mav = new ModelAndView();
		mav.addObject("myblogDTO", myblogDTO);
		mav.addObject("nickname", (String) session.getAttribute("nickcname"));
		mav.addObject("seq", seq);
		mav.setViewName("/resources/main/index");
		mav.addObject("display", "/resources/myblog/modifyForm.jsp");
		return mav;
	}

	/* 작성한 글 저장 */
	@RequestMapping(value = "modify", method = { RequestMethod.POST })
	public @ResponseBody void modify(HttpSession session, BlogBoard blogBoard)
			throws UnsupportedEncodingException {
		blogBoard.setNickname((String) session.getAttribute("nickname"));
		blogBoard.setEmail((String) session.getAttribute("memEmail"));
//		map.put("nickname", (String) session.getAttribute("nickname"));
//		map.put("email", (String) session.getAttribute("memEmail"));
//		String content = map.get("content");
		myblogServiceImpl.modifyBoard(blogBoard);
		//해쉬태그 저장
//		String hashtag = map.get("hashtag");
//		myblogServiceImpl.modifyHashtag(Integer.parseInt(map.get("seq")), hashtag);
	}
//	
//	/* 미리보기 preview.jsp */
//	@RequestMapping(value = "/myblog/preview", method = RequestMethod.GET)
//	public ModelAndView preview(HttpSession session, @RequestParam Map<String, String> map) {
//		MemberDTO memberDTO = memberService.checkNickname((String)session.getAttribute("nickname"));
//		ModelAndView mav = new ModelAndView();
//		mav.addObject("startdate", map.get("startdate"));
//		mav.addObject("enddate", map.get("enddate"));
//		mav.addObject("subject", map.get("subject"));
//		mav.addObject("backgroundImg", map.get("backgroundImg"));
//		mav.addObject("memberDTO", memberDTO);
//		mav.setViewName("/resources/myblog/preview");
//		return mav;
//	}
//
//	// 베스트작가 가져오기
//	@RequestMapping(value="/myblog/bestWriter", method=RequestMethod.POST)
//	@ResponseBody
//	public ModelAndView bestWriter() {
//		//베스트작가 가져오기
//		List<String> list = myblogService.bestWriter();
//		//베스트작가의 정보 불러오기
//		MemberDTO memberDTO = memberService.getMember2(list.get(0));			
//		ModelAndView mav = new ModelAndView();		
//		mav.addObject("memberDTO", memberDTO);
//		mav.setViewName("jsonView");
//		return mav;
//	}
//	
//	// 베스트작가의 베스트글 3개 가져오기
//	@RequestMapping(value="/myblog/bestTrip", method=RequestMethod.POST)
//	@ResponseBody
//	public ModelAndView bestTrip(@RequestParam String nickname) {			
//		Map<String, String> map = new HashMap<String, String>();
//		map.put("nickname", nickname);			
//		map.put("startNum", "1");
//		map.put("endNum", "3");			
//		//베스트글 3개 가져오기
//		List<MyblogDTO> list = myblogService.bestTrip(map);			
//		ModelAndView mav = new ModelAndView();	
//		mav.addObject("list", list);
//		mav.setViewName("jsonView");
//		return mav;
//	}
}
