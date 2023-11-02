

import React, { useState } from 'react';
import './App.css';




import { Route, Routes } from 'react-router-dom';


import LoginNew from './components/login/LoginNew';
import RegisterNew from './components/login/RegisterNew';
import Topbar from './components/main/Topbar';
import Dashboard from './components/Dashboard';
// import {Navigation} from './customer/Navigation/Navigation';


function App() {
    return (
        <div className="App">
            <React.Fragment>
                <Routes>
                    <Route path="/login" element={<LoginNew />} />
                    <Route path="/register" element={<RegisterNew />} />
                    <Route path="/dashboard/*" element={<Dashboard />} />
                    <Route path="/*" element={
                        <>
                            <div>
                                <Topbar />
                                {/* <Navigation /> */}
                                {/* other elements goes here  */}
                            </div>
                        </>

                    } />
                </Routes>
            </React.Fragment>
        </div >
    );
}

export default App;
