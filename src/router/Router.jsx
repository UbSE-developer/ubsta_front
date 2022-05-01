/**
 * 라우터 생성
 * 김용진
 * 2022.05.01
 */
 import React from 'react';
 import { BrowserRouter, Routes, Route } from "react-router-dom"
 
 import Login from '../page/login/Login';
 import Main from '../page/main/Main';
 
 const Router = () => {
     return (
         <BrowserRouter>
             <Routes>
                 <Route path='/' element={<Login/>}/>
                 <Route path='/main' element={<Main/>}/>
             </Routes>
         </BrowserRouter>
     );
 };
 
 export default Router;