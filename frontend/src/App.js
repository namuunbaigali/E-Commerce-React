
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap-icons/font/bootstrap-icons.css';
import NavBar from './components/NavBar';

import { Routes, Route} from "react-router-dom";
import { useEffect, useState } from 'react';
import Signin from './components/Login/Signin';
import Signup from './components/Login/Signup';
import SigninSuccess from './components/Login/SigninSuccess';
import Home from './components/pages/Home';


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
      <>
      <Routes>
        <Route path="/" element={<Signin/>} />
        <Route
          path="/signin/success"
          element={<SigninSuccess setMe={setMe} />}
        />
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
      </>
    )
  }

  return (
    <>
    <NavBar  />
    <Routes>
      <Route path='/home' element={<Home/>}/>
    </Routes>
    </>
  )
}

export default App;
