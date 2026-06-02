import {Route, Routes} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.tsx";
import Home from "./pages/Home.tsx";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/footer/Footer.tsx";
import About from "./pages/About.tsx";
import Contact from "./components/form/Contact.tsx";

function App() {
  return (
    <div className="overflow-x-hidden">
        <ScrollToTop />
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/> } />
            {/*<Route path="/services" element={<Services />} />*/}
            <Route path="/contact" element={<Contact />} />

            {/*<Route path="/brandcontent" element={<BrandContent />} />*/}
            {/*<Route path="/production" element={<Production />} />*/}
            {/*<Route path="/strategiecreative" element={<StrategieCreative />} />*/}
            {/*<Route path="/socialmedia" element={<SocialMedia />} />*/}
        </Routes>
        <Footer/>
    </div>
  )
}

export default App
