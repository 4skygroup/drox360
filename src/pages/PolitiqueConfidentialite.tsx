export default function PolitiqueConfidentialite() {
    const sections = [
        {
            title: "Collecte des données",
            content: (
                <>
                    <p>Drox360 peut collecter des données lorsque vous :</p>

                    <ul className="mt-3 space-y-1 list-none">
                        {[
                            "Utilisez la plateforme ou le site",
                            "Remplissez un formulaire de contact ou de démonstration",
                            "Naviguez sur les pages du site",
                        ].map((item) => (
                            <li key={item} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>

                    <p className="mt-4">
                        Les données peuvent inclure : nom, prénom, email,
                        téléphone, entreprise, données techniques, adresse IP
                        et logs de connexion.
                    </p>
                </>
            ),
        },
        {
            title: "Utilisation des données",
            content: (
                <ul className="space-y-1 list-none">
                    {[
                        "Fournir et améliorer les services de la plateforme",
                        "Gérer les demandes de contact et de démonstration",
                        "Assurer le support utilisateur",
                        "Améliorer les performances et la sécurité du système",
                        "Réaliser des analyses d'usage et des statistiques",
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" />
                            {item}
                        </li>
                    ))}
                </ul>
            ),
        },
        {
            title: "Base légale",
            content: (
                <ul className="space-y-1 list-none">
                    {[
                        "Le consentement de l'utilisateur",
                        "L'exécution d'un contrat ou d'une demande de service",
                        "L'intérêt légitime de l'entreprise (amélioration du produit et sécurité)",
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" />
                            {item}
                        </li>
                    ))}
                </ul>
            ),
        },
        {
            title: "Durée de conservation",
            content: (
                <ul className="space-y-1 list-none">
                    <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" />
                        Utilisateurs prospects : jusqu'à 3 ans après le dernier
                        contact.
                    </li>

                    <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" />
                        Clients / utilisateurs actifs : durée du contrat +
                        obligations légales.
                    </li>

                    <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" />
                        Logs techniques : durée limitée pour la sécurité et la
                        maintenance.
                    </li>
                </ul>
            ),
        },
        {
            title: "Partage des données",
            content: (
                <>
                    <p>
                        Les données peuvent être partagées uniquement avec :
                    </p>

                    <ul className="mt-3 space-y-1 list-none">
                        {[
                            "Prestataires techniques (hébergement cloud, analytics, infrastructure)",
                            "Outils nécessaires au fonctionnement de la plateforme",
                            "Autorités compétentes en cas d'obligation légale",
                        ].map((item) => (
                            <li key={item} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>

                    <p className="mt-4">
                        Aucune donnée n'est vendue ou commercialisée.
                    </p>
                </>
            ),
        },
        {
            title: "Cookies",
            content: (
                <>
                    <p>Drox360 utilise des cookies afin de :</p>

                    <ul className="mt-3 space-y-1 list-none">
                        {[
                            "Assurer le bon fonctionnement du site",
                            "Mesurer l'audience et la performance",
                            "Améliorer l'expérience utilisateur",
                            "Sécuriser les accès à la plateforme",
                        ].map((item) => (
                            <li key={item} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>

                    <p className="mt-4">
                        Un bandeau de gestion des cookies permet de
                        personnaliser les préférences.
                    </p>
                </>
            ),
        },
        {
            title: "Sécurité",
            content: (
                <>
                    <p>
                        Drox360 met en place des mesures avancées de sécurité :
                    </p>

                    <ul className="mt-3 space-y-1 list-none">
                        {[
                            "Chiffrement des données",
                            "Contrôle des accès",
                            "Surveillance des systèmes",
                            "Protection contre les attaques et intrusions",
                        ].map((item) => (
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
            title: "Vos droits (RGPD)",
            content: (
                <>
                    <p>
                        Conformément au RGPD, vous disposez des droits
                        suivants :
                    </p>

                    <ul className="mt-3 space-y-1 list-none">
                        {[
                            "Droit d'accès",
                            "Droit de rectification",
                            "Droit de suppression",
                            "Droit d'opposition",
                            "Droit à la portabilité des données",
                        ].map((item) => (
                            <li key={item} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>

                    <p className="mt-4">
                        Pour exercer vos droits :
                        <a
                            href="mailto:contact@drox360.com"
                            className="underline ml-1"
                        >
                            contact@drox360.com
                        </a>
                    </p>
                </>
            ),
        },
        {
            title: "Modification",
            content: (
                <p>
                    Cette politique peut être mise à jour afin de rester
                    conforme aux évolutions légales et techniques.
                </p>
            ),
        },
        {
            title: "Dernière mise à jour",
            content: <p>24/06/2026</p>,
        },
        {
            title: "Contact",
            content: (
                <a
                    href="mailto:contact@drox360.com"
                    className="underline"
                >
                    contact@drox360.com
                </a>
            ),
        },
    ];

    return (
        <main className="min-h-screen bg-drox360-light-gray text-black font-glacial px-6 py-20 md:px-16 lg:px-32">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-h6 font-bold mt-5 mb-2">
                    Politique de confidentialité
                </h1>

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