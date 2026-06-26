import { Crosshair, Eye, Layers, Send } from "lucide-react"
import ProcessCard from "./ProcessCard"

const services = [
    {
        title: "Stratégie de marque",
        description: "Nous définissons le positionnement, la promesse et les messages clés pour construire une marque solide et cohérente.",
        index: 1,
        Icon: Crosshair,
    },
    {
        title: "Direction créative",
        description: "Nous imaginons des concepts, un ton, un univers visuel et des références fortes pour guider toute la communication.",
        index: 2,
        Icon: Eye,
    },
    {
        title: "Identité visuelle",
        description: "Nous créons ou structurons les éléments visuels qui rendent votre marque reconnaissable et durable.",
        index: 3,
        Icon: Layers,
    },
    {
        title: "Déploiement",
        description: "Nous déclinons votre image sur tous les supports : contenus, campagnes, réseaux sociaux, présentations, print, digital.",
        index: 4,
        Icon: Send,
    },
]

export default function ProcessList() {
    return (
        <section className="max-w-7xl mx-auto p-8 md:p-12 lg:p-10">
            <h2 className="text-h7 md:text-h6 font-bold text-black mb-10">
                Drox c'est :
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((s) => (
                    <ProcessCard
                        key={s.index}
                        title={s.title}
                        description={s.description}
                        index={s.index}
                        Icon={s.Icon}
                    />
                ))}
            </div>
        </section>
    )
}