import React from "react";
import {entites, politique, services, social} from "./FooterData.tsx";

const FooterColumn = ({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) => (
    <div className="flex flex-col gap-4">
        <h4 className="text-t5 font-bold text-white">{title}</h4>
        <div className="flex flex-col gap-[0.55rem]">{children}</div>
    </div>
);

const FooterLink = ({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;

}) => (
    <a
        href={href}
        className="text-t5 text-white hover:underline transition-colors duration-200"
        target="_blank"
        rel="noopener noreferrer"
    >
        {children}
    </a>
);

const Footer = () => {
    return (
        <footer className="relative w-full overflow-hidden bg-black">

            <div className="relative z-10 max-w-7xl mx-auto px-8 pt-12 pb-6">
                {/* Logo */}
                <div className="flex justify-center mb-10">
                    <a href="/" aria-label="Pulse X – Accueil">
                        <img className="h-12" src="/logoDrox.png" alt="Pulse X" loading="lazy" />
                    </a>
                </div>

                {/* Columns */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
                    <FooterColumn title="Politique">
                        {politique.map((link) => (
                            <FooterLink key={link.href} href={link.href}>
                                {link.label}
                            </FooterLink>
                        ))}
                    </FooterColumn>

                    <FooterColumn title="Services">
                        {services.map((link) => (
                            <FooterLink key={link.href} href={link.href}>
                                {link.label}
                            </FooterLink>
                        ))}
                    </FooterColumn>

                    <FooterColumn title="Nos entités">
                        {entites.map((link) => (
                            <FooterLink key={link.href} href={link.href}>
                                {link.label}
                            </FooterLink>
                        ))}
                    </FooterColumn>

                    <FooterColumn title="Contact">
                        {social.map((c) => (
                            <FooterLink key={c.href} href={c.href}>
                                {c.label}
                            </FooterLink>
                        ))}
                    </FooterColumn>

                </div>

                 {/* COPYRIGHT */}
                 <div className="mt-8 flex justify-center items-center gap-3 text-t3 font-regular text-white/60 tracking-normal">
                   <span>created by</span>
                   <img
                    src="/visuance.png"
                    alt="Visuance logo"
                    className="h-4"
                    loading="lazy"
                  />
                  <span>&</span>
                  <img
                    src="/play-to-sky.png"
                    alt="Play To Sky logo"
                    className="h-6"
                    loading="lazy"
                  />
                </div>
            </div>
        </footer>
    );
};

export default Footer;