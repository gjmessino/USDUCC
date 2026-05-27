import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "../component/Hero.jsx"
import Parters from "../component/Partners.jsx"
import Events from "../component/Events.jsx"

function Home(){
    return(
        <BrowserRouter>
            <Routes>
                <Route>
                    <Hero/>
                    <Partners/>
                    <Events/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Home();