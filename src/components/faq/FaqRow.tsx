import { useTranslation } from "react-i18next";

const PlusIcon = ({ isOpen }: { isOpen: boolean }) => (
    <div
        className="shrink-0 w-5 h-5 rounded-full bg-black flex items-center justify-center transition-transform duration-300 ease-in-out"
        style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
    >
        <svg
            width="12"
            height="12"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M7 2V12M2 7H12"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    </div>
);

interface FAQRowProps {
    id: string;
    isOpen: boolean;
    onToggle: () => void;
}

const FAQRow = ({ id, isOpen, onToggle }: FAQRowProps) => {
    const { t } = useTranslation();

    return (
        <div className="border-b border-[#2A2A2A]">
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between py-5 px-0 text-left group"
                aria-expanded={isOpen}
            >
                <span className="font-glacial text-t5 transition-colors duration-200 text-black pr-4">
                    {t(`faq.items.${id}.question`)}
                </span>

                <PlusIcon isOpen={isOpen} />
            </button>

            <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                    maxHeight: isOpen ? "500px" : "0px",
                    opacity: isOpen ? 1 : 0,
                }}
            >
                <p className="font-glacial text-t5 text-black pb-5 leading-relaxed">
                    {t(`faq.items.${id}.answer`)}
                </p>
            </div>
        </div>
    );
};

export default FAQRow;