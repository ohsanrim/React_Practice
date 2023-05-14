// import React, {useEffect, useState} from 'react';
// import axios from 'axios';
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./views/NavBar/NavBar";
import HomePage from "./views/Home/HomePage.js";
// import Auth from "./hoc/auth";
import Footer from "./views/Footer/Footer";
import APITestPage from "./views/APITest/APITestPage.js"
import ReportPage from "./views/Report/ReportPage.js"
import LoginPage from "./views/Login/Login.js";

function App() {

    return (
        <BrowserRouter>
            <Suspense fallback={(<div>Loading...</div>)}>
            <NavBar />
            <div style={{ minHeight: 'calc(100vh - 80px)' }}>
                <Switch>
                    {/* <Route exact path="/" component={ HomePage } /> */}
                    <Route exact path="/" component={ LoginPage } />
                    <Route exact path="/APITest" component={ APITestPage } />
                    <Route exact path="/Home" component={ HomePage } />
                    <Route exact path="/Report" component={ ReportPage } />
                </Switch>
            </div>
            <Footer />
            </Suspense>
        </BrowserRouter>
    );
}

export default App;