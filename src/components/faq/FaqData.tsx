export interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

export const faqData: FAQItem[] = [
    {
        id: 1,
        question: "Drox 360 est-elle une agence ou un studio de production ?",
        answer:
            "Les deux, et bien plus encore. Drox 360 est un écosystème global qui combine la vision stratégique d’une agence conseil et la force de frappe opérationnelle d’un studio de production intégré (incluant la post-production). Nous brisons les silos traditionnels pour piloter vos projets de A à Z : de la conception à l’activation finale. Cette agilité garantit une exécution rapide, premium, et sans aucune dilution entre l’idée initiale et le livrable.",
    },
    {
        id: 2,
        question: "Quels types de clients accompagnez-vous ?",
        answer:
            "Nous collaborons avec des marques, des leaders sectoriels et des entreprises en pleine expansion, principalement dans les secteurs du luxe, du corporate et de l’entertainment, en France comme à l’international. Nos clients sont des organisations exigeantes qui ne cherchent pas des formats standardisés, mais du sens, de la désirabilité, une forte valeur ajoutée et un impact concret sur leur business.",
    },
    {
        id: 3,
        question: "À quel moment Drox 360 intervient-elle dans un projet ?",
        answer:
            "Notre modèle à 360° nous permet d'intervenir à chaque étape clé de votre développement, sur mesure :" +
            "Cadrage stratégique & Narratif : Définition de positionnement, stratégie de marque, et ingénierie de projet. " +
            "Conception créative & Digitale : Identité visuelle, concepts forts et écosystèmes digitaux. Production cross-canal : Production premium (film, photo, digital, formats immersifs et événementiels). " +
            "Déploiement & Performance : Stratégies d'activation, diffusion et optimisation de l'impact. " +
            "Notre force : Une flexibilité totale. Nous adaptons notre niveau d’intervention à vos enjeux réels, sans la rigidité des agences classiques, tout en garantissant une cohérence globale absolue."
    },
    {
        id: 4,
        question: "Comment travaillez-vous concrètement avec vos clients ?",
        answer:
            "En totale synergie et en co-création. Nous croyons aux circuits courts, aux échanges directs et transparents, et à une proximité forte avec vos équipes. Chaque projet est piloté par un commando dédié qui maîtrise aussi bien les enjeux financiers et stratégiques que les détails opérationnels. Nos maîtres-mots : exigence sur le fond, précision sur la forme, et respect absolu des délais.",
    },

    {
        id: 5,
        question: "Quels budgets faut-il prévoir pour travailler avec Drox 360 ?",
        answer:
            "Il n'y a pas de réponse standard car nous ne faisons pas de propositions sur étagère. Drox 360 intervient aussi bien sur des activations stratégiques ciblées que sur la direction globale de projets d'envergure. Nous construisons toujours des dispositifs optimisés, transparents et strictement alignés avec vos objectifs de retour sur investissement.",
    },

    {
        id: 6,
        question: "Qu’est-ce qui différencie Drox 360 d’une agence classique ?",
        answer:
            "L'alignement parfait entre la vision et l'exécution. Une agence classique conseille mais sous-traite ; un studio produit mais manque parfois de recul stratégique. Drox 360 fusionne ces deux mondes. Nous combinons la hauteur de vue du conseil 360° et la maîtrise technique d'un studio intégré. Nous naviguons avec agilité entre la marque, le contenu, la culture tech et les impératifs business pour créer des dispositifs performants et durables.",
    },
];
