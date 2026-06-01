import React from "react";

// {
//     image: "/imgCardDrox.png",
//         status: "Livré",
//     title: "Stratégie de lancement — App mobile B2B",
//     description:
//     "Accompagnement startup : positionnement, messages clés et supports investisseurs.",
//         tags: ["Stratégie", "Brand", "2025"],
// },

export interface ProjectCardProps {
    image: string;
    status: string;
    title: string;
    description: string;
    tags: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    image,
    status,
    title,
    description,
    tags,
}) => {

    return (
        <div
            className="bg-white rounded-2xl overflow-hidden flex flex-col"
            style={{ boxShadow: "3px 3px 10px 0px rgba(0,0,0,0.25)" }}
        >
            {/* Image */}
            <div className="w-full aspect-video overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col gap-2">
                {/* Status badge */}
                <span className="text-t6 text-drox360-dark-gray border border-drox360-dark-gray rounded-full px-3 py-0.5 w-fit">
                  {status}
                </span>

                {/* Title */}
                <h3 className="text-t5 font-bold text-black leading-snug">{title}</h3>

                {/* Description */}
                <p className="text-t6 text-drox360-dark-gray leading-relaxed">
                    {description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-1">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-t6 text-black border border-drox360-input-gray rounded-full px-3 py-0.5"
                        >
                          {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;