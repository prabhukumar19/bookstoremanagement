import "./App.css";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Top from "./components/top/Top";
import { useState } from "react";
export default function App() {
  const [name, setName]=useState("Prabhu");
  return (
   <>
   <Top/>
   <Navbar/>
   <Home name={name}/>
   </>
  )
}