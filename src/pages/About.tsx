import HeroComp from "../components/HeroComp.tsx";
import HistoryList from "../components/history/HistoryList.tsx";
import TeamList from "../components/team/TeamList.tsx";

function About() {
    return (
        <div className="bg-drox360-light-gray">
            <HeroComp blackText="Pensée humaine Impact" orangeText="Digital" description="Une agence de production Créative basée à Paris. Nous fusionnons stratégie éditoriale et haute qualité visuelle pour les marques qui refusent le Minimum."/>
            <HistoryList />
            <TeamList />
        </div>
    );
}

export default About;