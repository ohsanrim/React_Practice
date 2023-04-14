// import React, {useEffect, useState} from 'react';
// import axios from 'axios';
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./views/NavBar/NavBar";
import MyPage from "./views/MyBlog/MyPage.js";
// import Auth from "./hoc/auth";
import Footer from "./views/Footer/Footer";
import APITestPage from "./views/APITest/APITestPage.js"
import ReportPage from "./views/Report/ReportPage.js"

function App() {
//    const [user, setUsers] = useState('')

//     useEffect(() => {
//         axios.get('/ohsanrim/react')
//         .then(response => setUsers(response.data))
//         .catch(error => console.log(error))
//     }, []);

//     return (
//         <div>
//             <h1>백엔드에서 가져온 데이터입니다</h1>
//             <h1>{user.id}</h1>
//             <h1>{user.username}</h1>
//             <h1>{user.password}</h1>
//             <h1>{user.email}</h1>
//         </div>
//     );
    return (
        <BrowserRouter>
            <Suspense fallback={(<div>Loading...</div>)}>
            <NavBar />
            <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
                <Switch>
                    <Route exact path="/" component={ MyPage } />
                    <Route exact path="/MyPage" component={ MyPage } />
                    <Route exact path="/APITest" component={ APITestPage } />
                    <Route exact path="/Report" component={ ReportPage } />
                </Switch>
            </div>
            <Footer />
            </Suspense>
        </BrowserRouter>
    );
}

export default App;