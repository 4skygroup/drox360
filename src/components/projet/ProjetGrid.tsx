import React from "react";
import ProjectCard, {type ProjectCardProps} from "./ProjetCard.tsx";

const projects: ProjectCardProps[] = [
    {
        image: "/imgCardDrox.png",
        status: "Livré",
        title: "Stratégie de lancement — App mobile B2B",
        description:
            "Accompagnement startup : positionnement, messages clés et supports investisseurs.",
        tags: ["Stratégie", "Brand", "2025"],
    },
    {
        image: "/imgCardDrox.png",
        status: "Livré",
        title: "Stratégie de lancement — App mobile B2B",
        description:
            "Accompagnement startup : positionnement, messages clés et supports investisseurs.",
        tags: ["Stratégie", "Brand", "2025"],
    },
    {
        image: "/imgCardDrox.png",
        status: "Livré",
        title: "Stratégie de lancement — App mobile B2B",
        description:
            "Accompagnement startup : positionnement, messages clés et supports investisseurs.",
        tags: ["Stratégie", "Brand", "2025"],
    },
    {
        image: "/imgCardDrox.png",
        status: "Livré",
        title: "Stratégie de lancement — App mobile B2B",
        description:
            "Accompagnement startup : positionnement, messages clés et supports investisseurs.",
        tags: ["Stratégie", "Brand", "2025"],
    },
    {
        image: "/imgCardDrox.png",
        status: "Livré",
        title: "Stratégie de lancement — App mobile B2B",
        description:
            "Accompagnement startup : positionnement, messages clés et supports investisseurs.",
        tags: ["Stratégie", "Brand", "2025"],
    },
    {
        image: "/imgCardDrox.png",
        status: "Livré",
        title: "Stratégie de lancement — App mobile B2B",
        description:
            "Accompagnement startup : positionnement, messages clés et supports investisseurs.",
        tags: ["Stratégie", "Brand", "2025"],
    },
];

const ProjectsGrid: React.FC = () => {
    return (
        <section className="px-6 py-12 max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
                <p className="text-t5 font-bold text-drox360-orange uppercase tracking-widest mb-3">
                    — Projets & Réalisations
                </p>
                <p className="text-t5 text-drox360-dark-gray max-w-7xl">
                    DROX360° est une agence en construction. Cette page évoluera au fil de
                    nos collaborations. Ce que vous voyez ici reflète notre vision créative
                    et le type de projets que nous accompagnons — certains sont des
                    références concrètes, d'autres des orientations créatives.
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
};

export default ProjectsGrid;