// Step 1: Optional imports (CSS, components, or hooks)
import './App.css';
import Header from "./Header";
import Landing_Page from "./Landing_Page";
import Footer from "./Footer";

// Step 2: Define the functional component
// Note: Component names must start with a Capital letter
function App() {
  return (
    <body>
      <meta name="description" content="Little Lemon is a local Mediterranean restaurant focused on traditional recipes" />
      <meta property="og:title" content="Little Lemon Restaurant" />
      <meta property="og:description" content="Little Lemon is a local Mediterranean restaurant focused on traditional recipe" />
      <meta property="og:image" content="./public/restaurant-chefB.jpg" />
      <Header/>
      <Landing_Page/>
      <Footer/>
    </body>
  );
}


// Step 3: Export the component to use it in main.jsx or index.js
export default App;