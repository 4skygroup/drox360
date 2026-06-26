export default function MentionsLegales() {
    const sections = [
        {
            title: "Éditeur du site",
            content: (
                <>
                    <p>
                        Le site Drox360, accessible à l'adresse{" "}
                        <a
                            href="https://drox360.com/"
                            className="underline"
                        >
                            https://drox360.com/
                        </a>
                        , est édité par :
                    </p>

                    <ul className="mt-3 space-y-1 list-none">
                        <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" />
                            Société : Visuance Agency
                        </li>

                        <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" />
                            Email :
                            <a
                                href="mailto:contact@visuanceagency.com"
                                className="underline ml-1"
                            >
                                contact@visuanceagency.com
                            </a>
                        </li>
                    </ul>
                </>
            ),
        },
        {
            title: "Hébergement",
            content: (
                <ul className="space-y-1 list-none">
                    <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" />
                        Hébergeur : OVH Cloud
                    </li>

                    <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" />
                        Site web :
                        <a
                            href="https://www.ovhcloud.com/"
                            className="underline ml-1"
                        >
                            https://www.ovhcloud.com/
                        </a>
                    </li>
                </ul>
            ),
        },
        {
            title: "Activité",
            content: (
                <>
                    <p>
                        Drox360 est une solution technologique spécialisée dans
                        la digitalisation et l'optimisation de processus
                        métiers, incluant notamment :
                    </p>

                    <ul className="mt-3 space-y-1 list-none">
                        {[
                            "Plateforme digitale / SaaS",
                            "Automatisation et gestion de données",
                            "Solutions technologiques et intégrations système",
                            "Outils d'analyse et de performance",
                            "Développement de solutions intelligentes et connectées",
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
            title: "Propriété intellectuelle",
            content: (
                <p>
                    L'ensemble des contenus présents sur le site Drox360
                    (textes, images, logos, interfaces, code, documents,
                    structure, etc.) est protégé par les lois relatives à la
                    propriété intellectuelle.
                    <br />
                    <br />
                    Toute reproduction, représentation, modification ou
                    exploitation, totale ou partielle, sans autorisation
                    préalable écrite est strictement interdite.
                </p>
            ),
        },
        {
            title: "Responsabilité",
            content: (
                <>
                    <p>
                        Drox360 s'efforce de fournir des informations fiables
                        et à jour. Cependant, l'éditeur ne peut être tenu
                        responsable :
                    </p>

                    <ul className="mt-3 space-y-1 list-none">
                        {[
                            "Des erreurs ou omissions",
                            "D'une interruption ou indisponibilité du site",
                            "De l'utilisation des informations ou services présentés",
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
            title: "Liens externes",
            content: (
                <p>
                    Le site peut contenir des liens vers des sites tiers.
                    Drox360 ne contrôle pas ces sites et décline toute
                    responsabilité quant à leur contenu.
                </p>
            ),
        },
        {
            title: "Données personnelles",
            content: (
                <p>
                    Les données personnelles collectées sur le site sont
                    traitées conformément à la réglementation en vigueur et à
                    la politique de confidentialité ci-dessous.
                </p>
            ),
        },
        {
            title: "Droit applicable",
            content: (
                <p>
                    Le site est soumis au droit français. Tout litige relève
                    de la compétence des tribunaux du siège social de Drox360.
                </p>
            ),
        },
    ];

    return (
        <main className="min-h-screen bg-drox360-light-gray text-black font-glacial px-6 py-20 md:px-16 lg:px-32">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-h6 mt-5 font-bold mb-2">
                    Mentions légales
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