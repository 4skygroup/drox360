import { useTranslation } from "react-i18next";
import HistoryCard from "./HistoryCard";

interface HistoryItem {
    value: string;
    title: string;
    description: string;
}

export default function HistoryList() {
    const { t } = useTranslation();

    const historyItems: HistoryItem[] = [
        {
            value: t("history.items.founded.value"),
            title: t("history.items.founded.title"),
            description: t("history.items.founded.description"),
        },
        {
            value: t("history.items.team.value"),
            title: t("history.items.team.title"),
            description: t("history.items.team.description"),
        },
        {
            value: t("history.items.independent.value"),
            title: t("history.items.independent.title"),
            description: t("history.items.independent.description"),
        },
        {
            value: t("history.items.integrated.value"),
            title: t("history.items.integrated.title"),
            description: t("history.items.integrated.description"),
        },
    ];

    return (
        <section className="bg-drox360-light-gray py-24 px-6 lg:px-20">
            <div className="max-w-6xl mx-auto">

                <p className="text-drox360-orange font-bold uppercase tracking-wide mb-10">
                    {t("history.sectionLabel")}
                </p>

                <div className="grid lg:grid-cols-2 gap-20 items-start">

                    <div className="relative grid grid-cols-2 max-w-[420px]">

                        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-black -translate-x-1/2" />
                        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-black -translate-y-1/2" />

                        {historyItems.map((item) => (
                            <HistoryCard
                                key={item.value}
                                value={item.value}
                                title={item.title}
                                description={item.description}
                            />
                        ))}
                    </div>

                    <div className="max-w-xl">
                        <p className="mb-6 leading-relaxed">
                            {t("history.paragraph1")}
                        </p>

                        <p className="mb-6 leading-relaxed">
                            {t("history.paragraph2")}
                        </p>

                        <p className="mb-6 leading-relaxed">
                            {t("history.paragraph3")}
                        </p>

                        <p className="text-drox360-orange mb-6 leading-relaxed">
                            {t("history.quote")}
                        </p>

                        <p className="leading-relaxed">
                            {t("history.paragraph4")}
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}