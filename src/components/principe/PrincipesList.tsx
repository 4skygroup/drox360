import PrincipleCard from "./PrincipeCard.tsx";

const principles = [
    {
        title: "L'honnêteté avant tout",
        description:
            "On dit ce qu'on pense. Si votre idée n'est pas la bonne, on vous le dit — avec des arguments et une alternative.",
    },
    {
        title: "La qualité sans compromis",
        description:
            "On ne livre pas quelque chose dont on n'est pas fiers. Pas par ego — par respect pour votre investissement.",
    },
    {
        title: "L'agilité comme avantage",
        description:
            "Notre petite taille est une force. On prend des décisions vite, on s'adapte vite, et on communique directement.",
    },
    {
        title: "La durée comme objectif",
        description:
            "On cherche à construire des relations longues avec des clients qui nous font confiance.",
    },
    {
        title: "La curiosité permanente",
        description:
            "On s'intéresse à vos secteurs et à vos enjeux. Une agence qui ne comprend pas votre réalité ne peut pas bien vous représenter.",
    },
    {
        title: "La transparence financière",
        description:
            "Devis clairs, postes détaillés, zéro frais cachés. Vous savez toujours où va votre argent.",
    },
];

export default function PrincipesList() {
    return (
        <section className="bg-drox360-light-gray py-20 px-6 md:px-12 lg:px-20">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-4">
                    <div className="w-6 h-[2px] bg-drox360-orange" />

                    <span className="font-bold uppercase text-drox360-orange tracking-wide">
                        Nos principes
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