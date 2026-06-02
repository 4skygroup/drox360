import React from "react";
import { useNavigate } from "react-router-dom";
import ProjectCard from "../components/projet/ProjetCard";
import {projects} from "../components/projet/ProjetsData.ts";

const AllProjects: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section className="my-16 max-w-6xl mx-auto px-8 py-12">
            {/* Header */}
            <div className="mb-8">
                <p className="text-t5 font-bold text-drox360-orange uppercase tracking-widest mb-3">
                    — Tous les projets
                </p>
                <p className="text-t5 text-drox360-dark-gray leading-relaxed">
                    DROX360 est une agence en construction. Cette page évoluera au fil de nos collaborations.
                    Ce que vous voyez ici reflète notre vision créative et le type de projets que nous
                    accompagnons — certains sont des références concrètes, d'autres des orientations créatives.
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="cursor-pointer"
                        onClick={() => navigate("/services")}
                    >
                        <ProjectCard {...project} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AllProjects;