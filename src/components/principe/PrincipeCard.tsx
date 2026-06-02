interface PrincipleCardProps {
    title: string;
    description: string;
}

export default function PrincipeCard({
    title,
    description,
}: PrincipleCardProps) {

    return (
        <div className="border-b border-drox360-dark-gray/30 py-8">
            <h3 className="font-bold text-t5 md:text-t4 mb-2 text-black">
                {title}
            </h3>

            <p className="font-glacial text-t6 md:text-t5 text-black max-w-5xl">
                {description}
            </p>
        </div>
    );
}