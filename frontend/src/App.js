
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap-icons/font/bootstrap-icons.css';
import NavBar from './components/NavBar';

import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import Signin from './components/Login/Signin';
import Signup from './components/Login/Signup';






function App() {
  const [me, setMe] = useState(undefined);

  useEffect(()=>{
    const myData = localStorage.getItem("me");
    if(myData !== "undefined"){
      setMe(JSON.parse(myData));
    }
  },[]);

  if(!me){
    return(
      <Routes>
        <Route path="/signin" element={<Signin/>} />
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    )
  }

  return <><NavBar/></>
}

export default App;
