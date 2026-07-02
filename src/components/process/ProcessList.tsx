import { useTranslation } from "react-i18next"
import { Crosshair, Eye, Layers, Send, type LucideIcon } from "lucide-react"
import ProcessCard from "./ProcessCard"

const icons: LucideIcon[] = [Crosshair, Eye, Layers, Send]

interface ServiceTranslation {
    title: string
    description: string
}

export default function ProcessList() {
    const { t } = useTranslation()

    const services = t("process.services", { returnObjects: true }) as ServiceTranslation[]

    const items = services.map((s, i) => ({
        title: s.title,
        description: s.description,
        index: i + 1,
        Icon: icons[i % icons.length],
    }))

    const doubled = [...items, ...items]

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