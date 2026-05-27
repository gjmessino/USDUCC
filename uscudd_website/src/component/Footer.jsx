import Subscribe from "./Forms/Subscribe_Form.jsx"
import About_Us from "../Pages/About_Us.jsx"
import Get_Involved from "../Pages/Get_Involved.jsx";
import Contact_Page from "../Pages/Contact_Page.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Footer() {
    return(
        <footer>
            <Subscribe_Form/>
            <div class = "socials">
                <a href = "https://www.facebook.com/"></a>
                <a href = "https://www.linkedin.com"></a>
                <a href ="https://www.instagram.com/?hl=en"></a>
                <a href = "https://x.com/"></a>
            </div>
            <div>
                <h3>Quick Links</h3>
                <BrowserRouter>
                    <Routes>
                        <Route path="/about" element={<About_Us />} />
                        <Route path="/get_involved" element={<Get_Involved />} />

                    </Routes>
                </BrowserRouter>
            </div>
            <div>
                <h3>Need Help?</h3>
                <BrowserRouter>
                    <Routes>
                        <Route path="/contact" element={<Contact_Page/>} />
                    </Routes>
                </BrowserRouter>
            </div>
        </footer>
    )
}

export default Footer();