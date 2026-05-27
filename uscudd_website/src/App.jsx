// Step 1: Optional imports (CSS, components, or hooks)
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header.jsx";
import Landing_Page from "./Pages/Landing_Page.jsx";
import Home from "./Pages/Home.jsx";
import About_Us from "./Pages/About_Us.jsx";
import Get_Involved from "./Pages/Get_Involved.jsx"
import Contact_Page from "./Pages/Contact_Page.jsx"
import Footer from "./component/Footer.jsx";

// Step 2: Define the functional component
// Note: Component names must start with a Capital letter
function App() {
  return (
    <body id="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing_Page />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About_Us />} />
          <Route path="/get-involved" element={<Get_Involved />} />
          <Route path="/contact" element={<Contact_Page />} />
        </Routes>
      </BrowserRouter>
    </body>
  );
}

// Step 3: Export the component to use it in main.jsx or index.js
export default App;