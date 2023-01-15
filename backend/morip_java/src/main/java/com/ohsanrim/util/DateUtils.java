package com.ohsanrim.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.util.StringUtils;

public class DateUtils {
	
	private static SimpleDateFormat yyyyMMddHHmmss = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	private static SimpleDateFormat yyyyMMdd = new SimpleDateFormat("yyyy-MM-dd");
	
	
	private static SimpleDateFormat yyyyMMddHHmmssNoDelimiter = new SimpleDateFormat("yyyyMMddHHmmss");
	private static SimpleDateFormat yyyyMMddNoDelimiter = new SimpleDateFormat("yyyyMMdd");
	
	public static String yyyyMMdd(Date date) {
		if(date != null) {
			return yyyyMMdd.format(date);
		}
		return "";
	}
	
	public static String yyyyMMddhhmmss(Date date) {
		if(date != null) {
			return yyyyMMddHHmmss.format(date);
		}
		return "";
	}
	
	public static String yyyyMMddhhmmss() {
		return yyyyMMddHHmmss.format(new Date());
	}
	
	
	public static String yyyyMMddhhmmssNoDelimiter() {
		return yyyyMMddHHmmssNoDelimiter.format(new Date());
	}
	
	public static String yyyyMMddNoDelimiter() {
		return yyyyMMddNoDelimiter.format(new Date());
	}
	
	
	public static Date yyyyMMddToDate(String dateStr) {
		try {

			if(!StringUtils.isEmpty(yyyyMMdd)) {
				return yyyyMMdd.parse(dateStr);
			}
			
		}catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	
	public static Date yyyyMMddhhmmssToDate(String dateStr) {
		Date date = new Date();
		
		try {

			if(!StringUtils.isEmpty(yyyyMMddHHmmss)) {
				
				 date = yyyyMMddHHmmss.parse(dateStr);
				 
				 return date;
			}
			
		}catch (ParseException e) {
//			e.printStackTrace();
			return null;
		}catch (Exception e) {
//			e.printStackTrace();
			return null;
		}
		return null;
	}
}