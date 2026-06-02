type ContactFormProps = {
    onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function ContactForm({
    onSubmit,
}: ContactFormProps) {

    return (
        <div className="rounded-[32px] bg-white p-10 shadow-sm">
            <h2 className="mb-10 text-center text-4xl font-medium">
                Vous avez un <span className="text-drox360-orange font-semibold">projet ?</span>
            </h2>

            <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                    <Field label="NOM*" placeholder="Votre nom" />
                    <Field label="PRÉNOM*" placeholder="Votre prénom" />

                    <Field label="E-MAIL*" placeholder="votremail@gmail.com" />
                    <Field
                        label="NOM ENTREPRISE / PROJET*"
                        placeholder="Entreprise"
                    />

                    <Field label="TYPE DE PROJET*" placeholder="Type de projet" />
                    <Field
                        label="BUDGET APPROXIMATIF"
                        placeholder="Budget"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-xs uppercase tracking-wide text-neutral-700">
                        DESCRIPTION*
                    </label>

                    <textarea
                        rows={5}
                        placeholder="Décrivez votre projet"
                        className="w-full rounded-md border border-neutral-500 px-4 py-3 outline-none transition focus:border-black"
                    />
                </div>

                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="rounded-full bg-black px-8 py-2 text-white transition hover:opacity-90"
                    >
                        Envoyer
                    </button>
                </div>
            </form>
        </div>
    );
}

type FieldProps = {
    label: string;
    placeholder: string;
};

function Field({ label, placeholder }: FieldProps) {
    return (
        <div>
            <label className="mb-2 block text-xs uppercase tracking-wide text-neutral-700">
                {label}
            </label>

            <input
                type="text"
                placeholder={placeholder}
                className="w-full rounded-md border border-neutral-500 px-3 py-2 outline-none transition focus:border-black"
            />
        </div>
    );
}