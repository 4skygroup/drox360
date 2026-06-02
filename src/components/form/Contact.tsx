import ContactForm from "./ContactForm";
import ContactFeatures from "./ContactFeatures";

export default function Contact() {
    return (
        <section className="h-screen px-6 py-10 lg:px-12">
            <div className="mt-14 mx-auto max-w-7xl">
                <div className="grid gap-16 lg:grid-cols-[450px_1fr]">
                    <ContactForm />
                    <ContactFeatures />
                </div>
            </div>
        </section>
    );
}