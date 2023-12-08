import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./screens/HomePage";
import MenPage from "./screens/MenPage"
import WomenPage from "./screens/WomenPage"
import KidsPage from "./screens/KidsPage"
import NotFounded from "./screens/NotFounded"
import UserInfo from "./screens/userInfo"

import {BrowserRouter, Route, Routes} from "react-router-dom"
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
 

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Navbar />
      <Routes>
      <Route path="/" element={<HomePage></HomePage >}></Route>
      <Route path="/men-shoe" element={<MenPage></MenPage>}></Route>
      <Route path="/women-shoe" element={<WomenPage></WomenPage>}></Route> 
      <Route path="/kids-shoe" element={<KidsPage></KidsPage>}></Route> 
      <Route path="/signin" element={<SignIn></SignIn >}></Route>
      <Route path="/men-shoe/signup" element={<SignIn></SignIn >}></Route>
      <Route path="/signup" element={<SignUp></SignUp >}></Route>
      <Route path="/userprofile" element={<UserInfo></UserInfo >}></Route>
      {/* <Route path="*" element={<NotFounded></NotFounded >}></Route> */}

      </Routes>
      
      </BrowserRouter>
   
    </div>
  );
}

export default App;



