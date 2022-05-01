import React from 'react';
import styled from "styled-components";

const MainDiv = styled.div`
    background-color: rgba(250, 250, 2250, 1)
`

const LoginArticle = styled.article`
    text-align: center; 
    margin: 32px auto 0;
    max-width: 935px;
    padding-bottom: 32px;
    width: 100%;
    position: relative;
`

const ImageDiv = styled.div`
    background-position: -46px 0;
    background-size: 468.32px 634.15px;
`

const FooterDiv = styled.div`
    
`

const LoginInput = styled.input`

`

const LoginButton = styled.button`

`

const Login = () => {
    return (
        <MainDiv>
            <LoginArticle>
                <ImageDiv>
                test
                </ImageDiv>
            </LoginArticle>
        </MainDiv>

    );
};

export default Login;