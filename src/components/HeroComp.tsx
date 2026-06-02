interface HeroCompProps {
    blackText?: string;
    orangeText?: string;
    description: string;
}

export default function HeroComp({
    blackText,
    orangeText,
    description,
}: HeroCompProps) {

    return (
        <section className="min-h-screen bg-drox360-light-gray flex items-center justify-center px-6 md:px-16 lg:px-24">
            <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6">

                {/* Title */}
                <h2 className="text-h6 md:text-h3 font-bold leading-none tracking-tight text-center">
                    {blackText && (
                        <span className="text-black">
                            {blackText}
                        </span>
                    )}

                    {orangeText && (
                        <span className="text-drox360-orange">
                            {" "}{orangeText}
                        </span>
                    )}
                </h2>

                {/* Description */}
                <p className="text-t5 text-black/70 leading-relaxed max-w-2xl">
                    {description}
                </p>
            </div>
        </section>
    );
}