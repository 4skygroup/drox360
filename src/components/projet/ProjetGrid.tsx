import React from "react";
import { useNavigate } from "react-router-dom";
import {projects} from "./ProjetsData.ts";
import ProjectCard from "./ProjetCard.tsx";

const row1 = [...projects, ...projects];
const row2 = [...projects, ...projects];

const ProjectsGrid: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section className="py-12">

            {/* Header */}
            <div className="px-6 mb-8 max-w-7xl mx-auto">
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

            {/* padding global */}
            <div className="px-8 md:px-12 lg:px-32">

                <div className="relative">
                    {/* zone visible */}
                    <div className="overflow-hidden pb-6">

                        <div className="flex flex-col gap-6">

                            {/* Ligne 1 */}
                            <div
                                className="flex animate-slide-left gap-[0.66rem]"
                                style={{ width: "max-content" }}
                            >
                                {row1.map((project, index) => (
                                    <div
                                        key={index}
                                        className="w-[320px] md:w-[360px] lg:w-[400px] flex-shrink-0"
                                        onClick={() => navigate("/projets")}
                                    >
                                        <ProjectCard {...project} />
                                    </div>
                                ))}
                            </div>

                            {/* Ligne 2 */}
                            <div
                                className="flex animate-slide-right gap-[0.66rem]"
                                style={{ width: "max-content" }}
                            >
                                {row2.map((project, index) => (
                                    <div
                                        key={index}
                                        className="w-[320px] md:w-[360px] lg:w-[400px] flex-shrink-0"
                                        onClick={() => navigate("/projets")}
                                    >
                                        <ProjectCard {...project} />
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default ProjectsGrid;