import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Route,
  BrowserRouter as Router,
  Routes,
  NavLink,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Dashboard from "./pages/Dashboard";
import Boatbutton from "./component/Boatbutton";

function Test() {
  const [count, setCount] = useState(0);
  const [peple, setPeple] = useState({ name: "boat", age: 25, address: "spk" });
  let activeClassname = "nav-active";

  const [login,setLogin]=useState(null)

  const handleLogin=()=>{
    setLogin(true)

}
const handlelogout=()=>{
    setLogin(false)
}

  //   useEffect(()=>{
  //     document.title=`Count: ${name} times`
  //   },[name])

  return (
    <BrowserRouter>
      {/* <input value={peple.age} onChange={(e)=>setPeple({...peple,age:e.target.value})}/>
        <div>name: {peple.name}</div>
        <div>age: {peple.age}</div>
        <div>address: {peple.address}</div> */}
      <header>
        <h1>Hello world</h1>
      </header>

      <nav>
        <NavLink to="/"className={({ isActive }) => (isActive ? activeClassname : undefined)}>Home</NavLink>
        <NavLink to="/about"className={({ isActive }) => (isActive ? activeClassname : undefined)}>about</NavLink>
        <NavLink to="/contact"className={({ isActive }) => (isActive ? activeClassname : undefined)}>contact</NavLink>
        <NavLink to="/dashboard">dashboard</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={login ?<Navigate to="dashboard"/>:<Home login={handleLogin}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact/" element={<Contact />} />
        <Route path="/dashboard" element={<Navigate to="/"/>} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Test;
