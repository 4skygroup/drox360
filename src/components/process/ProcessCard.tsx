import { type LucideIcon } from "lucide-react"

interface ServiceCardProps {
    title: string
    description: string
    index: number
    Icon: LucideIcon
}

export default function ProcessCard({ title, description, index, Icon }: ServiceCardProps) {
    return (
        <div className="relative flex flex-col h-[280px] rounded-2xl bg-black p-8">
            <Icon
                size={40}
                color="#ffffff"
                strokeWidth={1.4}
                className="mb-10"
            />

            <h3 className="text-t5 font-bold text-white mb-4">
                {title}
            </h3>

            <p className="text-t6 text-drox360-input-gray max-w-[240px]">
                {description}
            </p>

            <span className="absolute bottom-6 right-6 text-t6 text-drox360-input-gray">
                /{index}
            </span>
        </div>
    )
}