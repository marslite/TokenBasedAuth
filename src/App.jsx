import { Route, Routes } from "react-router-dom";
import "./App.css";


import LoginPage from "./pages/LoginPage/LoginPage";
import { useState } from "react";
import userService from "./utils/userService";
import SignupPage from "./pages/SignupPage/SignupPage";

function App() {

  const [user,setUser] = useState(userService.getUser);

  function handleSignupOrLogin(){
    setUser(userService.getUser);

  }

  return (
    <Routes>
      <Route path="/" element={<h1>Home Pageeeeeeeeeee</h1>} />
      <Route path="/login" element={<LoginPage handler={handleSignupOrLogin}/>} />
      <Route path="/signup" element={<SignupPage handler={handleSignupOrLogin}/>} />
    </Routes>
  );
}

export default App;
