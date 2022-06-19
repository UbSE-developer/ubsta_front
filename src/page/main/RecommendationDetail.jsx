import React from 'react';

const RecommendationDetail = (props) => {
    const profileImg = require('../../assets/images/profile.jpeg');
    const textfieldSize = props.name === "userinfo" ? "15px" : "10px";
    return (
        <div style={{display : "flex", padding : "5px", width:"90%"}}>
            <div style={{margin : "3px 10px 10px 10px"}}>
                <img src={profileImg} style={props.name === "userinfo"
                    ? {width:"40px", height:"40px",borderRadius : "50px"}
                    : {width:"30px", height:"30px",borderRadius : "50px"}}/>
            </div>
            <div style={{width : "70%"}}>
                <div style={{fontWeight : "bold"}}>
                    <a href="#" style={{textDecoration : "none", color:"black"}}>{props.name === "userinfo"?  props.item.user_id: props.item.userId}</a>
                </div>
                <div style={{color : "gray", 
                        fontSize : textfieldSize,
                        marginTop:"3px"}}>
                    {props.name === "userinfo"?  props.item.name: props.item.text}
                </div>
            </div>
            <div style={{textAlign : "center", marginTop : "15px"}}>
                <a href="#" style={{textDecoration : "none", fontSize : "10px", color : "#00BFFF", fontWeight:"bold"}}>{props.name === "userinfo"?  "전환": "팔로우"}</a>
            </div>
        </div>
    );
};

export default RecommendationDetail;