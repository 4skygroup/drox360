import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function Hero() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const tags = [
        t("hero.tags.creative_direction"),
        t("hero.tags.content_production"),
        t("hero.tags.brand_strategy"),
        t("hero.tags.social_media"),
    ];

    return (
        <section className="min-h-screen bg-drox360-light-gray flex items-center px-6 md:px-16 lg:px-24">
            <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">

                {/* Left Content */}
                <div className="flex-1 flex flex-col gap-6 max-w-xl">

                    {/* Title */}
                    {/*<div className="flex items-baseline gap-3">*/}
                    {/*    <h2 className="text-h5 md:text-h3 font-bold text-black leading-none tracking-tight">*/}
                    {/*        DROX*/}
                    {/*    </h2>*/}
                    {/*    <span className="text-h5 md:text-h3 font-bold text-drox360-orange leading-none tracking-tight">*/}
                    {/*      360°*/}
                    {/*    </span>*/}
                    {/*    <img src="/logoDrox.png" alt="drox 360" className="h-15" />*/}
                    {/*</div>*/}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="border border-black/30 text-black text-t6 px-3 py-1 rounded-full tracking-wide"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Description */}
                    <p className="text-t5 text-black/70 leading-relaxed max-w-sm md:max-w-lg">
                        {t("hero.description")}
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-wrap items-center gap-4 mt-2">
                        <button
                            className="flex items-center gap-2 bg-drox360-orange text-white text-t5 font-bold px-6 py-3 rounded-full hover:bg-orange-600 transition-colors duration-200"
                            onClick={() => navigate("/contact")}
                        >
                            {t("hero.cta")}
                            <span className="text-t4">→</span>
                        </button>
                        {/*<button*/}
                        {/*    className="bg-black text-white text-t5 font-bold px-6 py-3 rounded-full hover:bg-black/80 transition-colors duration-200"*/}
                        {/*    onClick={() => navigate("/projets")}*/}
                        {/*>*/}
                        {/*    Nos Projets*/}
                        {/*</button>*/}
                    </div>
                </div>

                {/* Right — Logo Card */}
                <div className="flex-shrink-0">
                    <div className="w-72 h-72 md:w-[420px] md:h-[420px] rounded-3xl overflow-hidden shadow-2xl ">
                        <img
                            src="/heroImg.jpg"
                            alt={t("hero.logo_alt")}
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}