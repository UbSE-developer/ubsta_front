import React from 'react';

const sampleData = [
    {userId : "이호섭", text : "회원님을 팔로우합니다."},
    {userId : "박형권", text : "회원님을 팔로우합니다."},
    {userId : "이현희", text : "회원님을 팔로우합니다."},
    {userId : "신상우", text : "회원님을 팔로우합니다."},
    {userId : "김경환", text : "회원님을 팔로우합니다."},
]

const Recommendation = () => {
    return (
        <div style={{backgroundColor : "red", width : "30%", height:"200px"}}>
            <div name="myAccount">

            </div>
            <div name="recommendationlist">

            </div>

        </div>
    );
};

export default Recommendation;