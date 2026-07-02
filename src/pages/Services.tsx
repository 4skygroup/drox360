import HeroComp from "../components/HeroComp.tsx";
import ServiceList from "../components/service/ServiceList.tsx";
import { useTranslation } from 'react-i18next';

function Services() {
    const { t } = useTranslation();

    return (
        <div className="bg-drox360-light-gray">
            <HeroComp
                orangeText={t('services-hero.orangeText')}
                description={t('services-hero.description')}
            />
            <ServiceList />
        </div>
    );
}

export default Services;