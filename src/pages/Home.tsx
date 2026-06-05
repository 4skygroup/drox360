import Hero from "../components/Hero.tsx";
import ProjetGrid from "../components/projet/ProjetGrid.tsx";
import Faq from "../components/faq/Faq.tsx";
import LogoSlider from "../components/LogoSlider.tsx";
import Slogan from "../components/Slogan.tsx";
import ProcessList from "../components/process/ProcessList.tsx";

function Home() {
    return (
        <div className="bg-drox360-light-gray">
            <Hero />
            <Slogan />
            <LogoSlider />
            <ProjetGrid />
            <ProcessList />
            <Faq />
        </div>
    );
}

export default Home;