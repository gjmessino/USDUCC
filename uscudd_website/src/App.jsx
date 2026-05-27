// Step 1: Optional imports (CSS, components, or hooks)
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Landing_Page from "./Pages/Landing_Page";
import Footer from "./components/Footer";

// Step 2: Define the functional component
// Note: Component names must start with a Capital letter
function App() {
  return (
    <body id="app">
      <BrowserRouter>
        <Routes>
          <Route path="/header" element={<Header />} />
          <Route path="/landing-page" element={<Landing_Page />} />
          <Route path="/footer" element={<Footer/>} />
        </Routes>
    </BrowserRouter>
    </body>
  );
}

// Step 3: Export the component to use it in main.jsx or index.js
export default App;