// Step 1: Optional imports (CSS, components, or hooks)
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header.jsx";
import Landing_Page from "./Pages/Landing_Page.jsx";
import Home from "./Pages/Home.jsx";
import About_Us from "./Pages/About_Us.jsx";
import Get_Involved from "./Pages/Get_Involved.jsx"
import Find_Help from "./Pages/Find_Help.jsx"
import Contact_Page from "./Pages/Contact_Page.jsx"
import Faq from "./Pages/FAQ_Page.jsx"
import Scale from "./Pages/Scale.jsx"
import Footer from "./component/Footer.jsx";
import useScrollReveal from "./useScrollReveal.js";

// Step 2: Define the functional component
// Note: Component names must start with a Capital letter
function App() {
  useScrollReveal();
  return (
    <div id="app">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Landing_Page />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About_Us />} />
          <Route path="/get-involved" element={<Get_Involved />} />
          <Route path="/find-help" element={<Find_Help/>}/>
          <Route path="/contact" element={<Contact_Page />} />
          <Route path="/scale" element={<Scale />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

// Step 3: Export the component to use it in main.jsx or index.js
export default App;