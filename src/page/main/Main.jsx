import React from 'react';
import Footer from '../common/Footer';
import Header from '../common/Header'
import MainContents from './MainContents';

const Main = () => {
    return (
        <div>
            <Header/>
            <MainContents/>
            <Footer/>
        </div>
    );
};

export default Main;