interface HistoryCardProps {
    value: string;
    title: string;
    description: string;
}

export default function HistoryCard({
    value,
    title,
    description,
}: HistoryCardProps) {

    return (
        <div className="p-8 min-h-[180px] flex flex-col justify-center">
            <h3 className="font-glacial text-t3 md:text-h6 font-bold text-drox360-dark-gray mb-4">
                {value}
            </h3>

            <h4 className="font-bold text-t5 mb-3">
                {title}
            </h4>

            <p className="text-t5">
                {description}
            </p>
        </div>
    );
}