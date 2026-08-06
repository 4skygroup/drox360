import Hero from "../components/Hero.tsx";
import Faq from "../components/faq/Faq.tsx";
import LogoSlider from "../components/LogoSlider.tsx";
import Slogan from "../components/Slogan.tsx";
import ProcessList from "../components/process/ProcessList.tsx";
import About from "../components/About.tsx";
import SEO from "../components/SEO.tsx";

function Home() {
    return (
        <div className="bg-drox360-light-gray">
            <SEO
                title="DROX 360° — Agence Créative | Direction Créative & Stratégie de Marque à Paris"
                description="DROX 360° est une agence créative indépendante basée à Paris. Direction créative, production de contenu, stratégie de marque et social media pour les marques exigeantes."
                path="/"
            />

            <Hero />
            <Slogan />
            <LogoSlider />
            {/*<ProjetGrid />*/}
            <About />
            <ProcessList />
            <Faq />
        </div>
    );
}

export default Home;