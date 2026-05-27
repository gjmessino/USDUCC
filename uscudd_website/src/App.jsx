// Step 1: Optional imports (CSS, components, or hooks)
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header.jsx";
import Landing_Page from "./Pages/Landing_Page.jsx";
import Footer from "./component/Footer.jsx";

// Step 2: Define the functional component
// Note: Component names must start with a Capital letter
function App() {
  return (
    <body id="app">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/landing-page" element={<Landing_Page />} /> 
        </Routes>
        <Footer/>
      </BrowserRouter>
    </body>
  );
}

// Step 3: Export the component to use it in main.jsx or index.js
export default App;