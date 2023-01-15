
$("document").ready(function(){

    var height=$(window).height(),
        count=0,
        wc=0,
        pos=0;

    var passup=false,
        passdown=false;

    var wwl=$(".wrap .web .web_wrap .mockup li").length-1;

    //BASIC OPTION
    passup=true;
    $(".wrap .web .web_wrap .txt li").eq(0).show();
    $(".wrap .web .web_wrap #link_guide li").eq(0).show();

    //PROGRESSBAR EVENT
    var bar_aside=new ProgressBar.Circle("#bar_aside",{
        strokeWidth:5,
        duration: 1,
        color: "#754775",
        trailWidth: 5,
        trailColor: "#c4bdc5"
    })

    if($(window).width() >1280) { wideWindow(); }
    else { smallSize(); }
    //RESIZE EVENT
    /*
    $(window).resize(function(){
      if($(window).width() <1280) {
        height=$(this).height();
        $("html, body").stop().animate({
            scrollTop: height * count
        },1000)
       }
    })
*/
//모바일버전
function smallSize(){
  $('#selfie').hide();
  $('.mobile_bars').show();
  $('.sub_contact_wrapper').hide();
}
//인터넷 버전
function wideWindow(){
  $('#selfie').show();
  $('.mobile_bars').hide();
  $('.sub_contact_wrapper').show();
}
  $(window).resize(function(){
      height=$(this).height();
      $("html, body").stop().animate({
          scrollTop: height * count
      },1000)
      //햄버거 네비게이션
      if($(window).width() >1280) { wideWindow(); }
      else { smallSize(); }

  })
  //모바일 네비바 클릭 시
  $('.mobile_bars').click(function(){
    $('nav').slideToggle();
  });
  function scrollevent(pos){
    //ASIDE EVENT
    var current=(pos / (height * 5));
    bar_aside.animate(current);
    if(pos!=0){
        $("aside #bar_aside").addClass("op")
        $("aside .arrow").addClass("rotate")
    }else{
        $("aside #bar_aside").removeClass("op")
        $("aside .arrow").removeClass("rotate")
    }

    //NAV HIDE SHOW EVENT

  if(pos>=height){
    if($(window).width() >1280) {
          $("nav").fadeIn(500);
    }
  }else{
          $("nav").fadeOut(500);
  }
  }
    //WHEEL EVENT
    var wheeltime=false;

    //TOUCH SWIPE EVENT
    $("body").swipe({
        swipe: function(event, direction){
            if(direction=="up"||direction=="left"){
                if(count==2){
                    wc++;
                    if(wc>wwl) wc=wwl;
                    //WEB PLAY
                    $(".wrap .web .web_wrap .mockup li").eq(wc).addClass("select")
                    $(".wrap .web .web_wrap .mockup li").eq(wc+1).removeClass("select")
                    $(".wrap .web .web_wrap .txt li").hide().eq(wc).show()
                    $(".wrap .web .web_wrap #link_guide li").hide().eq(wc).show()
                    //WC OPTION
                    if(wc==0){
                        passup=true;
                    }else{
                        passup=false;
                    }
                    if(wc==wwl){
                        setTimeout(function(){
                            passdown=true;
                        },1000)
                    }else{
                        passdown=false;
                    }
                    if(passdown==false) return;
                }
                count++;
                if(count>4) count=4;
            }else if(direction=="down"||direction=="right"){
                if(count==2){
                    wc--;
                    if(wc<0) wc=0;
                    //WEB PLAY
                    $(".wrap .web .web_wrap .mockup li").eq(wc).addClass("select")
                    $(".wrap .web .web_wrap .mockup li").eq(wc+1).removeClass("select")
                    $(".wrap .web .web_wrap .txt li").hide().eq(wc).show()
                    $(".wrap .web .web_wrap #link_guide li").hide().eq(wc).show()
                    //WC OPTION
                    if(wc==0){
                        setTimeout(function(){
                            passup=true;
                        },1000)
                    }else{
                        passup=false;
                    }
                    if(wc==wwl){
                        passdown=true;
                    }else{
                        passdown=false;
                    }
                    if(passup==false) return;
                }
                count--;
                if(count<0) count=0;
            }

            //wheel count 값에 따른 scrollTop 지정
            $("html, body").stop().animate({
                scrollTop: height * count
            },1000)

            //NAV
            $("nav ol li").removeClass("pos").eq(count-1).addClass("pos")
        },
        excludedElements: $(".guide")
    });

    $(window).on("mousewheel DOMMousewheel",function(e){

      //pos값 제어
        var delta=e.originalEvent.wheelDelta;

        if(wheeltime==true){
            return;
        }
        setTimeout(function(){
            wheeltime=false;
        },1000)
        wheeltime=true;

        //COUNT ++ --
        if(delta<0){
            count++;
            if(count>5) count=5;
        }else{
            count--;
            if(count<0) count=0;
        }

        //COUNT SCROLL
        $("html, body").stop().animate({
            scrollTop: height * count
        },1000)

        //NAV
        $("nav ol li").removeClass("pos").eq(count-1).addClass("pos")
        //scrollEvent 실핸
        pos=height * (count);
        scrollevent(pos);
        //divevent 실행
        if(count==1) {
          typingStart();
          divEvent(1);
        }
        if(count==3) {
          slideLeft();
        }
        if(count==4){
          slideRight();
        }
    })



    //KEY EVENT
    var keytime=false;
    $(window).keydown(function(e){
        //13 : enter
        //27 : esc
        //37 : ←
        //38 : ↑
        //39 : →
        //40 : ↓
        //48~57 : left 0~9
        //96~105 : right 0~9
      if($(window).width() >1280) {
        if(keytime==true){
            return;
        }
        setTimeout(function(){
            keytime=false;
        },1000)
        keytime=true;

        //COUNT ++ --
        if(e.keyCode==40||e.keyCode==39){

            count++;
            if(count>5) count=5;
        }
        if(e.keyCode==38||e.keyCode==37){

            count--;
            if(count<0) count=0;
        }

        //wheel count 값에 따른 scrollTop 지정
        $("html, body").stop().animate({
            scrollTop: height * count
        },1000)

        //NAV
        $("nav ol li").removeClass("pos").eq(count-1).addClass("pos")

        //scrollEvent 실핸
        console.log(count);
        pos=height * (count);
        scrollevent(pos);

        //GUIDE CLOSE
        if(e.keyCode==27){
            close_guide();
        }
        if(count==1) divEvent(1);
        if(count==3) {
          slideLeft();
        }
        if(count==4){
          slideRight();
        }
      }
    })

    //NAV CLICK EVENT
    $("nav ol li").eq(0).addClass("pos")
    $("nav ol li").click(function(){
        count=$(this).index() + 1;
        $("html, body").stop().animate({
            scrollTop: height * count
        },0)
        pos=height * (count);
        scrollevent(pos);

        $("nav ol li").removeClass("pos").eq(count-1).addClass("pos")
        if(count==3||count==4){
            wc=wwl;
            $(".wrap .web .web_wrap .mockup li").addClass("select")
            $(".wrap .web .web_wrap .txt li").hide().eq(wwl).show()
        }else{
            wc=0;
            $(".wrap .web .web_wrap .mockup li").removeClass("select")
            $(".wrap .web .web_wrap .txt li").hide().eq(0).show()
        }
        if(count==1) divEvent(1);
        if(count==3) {
          slideLeft();
        }
        if(count==4){
          slideRight();
        }
    })
    //로딩화면 꾸미기
    $(document).ready(function() {
      $('body').on('scroll touchmove mousewheel', function(e) {
         e.preventDefault();
         e.stopPropagation();
         return false;
      });
      $('aside').hide();
      setTimeout(function() {
           $('body').off('scroll touchmove mousewheel');
           $(".loading_back").fadeOut();
           $('aside').show();
           /*
           $('div').removeClass('loading_back');*/
       }, 3000);
     });
     //

     //arrow click EVENT
     $('.arrow').click(function(){
       if(count>=1){
         count=0;
         $("html, body").stop().animate({
             scrollTop: height * 0
         },1000)
       } else {
         count=1;
         $("html, body").stop().animate({
             scrollTop: height * count
         },1000)
       }
       //scrollEvent 실핸

       pos=height * (count);
       scrollevent(pos);

     });

     //스크롤 시 div 나타나는 이펙트
     function divEvent(num){
       if(num==1) $("#scrollEvent1").fadeIn(3000);
     }
     $(document).ready(function(){
       //div 숨기기
       $("#slideLeft").css('opacity','0');
       $("#slideRight").css('opacity','0');
       $("#scrollEvent1").hide();
     });
     //사용자 애니메이션
     function slideLeft(){
       $("#slideLeft").animate({
          marginLeft: "100px",
          marginRight: "100px",
          opacity: 1
        },
        2000);
     }
     function slideRight(){
       $("#slideRight").animate({
          marginLeft: "100px",
          marginRight: "100px",
          opacity: 1
        },
        2000);
     }
     //타이핑 기법
     var typingEnd=false;
     function typingStart(){
       if(!typingEnd){
         var typingBool = false;
        var typingIdx=0;
        var typingTxt = $("#typing-txt").val(); // 타이핑될 텍스트를 가져온다
        typingTxt=typingTxt.split(""); // 한글자씩 자른다.
        if(typingBool==false){ // 타이핑이 진행되지 않았다면
           typingBool=true;

           var tyInt = setInterval(typing,110); // 반복동작
         }

         function typing(){
           if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복
             $("#typing").append(typingTxt[typingIdx]); // 한글자씩 이어준다.
             typingIdx++;
           } else{
             clearInterval(tyInt); //끝나면 반복종료
             typingEnd=true;
           }
         }
       }
     }


     //모달창css
     $(document).ready(function(){
       $('figure').click(function(){
         $('.modal-wrapper').toggleClass('open');
        $('.page-wrapper').toggleClass('blur-it');
         return false;
       });
       $('.trigger').on('click', function() {
         $('.modal-wrapper').toggleClass('open');
         $('.page-wrapper').toggleClass('blur-it');
          return false;
       });
     });
     // contact sendBtn CLICK
     $('.sendBtn').click(function(){
       var $firstName=$('.contact_form .firstName');
       var $lastName=$('.contact_form .lastName');
       var $email=$('.contact_form .email input');
       var $message=$('.contact_form .message input');
       //유효성검사 진행
       if($firstName.val()==""){ alert("성(FirstName)을 입력해 주세요!"); $firstName.focus(); }
       else if($lastName.val()==""){ alert("이름(Last Name)을 입력해 주세요!"); $lastName.focus(); }
       else if($email.val()==""){ alert("이메일 주소를 입력해 주세요!"); $email.focus(); }
       else if($message.val()==""){ alert("메세지를 입력해 주세요!"); $message.focus(); }
       else {
         alert("전송되었습니다!");
         $firstName.val("");
         $lastName.val("");
         $email.val("");
         $message.val("");
       }
     });
})
