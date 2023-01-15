<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en-US" dir="ltr">

  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">


    <!-- ===============================================-->
    <!--    Document Title-->
    <!-- ===============================================-->
    <title>Harin Kwak : Java & Server Developer</title>


    <!-- ===============================================-->
    <!--    Favicons-->
    <!-- ===============================================-->
    <link rel="apple-touch-icon" sizes="180x180" href="<%=request.getContextPath()%>/resources/assets/img/favicons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="<%=request.getContextPath()%>/resources/assets/img/favicons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="<%=request.getContextPath()%>/resources/assets/img/favicons/favicon-16x16.png">
    <link rel="shortcut icon" type="image/x-icon" href="<%=request.getContextPath()%>/resources/assets/img/favicons/favicon.ico">
    <link rel="manifest" href="<%=request.getContextPath()%>/resources/assets/img/favicons/manifest.json">
    <meta name="msapplication-TileImage" content="<%=request.getContextPath()%>/resources/assets/img/favicons/mstile-150x150.png">
    <meta name="theme-color" content="#ffffff">


    <!-- ===============================================-->
    <!--    Stylesheets-->
    <!-- ===============================================-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Baloo+Bhaijaan+2:wght@400;500;600;700&amp;family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,300&amp;display=swap" rel="stylesheet">
    <link href="<%=request.getContextPath()%>/resources/assets/css/theme.css" rel="stylesheet" />
    <link href="<%=request.getContextPath()%>/resources/assets/css/user.css" rel="stylesheet" />
    
    <!--font-family: 'Black Han Sans', sans-serif;-->
    <link href="https://fonts.googleapis.com/css?family=Black+Han+Sans&display=swap" rel="stylesheet">
    <!--font-family: 'Noto Sans KR', sans-serif;-->

    <link rel="stylesheet" href="<%=request.getContextPath()%>/resources/assets/css/portfolio.css">

    <!-- Font Awesome icons (free version)-->
    <script src="https://use.fontawesome.com/releases/v5.13.0/js/all.js" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
   
    <script src="<%=request.getContextPath()%>/resources/assets/js/portfolio.js"></script>
	<style>
	
	#home {
		background-color: #e8eaf6;
	}
	.bg-10000 {
   		background-color: #9499b7 !important;
	}
	.bg-10000 h2, .bg-10000 .text-5000 {
		color: #e8eaf6
	}
	.main_image {
		width: 50%;
	    height: 100%;
	    position: absolute;
	    display: none;
    	justify-content: center;
	}
	.skill_images {
		height:100px;
		width:auto;
	}
	@media all and (min-width: 960px) {
	  .main_image {
			width: 50%;
		    height: 100%;
		    position: absolute;
		    display: flex;
	    	justify-content: center;
		}
	}
	
	</style>
  </head>


  <body>

    <!-- ===============================================-->
    <!--    Main Content-->
    <!-- ===============================================-->
    <%@ include file="../header.jsp" %>
    
    <main class="main" id="top">
      
      <section class="py-7 py-lg-10" id="home">
        <%-- <div class="bg-holder bg-size" style="background-image:url(<%=request.getContextPath()%>/resources/assets/img/illustration/2.png);background-position:left top;background-size:contain;"> --%>
        <div class="bg-holder bg-size" style="background-position:left top;background-size:contain;">
        </div>
        <!--/.bg-holder-->
<%-- <div class="bg-holder d-none d-xxl-block hero-bg" style="background-image:url(<%=request.getContextPath()%>/resources/assets/img/illustration/1.png);background-position:right top;background-size:contain;"> --%>
        <div class="bg-holder d-none d-xxl-block hero-bg" style="background-position:right top;background-size:contain;">
        </div>
        <!--/.bg-holder-->

        <div class="container">
          <div class="main_image">
          	<img src="<%=request.getContextPath()%>/resources/assets/img/profile.jpg" style="height:100%; border-radius: 50%;" />
          </div>
          <div class="row align-items-center h-100 justify-content-center justify-content-lg-end">
          	
            <div class="col-md-9 col-xxl-5 text-md-start text-center py-6 pt-8">
              <h1 class="fs-4 fs-md-5 fs-xxl-4" data-zanim-xs='{"delay":0.3}' data-zanim-trigger="scroll">Hello!</h1>
              <p class="fs-1" data-zanim-xs='{"delay":0.5}' data-zanim-trigger="scroll">부족한 점을 항상 배우려 노력하는<span id="point">"꾸준함"</span> 뿐만이 아닌, 항상 끊임없이 새로운 것을 배우고 경험하고자 하는 <span id="point">"만능 에너자이저" 개발자</span> 곽하린 입니다.</p>
              <div class="d-flex flex-column flex-sm-row justify-content-center justify-content-md-start mt-5" data-zanim-xs='{"delay":0.5}' data-zanim-trigger="scroll"><a class="btn btn-sm btn-primary me-1" id="profile_btn" role="button">Profile</a><a class="btn btn-sm btn-default" href="<%=request.getContextPath()%>/contract" role="button">Questions? Contact Me!<i class="fas fa-arrow-right ms-2"></i></a></div>
            </div>
          </div>
        </div>
      </section>


     




      <!-- ============================================-->
      <!-- <section> begin ============================-->
      <section id="customers">

        <div class="container">
          <h1 class="text-center display-5 fw-semi-bold" data-zanim-xs='{"delay":0.3}' data-zanim-trigger="scroll"> Skill </h1>
          <div class="row mb-4 mt-6" data-zanim-xs='{"delay":0.3}' data-zanim-trigger="scroll">
            <div class="col-md-6 col-lg-3 text-center"><img class="skill_images" src="<%=request.getContextPath()%>/resources/images/skill_images/1.png" alt="Dashboard" />
              <h4 class="mt-3 lh-base">Java</h4>
            </div>
           	<div class="col-md-6 col-lg-3 text-center"><img class="skill_images" src="<%=request.getContextPath()%>/resources/images/skill_images/2.png" alt="Dashboard" />
              <h4 class="mt-3 lh-base">HTML</h4>
            </div>
            <div class="col-md-6 col-lg-3 text-center"><img class="skill_images" src="<%=request.getContextPath()%>/resources/images/skill_images/3.png" alt="Dashboard" />
              <h4 class="mt-3 lh-base">CSS</h4>
            </div>
            <div class="col-md-6 col-lg-3 text-center"><img class="skill_images" src="<%=request.getContextPath()%>/resources/images/skill_images/4.png" alt="Dashboard" />
              <h4 class="mt-3 lh-base">Javascript</h4>
            </div>
          </div>
          <div class="row mb-6" data-zanim-xs='{"delay":0.3}' data-zanim-trigger="scroll">
            <div class="col-md-6 col-lg-3 text-center"><img class="skill_images" src="<%=request.getContextPath()%>/resources/images/skill_images/5.png" alt="Dashboard"/>
              <h4 class="mt-3 lh-base">MariaDB</h4>
            </div>
            <div class="col-md-6 col-lg-3 text-center"><img class="skill_images" src="<%=request.getContextPath()%>/resources/images/skill_images/6.png" alt="Dashboard"/>
              <h4 class="mt-3 lh-base">CouchDB</h4>
            </div>
            <div class="col-md-6 col-lg-3 text-center"><img class="skill_images" src="<%=request.getContextPath()%>/resources/images/skill_images/7.png" alt="Dashboard"/>
              <h4 class="mt-3 lh-base">Oracle</h4>
            </div>
            <div class="col-md-6 col-lg-3 text-center"><img class="skill_images" src="<%=request.getContextPath()%>/resources/images/skill_images/8.png" alt="Dashboard" />
              <h4 class="mt-3 lh-base">linux</h4>
            </div>
          </div>
          <div class="row mb-6" data-zanim-xs='{"delay":0.3}' data-zanim-trigger="scroll">
            <div class="col-md-6 col-lg-3 text-center"><img class="skill_images" src="<%=request.getContextPath()%>/resources/images/skill_images/9.png" alt="Dashboard" />
              <h4 class="mt-3 lh-base">Hyperledger Fabric</h4>
            </div>
            <div class="col-md-6 col-lg-3 text-center"><img class="skill_images" src="<%=request.getContextPath()%>/resources/images/skill_images/10.png" alt="Dashboard" />
              <h4 class="mt-3 lh-base">Docker</h4>
            </div>
            <div class="col-md-6 col-lg-3 text-center"><img class="skill_images" src="<%=request.getContextPath()%>/resources/images/skill_images/11.png" alt="Dashboard"/>
              <h4 class="mt-3 lh-base">Spring Boot</h4>
            </div>
            <div class="col-md-6 col-lg-3 text-center"><img class="skill_images" src="<%=request.getContextPath()%>/resources/images/skill_images/12.png" alt="Dashboard"/>
              <h4 class="mt-3 lh-base">Git</h4>
            </div>
          </div>
          
        </div>
        <!-- end of .container-->

      </section>
      <!-- <section> close ============================-->
      <!-- ============================================-->




      <!-- ============================================-->
      <!-- <section> begin ============================-->
      <section id="work1">
      	<div class="container">
			<!--        work-->
	        <div>
	          <div class="work1_wrapper">
	            <div class="work_info" id="slideLeft">
	              <div class="work_header">
	                <h1>"Cookie Run" Project</h1>
	              </div>
	              <div class="work_skills">
	                <div class="skill_design">java</div>
	                <div class="skill_design">Oracle</div>
	              </div>
	              <div class="work_ex" >
	                모바일 게임인 쿠키런을 PC 버전의 1대1 매칭 시스템으로 구현한 “쿠키런”프로젝트.<br>
	                - 대기실 네트워크 쪽과 게임 구현.<br>
	                - 멀티 스레드를 통해 게임의 프레임을 여러가지로 나누어서 동시 진행이 되도록 구현.<br>
	                - 웹 소켓을 활용하여 실시간으로 대전중인 상대방의 점수를 확인할 수 있게 구현.<br>
	                - 웹소켓을 통한 대기실 시스템 구축 및 랭킹 시스템 구현.
	              </div>
	              <div class="work_gitLink">
	                <img class="gitLink_img hvr-grow" id="gitLink1"  src="https://www.logolynx.com/images/logolynx/23/2334e82ea682a206c57645eb95817e43.png" onclick="window.open('https://github.com/ohsanrim/CookieRun_project', 'Cookie Run github page');">
	                <i class="far fa-file-powerpoint hvr-grow" id="powerPoint_work1" onclick="window.open('<%=request.getContextPath()%>/resources/ppt/cookie_run_project.pdf', 'Cookie Run Project');"></i>
	              </div>
	            </div>
	            <div class="design_container">
	              <ul class="design_wrap">
	                  <li>
	                      <div class="mockup">
	                        <!--<a href="http://www.kimyeju.com/original/mcdelivery.jpg" target="_blank" id="orig0">-->
	                          <a href="#" target="_blank" id="orig0">
	                          <img src="<%=request.getContextPath()%>/resources/images/cookie-run.png" alt="원본 보기"></a>
	                      </div>
	                  </li>
	              </ul>
	            </div>
	          </div>
	        </div>
		  </div>
      </section>
      <!-- <section> close ============================-->
      <!-- ============================================-->
	  <section id="work2">
      	<div class="container">
      		<div class="work1_wrapper">
	      		<div class="design_container">
	              <ul class="design_wrap">
	                  <li>
	                      <div class="mockup">
	                          <!--<a href="http://www.kimyeju.com/original/mcdelivery.jpg" target="_blank" id="orig0">-->
	                          <a href="<%=request.getContextPath()%>/myblog" target="_blank" id="orig0">
	                            <img src="<%=request.getContextPath()%>/resources/images/morip.png" alt="원본 보기"></a>
	                      </div>
	                  </li>
	              </ul>
	            </div>
	      		<div class="work_info" id="slideRight">
	              <div class="work_header">
	                <h1>"MO:RIP" Project</h1>
	              </div>
	              <div class="work_skills">
	                <div class="skill_design">java</div>
	                <div class="skill_design">Oracle</div>
	                <div class="skill_design">Spring</div>
	                <div class="skill_design">Bootstrap</div>
	                <div class="skill_design">jQuery</div>
	                <div class="skill_design">Javascript</div>
	                <div class="skill_design">HTML5</div>
	                <div class="skill_design">CSS3</div>
	                <div class="skill_design">Ajax</div>
	                <div class="skill_design">Spring MVC</div>
	                <div class="skill_design">MyBatis</div>
	                <div class="skill_design">Apache Tomcat</div>
	              </div>
	              <div class="work_ex" >
	                국내의 인스타그램 및 여행노트, VOLO 등의 여행기록사이트와 SNS를 모티브로 제작한 여행기록사이트 “몰입(MO:RIP)” 프로젝트<br>
	                - 마이페이지 디자인 및 기능 구현 <br>
	                - 여행기 작성 페이지 디자인 및 기능 구현 <br>
	                - 관리자 페이지 디자인 <br>
	                - 뷰, 글 수정, 미리보기 페이지 디자인 및 기능 구현 담당<br>
	                - 무한스크롤 구현<br>
	                - Full calendar API, summernote API 을 사용한 글작성 구현 <br>
	              </div>
	              <div class="work_gitLink">
	                <img class="gitLink_img hvr-grow" id="gitLink1"  src="https://www.logolynx.com/images/logolynx/23/2334e82ea682a206c57645eb95817e43.png" onclick="window.open('https://github.com/ohsanrim/morip', 'Cookie Run github page');">
	                <i class="far fa-file-powerpoint hvr-grow" id="powerPoint_work1" onclick="window.open('<%=request.getContextPath()%>/resources/ppt/MORIP_project.pdf', 'Cookie Run Project');"></i>
	              </div>
	            </div>
            </div>
      	</div>
      
      </section>
    </main>
    
        <!-- Modal -->
  <div class="modal-wrapper">
    <div class="modal">
      <div class="head">
        <a class="btn-close trigger" href="#">
          <i class="fa fa-times" aria-hidden="true"></i>
        </a>
      </div>
      <div class="content">
        <div class="myLogo">
          <img src="images/harin3.jpg" alt="">
        </div>
        <div class="myInfo">
          <div class="info name">
            <h4>Name</h4><p>곽하린</p>
          </div>
          <div class="info age">
            <h4>Age</h4><p>23세(1998.02.08)</p>
          </div>
          <div class="info phone">
            <h4>Phone</h4><p>82+ 10-4319-7701</p>
          </div>
          <div class="info blog">
            <h4>Blog</h4><a href="https://blog.naver.com/ka28" target="_blank">www.blog.naver.com/ka28</a>
          </div>
          <div class="info github">
            <h4>Github</h4> <a href="https://github.com/ohsanrim" target="_blank">www.github.com/ohsanrim</a>
          </div>
        </div>
      </div>
    </div>
  </div>
    
    <%@ include file="../footer.jsp" %>

    <!-- ===============================================-->
    <!--    JavaScripts-->
    <!-- ===============================================-->
   
    <script src="<%=request.getContextPath()%>/resources/vendors/bootstrap/bootstrap.min.js"></script>
    
    <script src="<%=request.getContextPath()%>/resources/vendors/is/is.min.js"></script>
    <script src="<%=request.getContextPath()%>/resources/vendors/fontawesome/all.min.js"></script>
    <script src="<%=request.getContextPath()%>/resources/vendors/lodash/lodash.min.js"></script>
    <script src="<%=request.getContextPath()%>/resources/vendors/gsap/gsap.min.js"></script>
    <script src="<%=request.getContextPath()%>/resources/vendors/gsap/customEase.js"></script>
    <script src="<%=request.getContextPath()%>/resources/assets/js/theme.js"></script>
    <script>
    	window.onload = function(){
	    	  console.log("<%=request.getContextPath()%>/resources");
    	  }
    	
    	
    	$('#profile_btn').click(function(){
    		console.log("////////////////////");
            $('.modal-wrapper').toggleClass('open');
            return false;
        });
    	//모달창css
        $(document).ready(function(){
        	console.log("asdadasd");
          
          $('.trigger').on('click', function() {
            $('.modal-wrapper').toggleClass('open');
             return false;
          });
        });
    </script>
    

  </body>

</html>