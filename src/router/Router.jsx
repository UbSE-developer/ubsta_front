/**
 * 라우터 생성
 * 김용진
 * 2022.05.01
 */
 import React from 'react';
 import { BrowserRouter, Routes, Route } from "react-router-dom"
 
 import Login from '../page/login/Login';
 import Main from '../page/main/Main';
import { BASE_URL, MAIN_URL } from '../Utils/APIConstant';
 
 const Router = () => {
     return (
         <BrowserRouter>
             <Routes>
                 <Route path= {BASE_URL} element={<Login/>}/>
                 <Route path= {MAIN_URL} element={<Main/>}/>
             </Routes>
         </BrowserRouter>
     );
 };
 
 export default Router;