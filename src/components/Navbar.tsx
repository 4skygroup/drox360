import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MapPin } from "lucide-react";
import LangSwitcher from "./LangSwitcher.tsx";

interface NavItem {
  labelKey: string;
  path: string;
  external?: boolean;
}

const navItems: NavItem[] = [
  {
    labelKey: "navbar.theGroup",
    path: "https://www.playtosky.com/",
    external: true,
  },
  { labelKey: "navbar.about", path: "/about" },
  { labelKey: "navbar.services", path: "/services" },
  { labelKey: "navbar.contact", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const { t } = useTranslation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black flex items-center justify-between px-8 py-5">
      {/* Gauche (desktop uniquement) */}
      <div className="hidden md:flex items-center gap-10">
        <LangSwitcher />
        <NavLink
          to="/location"
          className="flex items-center gap-2 text-white hover:text-drox360-orange transition-colors"
        >
          <MapPin className="w-5 h-5" />
        </NavLink>
      </div>

      {/* Logo : à gauche en mobile, centré par rapport au header en desktop */}
      <NavLink
        to="/"
        className="shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2"
      >
        <img src="/logoDrox.webp" alt="drox 360" className="h-6" loading="lazy"/>
      </NavLink>

      {/* ── Desktop nav ── */}
      <ul className="hidden md:flex items-center gap-10">
        {navItems.map(({ labelKey, path, external }) => (
          <li key={path} className="relative">
            {external ? (
              <a
                href={path}
                target="_blank"
                rel="noopener noreferrer"
                className="font-glacial text-t5 text-white hover:text-drox360-orange transition-colors duration-200"
              >
                {t(labelKey)}
              </a>
            ) : (
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `font-glacial text-t5 transition-colors duration-200 flex items-center gap-1 ${
                    isActive
                      ? "text-drox360-orange"
                      : "text-white hover:text-drox360-orange"
                  }`
                }
              >
                {t(labelKey)}
              </NavLink>
            )}
          </li>
        ))}
      </ul>

      {/* Hamburger (mobile uniquement, à droite) */}
      <button
        className={`md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 z-50 relative ${menuOpen ? "invisible" : ""}`}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label={t("navbar.toggleMenu")}
      >
        <span
          className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
        />
        <span
          className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
        />
      </button>

      {/* ── Mobile menu ── */}
      <div
        className={`fixed inset-0 bg-black md:hidden flex flex-col transition-all duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ zIndex: 40 }}
      >
        {/* Croix de fermeture */}
        <button
          className="absolute top-5 right-8 text-white text-3xl font-light leading-none"
          onClick={() => setMenuOpen(false)}
          aria-label={t("navbar.closeMenu")}
        >
          ✕
        </button>

        {/* Logo centré */}
        <div className="flex justify-center mt-16 mb-12">
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            <img src="/logoDrox.webp" alt="Pulse X" className="h-12" loading="lazy"/>
          </NavLink>
        </div>

        {/* Langue + localisation (mobile) */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <LangSwitcher />

          <NavLink
            to="/location"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white"
          >
            <MapPin className="w-5 h-5" />
          </NavLink>
        </div>

        {/* Items centrés */}
        <ul className="flex flex-col items-center gap-8 flex-1">
          {navItems.map(({ labelKey, path, external }) => (
            <li key={path} className="text-center">
              {external ? (
                <a
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="font-glacial text-t3 text-white"
                >
                  {t(labelKey)}
                </a>
              ) : (
                <NavLink
                  to={path}
                  onClick={() => setMenuOpen(false)}
                  className="font-glacial text-t3 text-white"
                >
                  {t(labelKey)}
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        {/* Mention en bas */}
        <p className="text-center text-white/50 text-t5 pb-8 font-glacial">
          {t("navbar.footerMention")}
        </p>
      </div>
    </nav>
  );
}
