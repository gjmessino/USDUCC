import Hero from "../component/Hero.jsx";
import Partners from "../component/Partners.jsx";
import Mission from "../component/Mission.jsx";
import Events from "../component/Events.jsx";
import Donations from "../component/Donations.jsx"

function Home() {
  return (
    <main>
      <Hero />
      <Partners />
      <Mission />
      <Events />
      <Donations/>
    </main>
  );
}

export default Home;
