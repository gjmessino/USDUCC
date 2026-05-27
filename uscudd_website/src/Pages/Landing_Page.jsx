import Home from "./Home.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Landing_Page(){
    return(
        <div>
            <img src="uscudd_website/src/assets/hero.jpg"></img>
            <h1>USDUCC</h1>
            <button onclick= "<Home/>">Enter Website</button>
        </div>
    )
}

export default Landing_Page;