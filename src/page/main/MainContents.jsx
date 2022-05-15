import React from 'react';
import Content from './Content';
import Recommendation from './Recommendation';

const MainContents = () => {
    return (
        <div style={{display : "flex", margin : "30px"}}>
            <Content/>
            <Recommendation/>
        </div>
    );
};

export default MainContents;