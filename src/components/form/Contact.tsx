import ContactForm from "./ContactForm";
import ContactFeatures from "./ContactFeatures";

export default function ContactSection() {
    return (
        <section className="mt-12 px-6 py-16 lg:px-12">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-16 lg:grid-cols-[450px_1fr]">
                    <ContactForm />
                    <ContactFeatures />
                </div>
            </div>
        </section>
    );
}