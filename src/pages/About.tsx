import HeroComp from "../components/HeroComp.tsx";
import HistoryList from "../components/history/HistoryList.tsx";
import PrincipesList from "../components/principe/PrincipesList.tsx";
import { useTranslation } from 'react-i18next';
import SEO from "../components/SEO.tsx";

function About() {
    const { t } = useTranslation();

    return (
        <div className="bg-drox360-light-gray">
            <SEO
                title="À propos de DROX 360° — Agence Créative à Paris"
                description="Découvrez DROX 360°, agence créative indépendante à Paris. Notre vision, notre histoire et nos principes pour accompagner les marques dans leur développement."
                path="/about"
            />

            <HeroComp
                blackText={t('about-hero.blackText')}
                orangeText={t('about-hero.orangeText')}
                description={t('about-hero.description')}
            />
            <HistoryList />
            {/*<TeamList />*/}
            <PrincipesList />
        </div>
    );
}

export default About;