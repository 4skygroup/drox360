import FAQRow from "./FaqRow.tsx";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const { t } = useTranslation();

    const faqIds = Object.keys(
        t("faq.items", { returnObjects: true }) as Record<string, unknown>
    );

    return (
        <section className="w-full flex flex-col md:flex-row justify-center items-start px-6 py-16 gap-12">
            <div className="flex flex-col">
                <h2 className="font-glacial text-h7 font-bold text-black tracking-widest uppercase">
                    {t("faq.title")}
                </h2>

                <p>
                    {t("faq.subtitleLine1")}
                    <br />
                    {t("faq.subtitleLine2")}
                </p>
            </div>

            <div className="w-full max-w-2xl">
                {faqIds.map((id, index) => (
                    <FAQRow
                        key={id}
                        id={id}
                        isOpen={openIndex === index}
                        onToggle={() =>
                            setOpenIndex(openIndex === index ? null : index)
                        }
                    />
                ))}
            </div>
        </section>
    );
};

export default FAQ;