import {Route, Routes} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.tsx";
import Home from "./pages/Home.tsx";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/footer/Footer.tsx";
import About from "./pages/About.tsx";
import Contact from "./components/form/Contact.tsx";
import Services from "./pages/Services.tsx";
import MentionsLegales from "./pages/MentionsLegales.tsx";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite.tsx";
import Locations from "./pages/Locations.tsx";

function App() {
  return (
    <div className="overflow-x-hidden">
        <ScrollToTop />
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/> } />
            {/*<Route path="/projets" element={<Projets/>} />*/}
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/location" element={<Locations />} />

            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/confidentialite" element={<PolitiqueConfidentialite />} />

        </Routes>
        <Footer/>
    </div>
  )
}

export default App
