import { Trans, useTranslation } from "react-i18next";

export default function About() {
    const { t } = useTranslation();

    return (
        <section className="w-full flex justify-center px-6 py-16 mt-10">
            <div className="max-w-4xl w-full text-black font-glacial text-t5 md:text-t4 leading-relaxed space-y-6">

                <p className="text-t1 md:text-h5 font-bold text-drox360-orange leading-tight">
                    {t("about.title")}
                </p>

                <p>
                    <Trans
                        i18nKey="about.paragraph1"
                        components={{
                            highlight: <span className="text-drox360-orange" />,
                        }}
                    />
                </p>

                <p>
                    <Trans
                        i18nKey="about.paragraph2"
                        components={{
                            highlight: <span className="text-drox360-orange" />,
                        }}
                    />
                </p>

                <p>
                    {t("about.paragraph3")}
                </p>

                <p>
                    <Trans
                        i18nKey="about.paragraph4"
                        components={{
                            highlight: <span className="text-drox360-orange" />,
                            highlight2: <span className="text-drox360-orange" />,
                        }}
                    />
                </p>

            </div>
        </section>
    );
}