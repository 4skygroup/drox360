import { useEffect } from "react";

type SEOProps = {
    title: string;
    description: string;
    path?: string;
    image?: string;
    type?: "website" | "article";
};

const SITE_URL = "https://drox360.fr";
const DEFAULT_IMAGE = `${SITE_URL}/heroImg.webp`;
const SITE_NAME = "DROX 360°";

export default function SEO({
    title,
    description,
    path = "/",
    image = DEFAULT_IMAGE,
    type = "website",
}: SEOProps) {

    useEffect(() => {
        const url = `${SITE_URL}${path}`;

        // Title
        document.title = title;

        // Helper pour créer / mettre à jour une meta
        const setMeta = (
            attribute: "name" | "property",
            key: string,
            content: string
        ) => {
            let element = document.head.querySelector<HTMLMetaElement>(
                `meta[${attribute}="${key}"]`
            );

            if (!element) {
                element = document.createElement("meta");
                element.setAttribute(attribute, key);
                document.head.appendChild(element);
            }

            element.setAttribute("content", content);
        };

        // SEO classique
        setMeta("name", "description", description);
        setMeta("name", "robots", "index, follow");
        setMeta("name", "author", SITE_NAME);

        // Canonical
        let canonical = document.head.querySelector<HTMLLinkElement>(
            'link[rel="canonical"]'
        );

        if (!canonical) {
            canonical = document.createElement("link");
            canonical.setAttribute("rel", "canonical");
            document.head.appendChild(canonical);
        }

        canonical.setAttribute("href", url);

        // Open Graph
        setMeta("property", "og:type", type);
        setMeta("property", "og:site_name", SITE_NAME);
        setMeta("property", "og:url", url);
        setMeta("property", "og:title", title);
        setMeta("property", "og:description", description);
        setMeta("property", "og:image", image);
        setMeta("property", "og:locale", "fr_FR");

        // Twitter Cards
        setMeta("name", "twitter:card", "summary_large_image");
        setMeta("name", "twitter:title", title);
        setMeta("name", "twitter:description", description);
        setMeta("name", "twitter:image", image);

        return () => {

        };
    }, [title, description, path, image, type]);

    return null;
}