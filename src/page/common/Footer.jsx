import React from 'react';

import styled from "styled-components";

const FootDiv = styled.div`
    position: relative;
    font-size: 12px;
    margin: -2px 0 -3px;
    line-height: 25px;
    text-align: center;
    color: #8e8e8e; 
`
const LinkDiv = styled.a`
    margin-right: 8px;
    margin-left: 8px;
    margin-bottom: 12px;
    text-decoration: none;
    color: #8e8e8e;
`

const Footer = () => {
    return (
        <FootDiv>
                <LinkDiv href="https://about.facebook.com/meta">Meta</LinkDiv>
                <LinkDiv href="https://about.instagram.com/">소개</LinkDiv>
                <LinkDiv href="https://about.instagram.com/blog/">블로그</LinkDiv>
                <LinkDiv href="https://about.facebook.com/meta">채용 정보</LinkDiv>
                <LinkDiv href="https://help.instagram.com/">도움말</LinkDiv>
                <LinkDiv href="https://developers.facebook.com/docs/instagram">API</LinkDiv>
                <LinkDiv href="https://about.facebook.com/meta">개인정보처리방침</LinkDiv>
                <LinkDiv href="https://help.instagram.com/581066165581870">약관</LinkDiv>
                <LinkDiv href="https://www.instagram.com/directory/profiles/">인기 계정</LinkDiv>
                <LinkDiv href="https://www.instagram.com/directory/hashtags/">해시태그</LinkDiv>
                <LinkDiv href="https://www.instagram.com/explore/locations/">위치</LinkDiv>
                <LinkDiv href="https://www.instagram.com/web/lite/">Instagram Lite</LinkDiv>
                <br/>  
                <LinkDiv href="https://www.instagram.com/topics/dance-and-performance/">댄스</LinkDiv>
                <LinkDiv href="https://www.instagram.com/topics/food-and-drink/">식음료</LinkDiv>
                <LinkDiv href="https://www.instagram.com/topics/home-and-garden/">집 및 정원</LinkDiv>
                <LinkDiv href="https://www.instagram.com/topics/music/">음악</LinkDiv>
                <LinkDiv href="https://www.instagram.com/topics/visual-arts/">시각 예술</LinkDiv>
                <br/><br/>
                한국어 ∨ &nbsp;&nbsp;&nbsp;© 2022 Instagram from Meta
            </FootDiv>
    );
};

export default Footer;