import React, { useEffect, useState } from 'react';
import Content from './Content';
import Recommendation from './Recommendation';

const MainContents = () => {
    const [recommedVisible, setRecommendVisible] = useState(true);
    const onResize = () => {
        if(window.innerWidth < 1000){
            setRecommendVisible(false);
        }else{
            setRecommendVisible(true);
        }
    }

    useEffect(()=>{
        window.addEventListener("resize", onResize);
        // return window.removeEventListener("resize", onResize)
    });

    return (
        <div style={{display : "flex", margin : "30px"}} >
            <Content/>
            {recommedVisible ? <Recommendation/> : ""}
        </div>
    );
};

export default MainContents;