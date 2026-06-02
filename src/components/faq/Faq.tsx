import { faqData } from "./FaqData.tsx";
import FAQRow from "./FaqRow.tsx";
import {useState} from "react";

const FAQ = () => {

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="w-full flex flex-col md:flex-row justify-center items-start px-6 py-16 gap-12">

            <div className="flex flex-col">
                <p className="text-t5 font-bold text-drox360-orange uppercase tracking-widest mb-3">
                    — Projets & Réalisations
                </p>

                <h2 className="font-glacial text-h7 font-bold text-black tracking-widest uppercase">
                    FAQ
                </h2>

                <p>
                    Vous avez des questions sur comment on travaille ?
                    <br />
                    Voici les réponses aux questions qu'on nous pose le plus souvent.
                </p>
            </div>

            <div className="w-full max-w-2xl">

                {faqData.map((item, index) => (
                    <FAQRow
                        key={item.id}
                        item={item}
                        isOpen={openIndex === index}
                        onToggle={() =>
                            setOpenIndex(
                                openIndex === index ? null : index
                            )
                        }
                    />
                ))}

            </div>

        </section>
    );
};

export default FAQ;