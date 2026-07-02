import { useTranslation } from "react-i18next";

export default function MentionsLegales() {
    const { t } = useTranslation();

    const sections = [
        {
            title: t("mentionsLegales.editeur.title"),
            content: (
                <>
                    <p>
                        {t("mentionsLegales.editeur.introPrefix")}{" "}
                        <a href="https://drox360.com/" className="underline">
                            https://drox360.com/
                        </a>
                        {t("mentionsLegales.editeur.introSuffix")}
                    </p>

                    <ul className="mt-3 space-y-1 list-none">
                        <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" />
                            {t("mentionsLegales.editeur.societe")}
                        </li>

                        <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" />
                            {t("mentionsLegales.editeur.email")}
                            <a href="mailto:contact@visuanceagency.com" className="underline ml-1">
                                contact@visuanceagency.com
                            </a>
                        </li>
                    </ul>
                </>
            ),
        },
        {
            title: t("mentionsLegales.hebergement.title"),
            content: (
                <ul className="space-y-1 list-none">
                    <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" />
                        {t("mentionsLegales.hebergement.hebergeur")}
                    </li>

                    <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" />
                        {t("mentionsLegales.hebergement.siteWeb")}
                        <a href="https://www.ovhcloud.com/" className="underline ml-1">
                            https://www.ovhcloud.com/
                        </a>
                    </li>
                </ul>
            ),
        },
        {
            title: t("mentionsLegales.activite.title"),
            content: (
                <>
                    <p>{t("mentionsLegales.activite.intro")}</p>

                    <ul className="mt-3 space-y-1 list-none">
                        {(t("mentionsLegales.activite.items", { returnObjects: true }) as string[]).map((item) => (
                            <li key={item} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </>
            ),
        },
        {
            title: t("mentionsLegales.propriete.title"),
            content: (
                <p>
                    {t("mentionsLegales.propriete.line1")}
                    <br />
                    <br />
                    {t("mentionsLegales.propriete.line2")}
                </p>
            ),
        },
        {
            title: t("mentionsLegales.responsabilite.title"),
            content: (
                <>
                    <p>{t("mentionsLegales.responsabilite.intro")}</p>

                    <ul className="mt-3 space-y-1 list-none">
                        {(t("mentionsLegales.responsabilite.items", { returnObjects: true }) as string[]).map((item) => (
                            <li key={item} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </>
            ),
        },
        {
            title: t("mentionsLegales.liensExternes.title"),
            content: <p>{t("mentionsLegales.liensExternes.content")}</p>,
        },
        {
            title: t("mentionsLegales.donneesPersonnelles.title"),
            content: <p>{t("mentionsLegales.donneesPersonnelles.content")}</p>,
        },
        {
            title: t("mentionsLegales.droitApplicable.title"),
            content: <p>{t("mentionsLegales.droitApplicable.content")}</p>,
        },
    ];

    return (
        <main className="min-h-screen bg-drox360-light-gray text-black font-glacial px-6 py-20 md:px-16 lg:px-32">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-h6 mt-5 font-bold mb-2">
                    {t("mentionsLegales.pageTitle")}
                </h2>

                <div className="w-12 h-0.5 mb-12" />

                <div className="space-y-10">
                    {sections.map((section) => (
                        <section key={section.title}>
                            <h2 className="text-t2 font-bold mb-3">
                                {section.title}
                            </h2>

                            <div className="text-t5 leading-relaxed space-y-1">
                                {section.content}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </main>
    );
}