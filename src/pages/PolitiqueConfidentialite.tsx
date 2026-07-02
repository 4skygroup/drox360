import { useTranslation } from "react-i18next";

export default function PolitiqueConfidentialite() {
    const { t } = useTranslation();

    const sections = [
        {
            title: t("politiqueConfidentialite.collecte.title"),
            content: (
                <>
                    <p>{t("politiqueConfidentialite.collecte.intro")}</p>

                    <ul className="mt-3 space-y-1 list-none">
                        {(t("politiqueConfidentialite.collecte.items", { returnObjects: true }) as string[]).map((item) => (
                            <li key={item} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>

                    <p className="mt-4">{t("politiqueConfidentialite.collecte.outro")}</p>
                </>
            ),
        },
        {
            title: t("politiqueConfidentialite.utilisation.title"),
            content: (
                <ul className="space-y-1 list-none">
                    {(t("politiqueConfidentialite.utilisation.items", { returnObjects: true }) as string[]).map((item) => (
                        <li key={item} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" />
                            {item}
                        </li>
                    ))}
                </ul>
            ),
        },
        {
            title: t("politiqueConfidentialite.baseLegale.title"),
            content: (
                <ul className="space-y-1 list-none">
                    {(t("politiqueConfidentialite.baseLegale.items", { returnObjects: true }) as string[]).map((item) => (
                        <li key={item} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" />
                            {item}
                        </li>
                    ))}
                </ul>
            ),
        },
        {
            title: t("politiqueConfidentialite.conservation.title"),
            content: (
                <ul className="space-y-1 list-none">
                    {(t("politiqueConfidentialite.conservation.items", { returnObjects: true }) as string[]).map((item) => (
                        <li key={item} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" />
                            {item}
                        </li>
                    ))}
                </ul>
            ),
        },
        {
            title: t("politiqueConfidentialite.partage.title"),
            content: (
                <>
                    <p>{t("politiqueConfidentialite.partage.intro")}</p>

                    <ul className="mt-3 space-y-1 list-none">
                        {(t("politiqueConfidentialite.partage.items", { returnObjects: true }) as string[]).map((item) => (
                            <li key={item} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>

                    <p className="mt-4">{t("politiqueConfidentialite.partage.outro")}</p>
                </>
            ),
        },
        {
            title: t("politiqueConfidentialite.cookies.title"),
            content: (
                <>
                    <p>{t("politiqueConfidentialite.cookies.intro")}</p>

                    <ul className="mt-3 space-y-1 list-none">
                        {(t("politiqueConfidentialite.cookies.items", { returnObjects: true }) as string[]).map((item) => (
                            <li key={item} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>

                    <p className="mt-4">{t("politiqueConfidentialite.cookies.outro")}</p>
                </>
            ),
        },
        {
            title: t("politiqueConfidentialite.securite.title"),
            content: (
                <>
                    <p>{t("politiqueConfidentialite.securite.intro")}</p>

                    <ul className="mt-3 space-y-1 list-none">
                        {(t("politiqueConfidentialite.securite.items", { returnObjects: true }) as string[]).map((item) => (
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
            title: t("politiqueConfidentialite.droits.title"),
            content: (
                <>
                    <p>{t("politiqueConfidentialite.droits.intro")}</p>

                    <ul className="mt-3 space-y-1 list-none">
                        {(t("politiqueConfidentialite.droits.items", { returnObjects: true }) as string[]).map((item) => (
                            <li key={item} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>

                    <p className="mt-4">
                        {t("politiqueConfidentialite.droits.outro")}
                        <a href="mailto:contact@drox360.com" className="underline ml-1">
                            contact@drox360.com
                        </a>
                    </p>
                </>
            ),
        },
        {
            title: t("politiqueConfidentialite.modification.title"),
            content: <p>{t("politiqueConfidentialite.modification.content")}</p>,
        },
        {
            title: t("politiqueConfidentialite.derniereMiseAJour.title"),
            content: <p>{t("politiqueConfidentialite.derniereMiseAJour.date")}</p>,
        },
        {
            title: t("politiqueConfidentialite.contact.title"),
            content: (
                <a href="mailto:contact@drox360.com" className="underline">
                    contact@drox360.com
                </a>
            ),
        },
    ];

    return (
        <main className="min-h-screen bg-drox360-light-gray text-black font-glacial px-6 py-20 md:px-16 lg:px-32">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-h6 font-bold mt-5 mb-2">
                    {t("politiqueConfidentialite.pageTitle")}
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