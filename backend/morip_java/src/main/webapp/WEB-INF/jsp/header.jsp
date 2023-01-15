<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<style>
	.header_logo {
		display: flex;
	    align-items: center;
	    justify-content: space-between;
	}
	.logo_name_a {
		color: black;
	    cursor: pointer;
	    text-decoration: none;
	}
	.circle_logo {
		width:15px; 
		height:15px; 
		background-color:#ffeb3b;
		border-radius:90px; 
		margin-right: 10px;
		
	}
	
	
</style>
<nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" data-navbar-on-scroll="light">
  <div class="container">
  	
 	<div class="header_logo">
 		<div style="">
 			<div class="circle_logo" style=""></div>
 		</div>
 		<div style="margin-right:20px; color:black; font-size: 20px;">
 			<div class="logo_name_a" onclick="javascript:location.href='<%=request.getContextPath()%>/'">Harin Kwak</div>
 			<!-- Harin Kwak -->
 		</div>
 		<div>Server Developer</div>
 		<!-- <h3 class="header_logo" style="margin-right:10px;">Harin Kwak</h3><h5>Server Developer</h5> -->
 	</div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
    <div class="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto pt-2 pt-lg-0 font-base align-items-center">
        <li class="nav-item"><a class="nav-link px-3" href="<%=request.getContextPath()%>/">Home</a></li>
        <li class="nav-item"><a class="nav-link px-3" href="<%=request.getContextPath()%>/resume">Resume</a></li>
        <li class="nav-item"><a class="nav-link px-3" href="<%=request.getContextPath()%>/projects">Projects</a></li>
        <li class="nav-item"><a class="nav-link px-3" href="<%=request.getContextPath()%>/contract">Contract</a></li>
      </ul>
    </div>
  </div>
</nav>