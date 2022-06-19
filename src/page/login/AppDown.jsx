import React from 'react';
import styled from 'styled-components';
import appStore from "../../assets/images/appstore.png"
import googlePlay from "../../assets/images/googleplay.png"

const AppDownDiv = styled.div`
    align-items: center;
    width: 100%;
    line-height : 60px;
    font-size: 14px;
    text-align: center;
`

const imgStyle = {
    height: '40px'
}

const AppDown = () => {
    return (
        <AppDownDiv>
            앱을 다운로드 하세요.
            <div style={{position: "flex"}}>
            <img src={appStore} style={imgStyle} />
            &nbsp;&nbsp;
            <img src={googlePlay} style={imgStyle} />
            </div>
        </AppDownDiv>
    );
};

export default AppDown;