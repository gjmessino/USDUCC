
import Header from  "./Header"
import Hero from "./Hero";
import Partners from "./Partners"
import Newsletter_Signup from "./Newsletter_Signup"
import Mission from "./Mission"

function Landing_Page(){
    return(
        <body>
            <Header/>
            <Hero/>
            <Partners/>
            <Mission/>
            <Newsletter_Signup/>
            <Footer/>
        </body>
    )
}

export default Landing_Page();