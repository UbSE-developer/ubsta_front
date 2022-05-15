import React, { Fragment } from 'react';
import styled from "styled-components";
import phoneImage from "../../assets/images/phone.png";
import loginLogo from "../../assets/images/logo.png"
import loginAnimate1 from "../../assets/images/loginAnimate1.png";
import loginAnimate2 from "../../assets/images/loginAnimate2.png";
import loginAnimate3 from "../../assets/images/loginAnimate3.png";
import loginAnimate4 from "../../assets/images/loginAnimate4.png";
import Footer from '../common/Footer';
import FaceBookImage from "../../assets/images/facebook.png";


const MainDiv = styled.div`
    position: relative;
`

const LoginArticle = styled.article`
    text-align: center; 
    margin: 32px auto 0;
    max-width: 935px;
    width: 100%;
    padding-bottom: 32px;
    display:flex;
    
`

const ImageDiv = styled.div`
    align-self: center;
    background-position: -46px 0;
    background-size: 468.32px 634.15px;
    background-image: url(${phoneImage});
    height: 581.15px;
    margin-bottom: 12px;
    margin-right: 32px;
    margin-left: 78px;
    width: 42%;
`

const ImageAnimate = styled.div`
    height: 538.84px;
    position: absolute;
    width: 250px;
`

const LoginDiv = styled.div`
    margin-top: 12px;
    border: 1px solid rgba(var(--b6a,219,219,219),1);
    background-color: rgba(var(--d87,255,255,255),1);
    border-radius: 1px;
    align-items: center;
    margin: -5 0 0 -30px;
    padding: 10px 0;
    width: 38%;
    height: 100%;
`

const LoginInput = styled.input`
    border: 1px solid rgba(var(--ca6,219,219,219),1);
    background: rgba(var(--b3f,250,250,250),1);
    align-items: center;
    color: rgba(var(--f52,142,142,142),1);
    font-size: 12px;
    height: 36px;
    left: 8px;
    line-height: 36px;
    width: 70%;
    margin-bottom: 5px;
    padding-left: 10px;
    
`

const LoginButton = styled.button`
    background-color: #0095f6;
    color:white;
    font-weight: bold;
    border: 1px solid transparent;
    width: 75%;
    font-size: 14px;
    height: 36px;
    padding: 5px 9px;
    border-radius: 5px;
    margin-top: 10px;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
    
`

const BlankDiv = styled.div`
    font-size: 13px;
    height: 36px;
    width: 100%;
    font-weight: bold;
    color: #8e8e8e;
    text-align: center;
    margin-top: 15px;
    align-items: center;
` 

const FaceBookLink = styled.a`
    font-size: 14px;
    color: #385185;
    margin-left: 10px;
    font-weight: bold;
`

const PassWorkLink = styled.a`
    color: #00376b;
    font-size: 12px;
`

const imgAniStyle = {
    margin : '26px 113px'
}

const imgStyle = {
    margin: '35px'
}

let index = 0;   
    window.onload = function(){
        slideShow();
    }

const slideShow = () => {
    let i;
    let x = document.getElementsByClassName("slice");

    for(i = 0; i < x.length; i++){
        x[i].style.display = "none"
    }

    index++;

    if(index > x.length){
        index = 1;
    }

    x[index-1].style.display = "block";  

    setTimeout(slideShow, 3000); 
} 


const Login = () => {
    return (
        <Fragment>
            <MainDiv>
                <LoginArticle>
                    <ImageDiv>
                        <ImageAnimate>
                            <img class='slice' src={loginAnimate1} style={imgAniStyle}/>
                            <img class='slice' src={loginAnimate2} style={imgAniStyle}/>
                            <img class='slice' src={loginAnimate3} style={imgAniStyle}/>
                            <img class='slice' src={loginAnimate4} style={imgAniStyle}/>
                        </ImageAnimate>
                    </ImageDiv>
                    <LoginDiv>
                        <img src={loginLogo} style={imgStyle} />
                        <LoginInput placeholder={"전화번호, 사용자 이름 또는 이메일"}/>
                        <LoginInput placeholder={"비밀번호"}/>
                        <LoginButton>로그인</LoginButton>
                        <BlankDiv>ㅡㅡㅡㅡㅡㅡㅡㅡㅡ 또는 ㅡㅡㅡㅡㅡㅡㅡㅡㅡ</BlankDiv>
                        <img src={FaceBookImage} width='18px' />
                        <FaceBookLink>FaccBook으로 로그인</FaceBookLink><br/><br/>
                        <PassWorkLink>비밀번호를 잊으셨나요?</PassWorkLink>
                    </LoginDiv>
                </LoginArticle>
            </MainDiv>
            <Footer/>
        </Fragment>
    );
};

export default Login;