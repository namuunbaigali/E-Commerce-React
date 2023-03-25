
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap-icons/font/bootstrap-icons.css';
import NavBar from './components/NavBar';

import { Routes, Route} from "react-router-dom";
import Signin from './components/Login/Signin';
import Signup from './components/Login/Signup';
import Home from './components/pages/Home';
import { useCurrentUser } from './hooks/useCurrentUser';
import Signout from './components/Login/Signout';


function App() {
  // const {currentUser} = useCurrentUser();
  // console.log('currentUser:',currentUser);

  // if(!currentUser){
  //   return(
  //     <>
  //     <Routes>
  //       <Route path="/signup" element={<Signup/>}/>
  //       <Route path="*" element={<Signin/>} />
  //     </Routes>
  //     </>
  //   )
  // }

  return (
    <>
    <NavBar/>
    {/* <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path="/signout" element={<Signout />} />
    </Routes> */}
    </>
  )
}

export default App;
