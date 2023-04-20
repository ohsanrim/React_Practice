import React, {useEffect, useRef} from "react";
import "./login.css";

function Login(){
    const otpModal = () => {
        console.log("로그인 시도...");
    }

    const handleEnter = (e) => {
        if (e.key === "Enter") {
            otpModal();
        }
      };
    return <form role="form" id="validatorForm" data-toggle="validator" action="<%=request.getContextPath()%>/login" method="POST">
    <div className="login_cont">
        <div className="r_cont">
            <p className="tit">로그인</p>
            <p className="txt">서비스를 이용 하시려면 로그인을 해 주십시오.</p>
            <ul>
                <li><input type="text" id="username" name="username" className="username" placeholder="아이디" maxLength="20" required/></li>
                {/* <li><input type="password" name="password" className="password" id="password" placeholder="비밀번호" onKeyDown="javascript:if(event.keyCode==13){otpModal();}" required/></li> */}
                <li><input type="password" name="password" className="password" id="password" placeholder="비밀번호" onKeyDown={handleEnter} required/></li>
            </ul>
            {/* <p className="login_re">${ sessionScope["SPRING_SECURITY_LAST_EXCEPTION"].message }</p>
            <c:remove var="SPRING_SECURITY_LAST_EXCEPTION" scope="session" /> */}
            <div className="login_btn_wrap">
                <button type="button" id="login_button" onClick={otpModal} >로그인</button>
            </div>
        </div>
        
    </div>
    <p className="production_version" >Product Version V1.1</p>
    <p className="copyright">Copyright 2021 by Ksign co., Ltd. All rights reserved</p>
    
</form>;

}

export default Login