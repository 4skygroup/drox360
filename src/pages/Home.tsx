import Hero from "../components/Hero.tsx";
import ProjetGrid from "../components/projet/ProjetGrid.tsx";
import Faq from "../components/faq/Faq.tsx";
import LogoSlider from "../components/LogoSlider.tsx";

function Home() {
    return (
        <div className="bg-drox360-light-gray">
            <Hero />
            <LogoSlider />
            <ProjetGrid />
            <Faq />
        </div>
    );
}

export default Home;