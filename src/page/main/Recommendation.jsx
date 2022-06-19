import React, { useState } from 'react';
import RecommendationDetail from './RecommendationDetail';
const sampleData = [
    {key: 1, userId : "이호섭", text : "회원님을 팔로우합니다."},
    {key: 2, userId : "박형권", text : "회원님을 팔로우합니다."},
    {key: 3, userId : "이현희", text : "회원님을 팔로우합니다."},
    {key: 4, userId : "신상우", text : "회원님을 팔로우합니다."},
    {key: 5, userId : "김경환", text : "회원님을 팔로우합니다."},
    {key: 6, userId : "서재식", text : "회원님을 팔로우합니다."},
    {key: 7, userId : "안세영", text : "회원님을 팔로우합니다."},
    {key: 8, userId : "최다훈", text : "회원님을 팔로우합니다."},
]

const userObj = 
    {user_id : "mireu_jin_", name : "김용진", profile_img : ""};

const Recommendation = () => {
    const [userInfo, setUserInfo] = useState(userObj);

    return (
        <div style={{width : "400px", height:"200px"}}>
            <div name="myAccount">
                <RecommendationDetail item = {userInfo} name = {"userinfo"}/>
            </div>
            <div style={{display : "flex", margin : "3px 5px 5px 10px"}}>
                <div style={{width : "75%", color:"gray", fontWeight:"bold", fontSize:"13px"}}>회원님을 위한 추천</div>
                <div style={{textAlign : "right"}}>
                    <a href="#" style={{textDecoration : "none", fontSize:"10px", color:"black", fontWeight:"bold"}}>모두보기</a>
                </div>
            </div>
            <div name="recommendationlist">
                {sampleData.map((item, idx)=>{
                    if(idx > 4){
                        return;
                    }
                    return <RecommendationDetail key = {item.key} item = {item} name = {"recommendation"}/>
                })}
            </div>
        </div>
    );
};

export default Recommendation;