import { Zap, TrendingUp } from "lucide-react";

export default function ContactFeatures() {
    return (
        <div className="flex h-full flex-col items-center justify-center space-y-20">
            <div>
                <h2 className="text-h6 font-black tracking-tight md:text-h3">
                    Let&apos;s talk.
                </h2>

                <p className="max-w-lg text-t5 leading-relaxed md:text-t3">
                    <span className="text-drox360-orange">
                        Remplissez ce formulaire
                    </span>{" "}
                    avec autant de détails que possible. Plus on en sait sur votre
                    situation, plus notre réponse sera utile.
                </p>
            </div>

            <div className="grid gap-10 md:grid-cols-2">
                <div>
                    <div className="mb-4 flex items-center gap-3">
                        <Zap size={22} />
                        <h3 className="text-t4 font-bold md:text-t5">
                            Réactivité immédiate.
                        </h3>
                    </div>
                    <p className="max-w-80 text-t6 md:text-t5">
                        Réponse garantie sous 48h ouvrées. Pour les demandes
                        urgentes, précisez-le dans votre message et nous ferons de
                        notre mieux pour vous répondre rapidement.
                    </p>
                </div>

                <div>
                    <div className="mb-4 flex items-center gap-3">
                        <TrendingUp size={22} />
                        <h3 className="text-t4 font-bold md:text-t5">
                            Un process agile
                        </h3>
                    </div>
                    <p className="max-w-80 text-t6 md:text-t5">
                        Suite au brief, nous vous transmettons un plan d&apos;action,
                        un budget et un timing cadré.
                    </p>
                </div>
            </div>
        </div>
    );
}