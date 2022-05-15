import React from 'react';
import styled from 'styled-components';
import "../../assets/css/main.css"
const MainHeader = styled.div`
    width : 100%;
    height : 75px;
    border : 1px solid;
`;

const imgStyle = {
    width : '25px',
    margin : '25px 10px 10px 10px'
}

const onImgClick = () => {
    console.log("Image Clicked!!")
}

const Header = () => {
    const instaLogoImgUrl = require('../../assets/images/instagram.png');
    const profileUserImgUrl = require('../../assets/images/profile-user.png');
    const loveImgUrl = require('../../assets/images/love.png');
    const plusImgUrl = require('../../assets/images/plus.png');
    const sendImgUrl = require('../../assets/images/send.png');
    const homeImgUrl = require('../../assets/images/home.png');
    const compassImgUrl = require('../../assets/images/compass.png');

    return (
        <>
            <MainHeader>
                <div style={{
                    // marginLeft : '10%',
                    textAlign: "center",
                    display : 'flex'
                }}>
                    <div name="logodiv">
                        <img name='instaLogo' src={instaLogoImgUrl} style={imgStyle}/>
                    </div>
                    <div name="searchboxdiv" style={{marginTop : "18px"}}>
                        <input className='searchBox' name='mainInput' type='text' placeholder='검색' style={{
                            backgroundColor : 'rgb(234,234,234)',
                            width : '200px',
                            height : '40px',
                            borderRadius : '5px',
                            margin : '0px 100px 0px 200px',
                            border : "none"
                        }}/>
                    </div>
                    <div name="icondiv">
                        <img name='home' src={homeImgUrl} style={imgStyle} onClick = {onImgClick}/>
                        <img name='send' src={sendImgUrl} style={imgStyle} onClick = {onImgClick}/>
                        <img name='plus' src={plusImgUrl} style={imgStyle} onClick = {onImgClick}/>
                        <img name='compass' src={compassImgUrl} style={imgStyle} onClick = {onImgClick}/>
                        <img name='love'src={loveImgUrl} style={imgStyle} onClick = {onImgClick}/>
                        <img name='propfileUser' src={profileUserImgUrl} style={imgStyle} onClick = {onImgClick}/>
                    </div>
                </div>
            </MainHeader>
        </>
    );
};

export default Header;