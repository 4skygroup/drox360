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

const doubled = [...services, ...services]

export default function ProcessList() {
    return (
        <section className="py-10 overflow-hidden">
            <div className="flex animate-slide-left gap-6 w-max">
                {doubled.map((s, i) => (
                    <div key={i} className="w-[280px] shrink-0">
                        <ProcessCard
                            title={s.title}
                            description={s.description}
                            index={s.index}
                            Icon={s.Icon}
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}