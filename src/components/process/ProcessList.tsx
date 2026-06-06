import ServiceCard from "./ProcessCard.tsx"

const services = [
    { title: "Lorem.", index: 1 },
    { title: "Lorem.", index: 2 },
    { title: "Lorem.", index: 3 },
    { title: "Lorem.", index: 4 },
]

export default function ProcessList() {
    return (
        <section className="max-w-7xl mx-auto min-h-screen p-8 md:p-12 lg:p-10">
            <h2 className="text-h7 md:text-h6 font-bold text-black leading-tight mb-10 md:mb-14">
                Drox c'est :
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                {services.map((s) => (
                    <ServiceCard key={s.index} title={s.title} index={s.index} />
                ))}
            </div>
        </section>
    )
}