import ServiceCard from "./ServiceCard";

export interface Expertise {
    title: string;
    description: string;
}

export interface BrandCard {
    tag: string;
    title: string;
    titleHighlight: string;
    description: string;
    expertises: Expertise[];
}

const services: BrandCard[] = [
    {
        tag: "BRAND & CONTENT",
        title: "Brand",
        titleHighlight: "Content",
        description: "Nous définissons, réfléchissons et vous aidons à trouver votre identité et votre voix pour vos marques.",
        expertises: [
            { title: "Identité Éditoriale", description: "Définition de la ligne de conduite textuelle, du ton de voix et des valeurs fondamentales qui porteront vos messages." },
            { title: "Brand Storytelling", description: "Conception de récits immersifs pour transformer votre marque en une expérience mémorable pour votre audience." },
            { title: "Création de Contenu", description: "Production de ressources créatives sur-mesure (copywriting, visuels) pour alimenter vos différents canaux." },
            { title: "Direction Artistique", description: "Supervision globale de l'esthétique de votre marque pour garantir une cohérence irréprochable sur tous les supports." },
        ],
    },
    {
        tag: "BRAND & CONTENT",
        title: "Digital",
        titleHighlight: "Production",
        description: "D'images studio en prises de vue réel. Nous produisons des contenus qui vous ressemblent vraiment.",
        expertises: [
            { title: "Films de Marque", description: "Vidéos cinématiques haute définition destinées à asseoir votre notoriété et présenter votre univers de manière prestigieuse." },
            { title: "Vidéos Produits", description: "Mise en valeur technique et esthétique de vos produits via des plans macro, des mouvements dynamiques et un éclairage studio." },
            { title: "Shooting Photo", description: "Photographie professionnelle (lifestyle, packshot, portrait) pour une banque d'images pregnante et haut de gamme." },
            { title: "Formats Sociaux (Reels)", description: "Création de contenu au vertical aux rythmes et optimisés pour les algorithmes Instagram, TikTok et Shorts." },
        ],
    },
    {
        tag: "BRAND & CONTENT",
        title: "Creative",
        titleHighlight: "Strategy",
        description: "C'est quoi votre différence ? Nous vous aidons à la trouver et à l'incarner au travers de vos contenus.",
        expertises: [
            { title: "Audit & Positionnement", description: "Analyse profonde de votre présence actuelle et repositionnement stratégique face à la concurrence." },
            { title: "Architecture de Contenu", description: "Organisation logique et stratégique de vos plans de contenu pour guider l'utilisateur vers ses prochaines actions." },
            { title: "Recommandations Créatives", description: "Génération de concepts novateurs et de pistes de création pour tester de seniors bébés et surprendre votre marché." },
            { title: "Définition des Audiences", description: "Création de fiches de personas pour adapter le message aux attentes réelles de vos futurs clients." },
        ],
    },
    {
        tag: "BRAND & CONTENT",
        title: "Social",
        titleHighlight: "Media",
        description: "Votre présence sur les réseaux sociaux ne doit plus être un simple problème à résoudre : on la transforme.",
        expertises: [
            { title: "Stratégie de Plateforme", description: "Sélection et optimisation des réseaux sociaux les plus pertinents par rapport à vos objectifs business." },
            { title: "Calendrier Éditorial", description: "Planification rigoureuse des publications pour maintenir une présence régulière et travailler auprès de vos audiences." },
            { title: "Gestion & Animation", description: "Modération, interactions avec la communauté et veille quotidienne pour tenir votre marque en temps réel." },
            { title: "Reporting & Analyse", description: "Suivi précis des KPIs (engagement, portée, conversion) pour ajuster la stratégie en fonction des performances réelles." },
        ],
    },
];

export default function ServiceList() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            {services.map((card) => (
                <ServiceCard key={card.title} card={card} />
            ))}
        </div>
    );
}