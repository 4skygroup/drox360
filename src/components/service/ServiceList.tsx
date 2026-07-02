import { useTranslation } from "react-i18next";
import ServiceCard from "./ServiceCard";

export interface Expertise {
    title: string;
    description: string;
}

export interface BrandCard {
    tag: string;
    title: string;
    titleHighlight: string;
    description: string;
    expertises: Expertise[];
}

interface ServiceTranslation {
    title: string;
    titleHighlight: string;
    description: string;
    expertises: Expertise[];
}

export default function ServiceList() {
    const { t } = useTranslation();

    const tag = t("services.tag");
    const list = t("services.list", { returnObjects: true }) as ServiceTranslation[];

    const services: BrandCard[] = list.map((item) => ({
        tag,
        ...item,
    }));

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            {services.map((card) => (
                <ServiceCard key={card.title} card={card} />
            ))}
        </div>
    );
}