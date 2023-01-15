package com.ohsanrim.controller;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ohsanrim.entity.Member;
import com.ohsanrim.service.MyblogServiceImpl;

@Controller
public class HomeController {
	
	@Autowired
	private MyblogServiceImpl myblogServiceImpl;
	
	@RequestMapping(value = "/home", method=RequestMethod.GET) 
	@ResponseBody 
	public String goHome(HttpServletRequest request) { 
		System.out.println("enter"); return "Hello String Boot"; 
		
	}
	
	@RequestMapping(value = "/", method=RequestMethod.GET) 
	public String dashboard() { 
		return "/dashboard/main"; 
	}
	
	@RequestMapping(value = "/resume", method=RequestMethod.GET) 
	public String resume() { 
		return "/resume/main"; 
	}
	
	@RequestMapping(value = "/projects", method=RequestMethod.GET) 
	public String projects() { 
		return "/projects/main"; 
	}
	
	@RequestMapping(value = "/contract", method=RequestMethod.GET) 
	public String contract() { 
		return "/contract/main"; 
	}
	
	@RequestMapping(value = "/myblog", method=RequestMethod.GET) 
	public String myblog(HttpSession session, Model model, HttpServletResponse response) { 
		System.out.println("myblog enter");
		String nickname="ohsanrim";
		if (nickname != null) {
			Cookie cookie = new Cookie("memHit", "ok");
			cookie.setMaxAge(30 * 60);
			cookie.setPath("/");
			response.addCookie(cookie);// 클라이언트에게 보내기
		}

		// DB 에서 해당 유저에 대한 정보 및 작성한 모든 글 호출.
		Member memberDTO = myblogServiceImpl.loadMember(nickname);
		// 배경 사진이 등록되지 않았을 경우

		if (memberDTO.getImage().equals("0")) {
			// 프로필사진이 비어있을 경우
			memberDTO.setImage("basicUserImg.png");
		} // 배경사진이 비어있을 경우
		if (memberDTO.getBackimage().equals("0")) {
			memberDTO.setBackimage("basicBgImg.jpg");
		}

		model.addAttribute("memberDTO", memberDTO);
		model.addAttribute("pageNickname", nickname);
		model.addAttribute("memEmail", (String) session.getAttribute("memEamil"));
		model.addAttribute("display", "/resources/myblog/mypage.jsp");
		
		return "/myblog/main"; 
	}
}
