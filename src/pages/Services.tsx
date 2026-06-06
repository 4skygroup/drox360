import HeroComp from "../components/HeroComp.tsx";
import ServiceList from "../components/service/ServiceList.tsx";


function Home() {
    return (
        <div className="bg-drox360-light-gray">
            <HeroComp
                orangeText="Nos Services"
                description="Quatre domaines d'intervention, un seul fil conducteur : aider votre marque à communiquer avec clarté, cohérence et impact. Chaque projet est traité sur mesure — pas de forfait standard, pas de livrable générique."
            />
            <ServiceList />
        </div>
    );
}

export default Home;