interface ServiceCardProps {
    title: string
    index: number
}

export default function ProcessCard({ title, index }: ServiceCardProps) {
    return (
        <div className="bg-gray-500 rounded-2xl w-full aspect-square shadow-sm relative">
            <span className="absolute inset-0 flex items-center justify-center text-t3 md:text-h7 font-bold text-white text-center">
                {title}
            </span>
            <span className="text-t6 text-drox360-dark-gray absolute bottom-6 right-6">
                /{index}
            </span>
        </div>
    )
}