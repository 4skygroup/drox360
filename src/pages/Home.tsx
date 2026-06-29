import Hero from "../components/Hero.tsx";
import Faq from "../components/faq/Faq.tsx";
import LogoSlider from "../components/LogoSlider.tsx";
import Slogan from "../components/Slogan.tsx";
import ProcessList from "../components/process/ProcessList.tsx";
import About from "../components/About.tsx";

function Home() {
    return (
        <div className="bg-drox360-light-gray">
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