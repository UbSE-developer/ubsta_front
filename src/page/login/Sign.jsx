import React, {useState} from 'react';
import AppDown from './AppDown';
import Footer from '../common/Footer';
import loginLogo from "../../assets/images/logo.png"
import styled from 'styled-components';
import { Link, useNavigate  } from 'react-router-dom';
import axios from "axios";
import { SIGN_URL } from '../../Utils/APIConstant';

const MaingDiv = styled.div`
`

const SignDiv = styled.div`
    border: 1px solid rgba(var(--b6a,219,219,219),1);
    background-color: rgba(var(--d87,255,255,255),1);
    border-radius: 1px;
    margin: 0 auto;
    margin-top: 30px;
    padding: 10px 0;
    width: 22.8%;
    text-align: center;
    height: 80%;
    padding-bottom: 35px;
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
const ServiceDiv = styled.div`
    color: #8e8e8e;
    font-size: 12px;
    line-height: 16px;
    margin: 10px 40px;
    text-align: center;
`

const SignButton = styled.button`
    background-color: #0095f6;
    color:white;
    font-weight: bold;
    border: 1px solid transparent;
    width: 75%;
    font-size: 14px;
    height: 30px;
    padding-bottom: 10px;
    padding-top: 5px;
    border-radius: 5px;
    margin-top: 10px;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
    cursor:pointer;
`

const BlankDiv = styled.div`
    font-size: 13px;
    height: 36px;
    width: 100%;
    font-weight: bold;
    color: #8e8e8e;
    text-align: center;
    margin-top: 10px;
    align-items: center;
    display: flex;
    margin: 10px 45px 10px;
    text-align: center;
` 

const BlankBorderDiv = styled.div`
    border-top: 2px solid rgba(var(--b6a,219,219,219),1);
    width: 108px;
`

const SignText = styled.p`
    color: rgba(var(--f52,142,142,142),1);
    font-size: 17px;
    font-weight: 600;
    line-height: 20px;
    margin: 0 40px 10px;
    text-align: center;
`

const LoginDiv = styled.div`
    margin: 0 auto;
    border: 1px solid rgba(var(--b6a,219,219,219),1);
    background-color: rgba(var(--d87,255,255,255),1);
    border-radius: 1px;
    align-items: center;
    width: 22.8%;
    height: 10%;
    margin-top: 10px;
    line-height : 60px;
    text-align: center;
    font-size: 14px;
`

const imgStyle = {
    marginTop: '35px',
    marginBottom: '5px'
}

const Sign = () => {
    const [account, setAccount] = useState({
        user_auth: "",
        name: "",
        user_id: "",
        password: ""
    })

    const navigator = useNavigate();

    const onChangeAccount = (e) => {
        setAccount({
            ...account,
            [e.target.name]: e.target.value,
            });
        //console.log(account);
    } 

    const handleSubmit = e => {
        e.preventDefault();
        console.log(account);
        axios
            .post(SIGN_URL, account)
            .then(res => {
                if(res.status===200) navigator("/");
            })
            .catch(err => {
                if(err.response.status===500) alert((err.response.data.message).split("/")[0]);
            });
        };

    return (
        <>
        <MaingDiv>
                <SignDiv>
                <img src={loginLogo} style={imgStyle} />
                <SignText>친구들의 사진과 동영상을 보려면 가입하세요.</SignText>
                <SignButton>FaccBook으로 로그인</SignButton><br/>
                <BlankDiv><BlankBorderDiv/>&nbsp;&nbsp;또는&nbsp;&nbsp;<BlankBorderDiv/></BlankDiv> 
                <LoginInput id='user_auth' name='user_auth' onChange={onChangeAccount} placeholder={"휴대폰 번호 또는 이메일 주소"}/>
                <LoginInput id='name' name='name' onChange={onChangeAccount} placeholder={"성명"}/>
                <LoginInput id='user_id' name='user_id' onChange={onChangeAccount} placeholder={"사용자 이름"}/>
                <LoginInput type="password" id='password' name='password' onChange={onChangeAccount} placeholder={"비밀번호"}/>
                <ServiceDiv>
                    서비스를 이용하는 사람이 회원님의 연락처 정보를 Instagram에 업로드했을 수도 있습니다. 
                    <b>
                        <a style={{textDecoration: 'none', color: '#8e8e8e'}} href="https://www.facebook.com/help/instagram/261704639352628">더 알아보기</a>
                    </b>
                </ServiceDiv>
                <SignButton onClick={handleSubmit}>가입</SignButton>
                </SignDiv> 
            <LoginDiv>
                <span>
                    계정이 있으신가요?
                    <Link to="/" style={{textDecoration: 'none'}}>
                            <span style={{color: "#0095f6"}}> 로그인</span>
                    </Link>
                </span>
            </LoginDiv>
            <AppDown/>
        </MaingDiv>
        <Footer/>
        </>
    );
};

export default Sign;