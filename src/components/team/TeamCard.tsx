interface TeamCardProps {
    initials: string;
    role: string;
    name: string;
    description: string;
}

export default function TeamCard({
    initials,
    role,
    name,
    description,
}: TeamCardProps) {

    return (
        <div className="relative flex flex-col gap-4 max-w-xs">
            {/* Initiales en fond */}
            <span className="absolute -top-6 left-0 text-6xl font-bold text-black/20 select-none">
                {initials}
            </span>

            {/* Poste */}
            <p className="text-drox360-orange font-bold text-sm uppercase">
                {role}
            </p>

            {/* Nom */}
            <h3 className="font-bold text-t4 text-black">
                {name}
            </h3>

            {/* Description */}
            <p className="text-t5 text-black leading-relaxed">
                {description}
            </p>
        </div>
    );
}