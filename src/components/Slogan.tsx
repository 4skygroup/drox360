import { useEffect, useRef, useState } from "react";

export default function ReloadedHero() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const section = sectionRef.current;
            if (!section) return;
            const rect = section.getBoundingClientRect();
            const sectionHeight = section.offsetHeight;
            const viewportHeight = window.innerHeight;
            const scrolled = -rect.top;
            const total = sectionHeight - viewportHeight;
            const p = Math.min(Math.max(scrolled / total, 0), 1);
            setProgress(p);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const titleScale = 1.3 - 0.3 * progress;
    const titleY = (1 - progress) * 30;
    const subtitleOpacity = Math.max(0, (progress - 0.5) * 2);
    const subtitleY = 20 * (1 - Math.max(0, (progress - 0.5) * 2));

    return (
        <div ref={sectionRef} className="relative h-[110vh]">
            <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden">

                <div
                    className="w-full max-w-[900px] px-6 text-center origin-center"
                    style={{ transform: `scale(${titleScale}) translateY(${titleY}px)`, transition: "transform 0.05s linear" }}
                >
                    <h2 className="inline-flex items-center gap-[0.15em] whitespace-nowrap text-t3 md:text-5xl lg:text-6xl font-black leading-[1.05] tracking-[-0.02em] text-[#111111]">
                        <span className="inline-flex items-center justify-center w-[1em] h-[1em] border-[0.08em] border-[#111111] rounded-full shrink-0">
                          <span className="text-[0.65em] font-black leading-none">R</span>
                        </span>
                        eloaded for what's next.
                    </h2>
                </div>

                <div
                    className="mt-8 max-w-screen-md px-6 text-center"
                    style={{ opacity: subtitleOpacity, transform: `translateY(${subtitleY}px)`, transition: "opacity 0.05s linear, transform 0.05s linear" }}
                >
                    <p className="text-t4 md:text-t3 font-normal leading-[1.7] text-[#111111]">
                        La communication a changé :<br />
                        trop de formats, trop de bruit, pas assez
                        d'impact. Les marques et les entreprises
                        n'ont plus besoin de plus de contenu, mais
                        de plus de sens et d'efficacité.{" "}
                        <span className="text-drox360-dark-gray">Spoa®</span>
                        (reloaded) est notre réponse stratégique.
                        Votre partenaire pensé pour l'après.
                    </p>
                    <p className="mt-3 text-xs font-normal text-[#111111]">
                        For <span className="text-drox360-dark-gray italic">what's next.</span>
                    </p>
                </div>

            </div>
        </div>
    );
}