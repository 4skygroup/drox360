import HistoryCard from "./HistoryCard";

interface HistoryItem {
    value: string;
    title: string;
    description: string;
}

const historyItems: HistoryItem[] = [
    {
        value: "2025",
        title: "Fondée à Paris",
        description: "France & International.",
    },
    {
        value: "Agile",
        title: "Équipe cœur",
        description: "Réseau de talents spécialisés.",
    },
    {
        value: "100%",
        title: "Indépendant",
        description: "Aucun actionnaire extérieur.",
    },
    {
        value: "Solo",
        title: "Intégrée",
        description: "Stratégie & Production unifiées.",
    },
];

export default function HistoryList() {
    return (
        <section className="bg-drox360-light-gray py-24 px-6 lg:px-20">
            <div className="max-w-6xl mx-auto">

                <p className="text-drox360-orange font-bold uppercase tracking-wide mb-10">
                    — Notre histoire
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
                            DROX360° est née d'un constat partagé par ses fondateurs :
                            trop de bonnes entreprises communiquent mal — pas par manque
                            d'idées, mais par manque de temps, d'outils et de méthode.
                        </p>

                        <p className="mb-6 leading-relaxed">
                            Et trop d'agences proposent des solutions standardisées à
                            des problèmes qui sont, par nature, uniques.
                        </p>

                        <p className="mb-6 leading-relaxed">
                            Une structure agile, sans couches hiérarchiques inutiles,
                            capable d'aller vite sans sacrifier l'exigence.
                        </p>

                        <p className="text-drox360-orange mb-6 leading-relaxed">
                            "On ne veut pas être l'agence qui fait tout.
                            On veut être celle qui fait bien."
                        </p>

                        <p className="leading-relaxed">
                            Aujourd'hui, DROX360° accompagne des entreprises en
                            croissance, des indépendants ambitieux et des marques
                            en cours de construction.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}