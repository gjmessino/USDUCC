import { BrowserRouter, Routes, Route } from "react-router-dom";

function Header() {
    return (
        <div>
            <header>
                <img src = "../logo.webp"></img>
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

export default Header();