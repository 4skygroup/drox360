import Hero from "../components/Hero.tsx";
import ProjetGrid from "../components/projet/ProjetGrid.tsx";

function Home() {
    return (
        <div className="bg-drox360-light-gray">
            <Hero />
            <ProjetGrid />
        </div>
    );
}

export default Home;