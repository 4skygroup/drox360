import HeroComp from "../components/HeroComp.tsx";
import ServiceList from "../components/service/ServiceList.tsx";
import { useTranslation } from 'react-i18next';
import SEO from "../components/SEO.tsx";

function Services() {
    const { t } = useTranslation();

    return (
        <>
            <SEO
                title="Services — DROX 360° | Agence Créative à Paris"
                description="Découvrez les services de DROX 360° : direction créative, stratégie de marque, production de contenu et social media pour développer des marques fortes et distinctives."
                path="/services"
            />

            <div className="bg-drox360-light-gray">
                <HeroComp
                    orangeText={t('services-hero.orangeText')}
                    description={t('services-hero.description')}
                />
                <ServiceList />
            </div>
        </>
    );
}

export default Services;