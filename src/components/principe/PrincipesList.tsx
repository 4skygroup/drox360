import { useTranslation } from "react-i18next";
import PrincipleCard from "./PrincipeCard.tsx";

type Principle = {
    title: string;
    description: string;
};

export default function PrincipesList() {
    const { t } = useTranslation();
    const principles = t("principles.items", { returnObjects: true }) as Principle[];

    return (
        <section className="bg-drox360-light-gray py-20 px-6 md:px-12 lg:px-20">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-4">
                    <div className="w-6 h-[2px] bg-drox360-orange" />

                    <span className="font-bold uppercase text-drox360-orange tracking-wide">
                        {t("principles.label")}
                    </span>
                </div>

                <div>
                    {principles.map((principle) => (
                        <PrincipleCard
                            key={principle.title}
                            title={principle.title}
                            description={principle.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}