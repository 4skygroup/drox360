import TeamCard from "./TeamCard";

const teamMembers = [
    {
        initials: "AM",
        role: "Fondateur • Direction créative",
        name: "Alexandre Morin",
        description:
            "Directeur créatif avec un parcours entre agences et production audiovisuelle. Il pilote la vision créative de chaque projet.",
    },
    {
        initials: "LC",
        role: "Stratégie & Contenu",
        name: "Léa Castaing",
        description:
            "Spécialiste en brand content. Elle transforme les briefs complexes en récits qui parlent vraiment aux bonnes personnes.",
    },
    {
        initials: "RB",
        role: "Production • Post-prod",
        name: "Romain Blanc",
        description:
            "Chef de projet production, il coordonne les tournages et supervise la post-production. Il garantit la perfection technique.",
    },
];

export default function TeamList() {
    return (
        <section className="w-full bg-drox360-light-gray py-20 px-6 md:px-12">
            <div className="max-w-5xl mx-auto">
                {/* Titre */}
                <div className="flex items-center gap-3 mb-16">
                    <div className="w-6 h-[2px] bg-drox360-orange" />
                    <span className="text-drox360-orange font-bold uppercase">
                        L'équipe
                    </span>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    {teamMembers.map((member) => (
                        <TeamCard
                            key={member.name}
                            {...member}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}