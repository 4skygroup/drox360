import {Route, Routes} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.tsx";
import Home from "./pages/Home.tsx";

function App() {
  return (
    <>
        <ScrollToTop />
        <Routes>
            <Route path="/" element={<Home />} />
            {/*<Route path="/services" element={<Services />} />*/}
            {/*<Route path="/about" element={<About/> } />*/}
            {/*<Route path="/contact" element={<Contact />} />*/}

        </Routes>
    </>
  )
}

export default App
