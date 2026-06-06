import { type BrandCard } from "./ServiceList";

function ExpertiseItem({ title, description }: { title: string; description: string }) {
    return (
        <div className="mb-4 last:mb-0">
            <p className="text-t5 font-bold text-black mb-0.5">{title}</p>
            <p className="text-t5 text-drox360-dark-gray leading-relaxed">{description}</p>
        </div>
    );
}

export default function ServiceCard({ card }: { card: BrandCard }) {
    return (
        <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden mb-4" style={{ boxShadow: "3px 3px 10px 0px rgba(0,0,0,0.15)" }}>
            <div className="flex flex-col justify-center gap-4 p-6 md:p-8 md:w-64 lg:w-72 flex-shrink-0 border-b md:border-b-0 md:border-r border-drox360-light-gray">
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <span className="block w-6 h-px bg-drox360-orange" />
                        <span className="text-t7 font-bold tracking-widest text-drox360-orange uppercase">{card.tag}</span>
                    </div>
                    <h2 className="text-h6 font-bold leading-tight text-black">
                        {card.title}<br />
                        <span className="text-drox360-orange">{card.titleHighlight}</span>
                    </h2>
                </div>
                <p className="text-t6 text-drox360-dark-gray leading-relaxed">{card.description}</p>
            </div>

            <div className="flex-1 p-6 md:p-8">
                <p className="text-t6 font-bold tracking-widest text-drox360-orange uppercase mb-5">EXPERTISES DÉTAILLÉES</p>
                <div className="grid grid-cols-1 gap-y-4">
                    {card.expertises.map((exp) => (
                        <ExpertiseItem key={exp.title} title={exp.title} description={exp.description} />
                    ))}
                </div>
            </div>
        </div>
    );
}