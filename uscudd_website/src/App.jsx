// Step 1: Optional imports (CSS, components, or hooks)
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./Header";
import Landing_Page from "./Landing_Page";
import Footer from "./Footer";

// Step 2: Define the functional component
// Note: Component names must start with a Capital letter
function App() {
  return (
    <body>
      <meta name="description" content="Little Lemon" />
      <meta property="og:title" content="United States Diaspora United Chamber of Commerce" />
      <meta property="og:description" content="Little Lemon " />
      <meta property="og:image" content="../logo.webp" />
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