// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
   const [user, setUsers] = useState('')

    useEffect(() => {
        axios.get('/ohsanrim/react')
        .then(response => setUsers(response.data))
        .catch(error => console.log(error))
    }, []);

    return (
        <div>
            <h1>백엔드에서 가져온 데이터입니다</h1>
            <h1>{user.id}</h1>
            <h1>{user.username}</h1>
            <h1>{user.password}</h1>
            <h1>{user.email}</h1>
        </div>
    );
}

export default App;