import HeroComp from "../components/HeroComp.tsx";
import HistoryList from "../components/history/HistoryList.tsx";
import PrincipesList from "../components/principe/PrincipesList.tsx";
import { useTranslation } from 'react-i18next';

function About() {
    const { t } = useTranslation();

    return (
        <div className="bg-drox360-light-gray">
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