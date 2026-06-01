import Hero from "../components/Hero.tsx";
import ProjetGrid from "../components/projet/ProjetGrid.tsx";
import Faq from "../components/faq/Faq.tsx";

function Home() {
    return (
        <div className="bg-drox360-light-gray">
            <Hero />
            <ProjetGrid />
            <Faq />
        </div>
    );
}

export default Home;