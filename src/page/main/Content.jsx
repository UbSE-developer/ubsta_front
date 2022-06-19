import React from 'react';
import "../../assets/css/main.css"
const Content = () => {
    let likeCount = 0;
    const sampleContentImage = require('../../assets/images/sample/SampleContentImage.jpeg');
    const profileUserImgUrl = require('../../assets/images/profile-user.png');
    const loveImgUrl = require('../../assets/images/love.png');
    const faceImgUrl = require('../../assets/images/face.png');
    const sendImgUrl = require('../../assets/images/send.png');
    const messageImgUrl = require('../../assets/images/speech-bubble.png');
    const saveImgUrl = require('../../assets/images/save-instagram.png');

    const imgStyle = {
        width : '25px',
        margin : '25px 10px 10px 10px'
    }


    return (
        <div style={{width : "60%", border:"1px solid", borderColor:"black", minWidth:"500px"}}>
            <div name="writer" style={{blackgroundColor:"white", height:"50px"}}>
                <span>작성자</span>
            </div>
            <div className="content" style={{height:"400px"}}>
            </div>
            <div name="viewreply" style={{width:"100px"}}>
                <div style={{display : "flex"}}>
                    <img src={loveImgUrl} style={imgStyle}/>
                    <img src={messageImgUrl} style={imgStyle}/>
                    <img src={sendImgUrl} style={imgStyle}/>
                    <img src={saveImgUrl} style={imgStyle}/>
                </div>
                <div style={{height:"200px"}}>
                    {/* 댓글 가져오기 map()*/}
                    <p>좋아요 {likeCount}개</p>
                    <p>첫번째 이다.</p>
                    <p>두번째 이다.</p>
                    <p>세번째 이다.</p>
                </div>
            </div>
                <hr style={{width:"98%"}}/>
            <div name="wirtereply" style={{height:"50px", display:"flex", marginBottom:"10px"}}>
                <img src={faceImgUrl} style={{width : '40px', margin : '8px 10px 10px 10px'}}/>
                <input className="replyBox" name="replyBox" placeholder='댓글달기...'/>
                <button className='replyBtn'>게시</button>
                {/* <button style={{width : "100px", backgroundColor:"white"}}>게시</button> */}
            </div>
        </div>
    );
};

export default Content;