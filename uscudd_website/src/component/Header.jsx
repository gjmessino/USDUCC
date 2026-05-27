import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home.jsx";
import About_Us from "../Pages/About_Us.jsx";
import Contact_Page from "../Pages/Contact_Page.jsx";
import Get_Involved from "../Pages/Get_Involved.jsx";

function Header() {
    return (
        <div>
            <header>
                <img src = "assets/hero.jpg"></img>
            </header>
            <nav>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/about" element={<About_Us />} />
                        <Route path="/contact" element={<Contact_Page />} />
                        <Route path="/get-involved" element={<Get_Involved/>} />
                    </Routes>
                </BrowserRouter>
            </nav>
        </div>
    )
}

export default Header;