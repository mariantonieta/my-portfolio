import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaMoon, FaSun } from "react-icons/fa";
import { MdClear, MdOutlineMenu } from "react-icons/md";
import { useAppContext } from "./AppProvider";

const links = [
  { href: "/home", key: "home" },
  { href: "/portfolio", key: "portfolio" },
  { href: "/contact", key: "contact" },
];

function isActiveRoute(pathname, href) {
  if (href === "/home") {
    return pathname === "/" || pathname === "/home";
  }

  if (href === "/portfolio") {
    return pathname === "/portfolio" || pathname === "/resume";
  }

  return pathname === href;
}

export default function Navbar() {
  const router = useRouter();
  const { t } = useTranslation();
  const { darkMode, language, toggleLanguage, toggleTheme } = useAppContext();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="nav-wrapper">
      <div className="nav-container">
        <Link href="/home" className="brand-lockup" onClick={closeMenu}>
          <span className="brand-mark">MC</span>
          <span className="brand-copy">
            <strong>{t("brand")}</strong>
            <span>Full Stack</span>
          </span>
        </Link>

        <nav className="nav-desktop" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${isActiveRoute(router.pathname, link.href) ? "is-active" : ""}`}
            >
              {t(`nav.${link.key}`)}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            type="button"
            className="toggle-pill"
            onClick={toggleLanguage}
            aria-label={t("nav.language")}
          >
            <span className={language === "es" ? "is-current" : ""}>ES</span>
            <span className="toggle-divider" />
            <span className={language === "en" ? "is-current" : ""}>EN</span>
          </button>
          <button
            type="button"
            className="icon-button"
            onClick={toggleTheme}
            aria-label={t("nav.theme")}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button
            type="button"
            className="icon-button nav-mobile-toggle"
            onClick={() => setMenuOpen((currentValue) => !currentValue)}
            aria-label={menuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
          >
            {menuOpen ? <MdClear /> : <MdOutlineMenu />}
          </button>
        </div>
      </div>

      <div className={`mobile-panel ${menuOpen ? "is-open" : ""}`}>
        <nav className="mobile-menu" aria-label="Mobile">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`mobile-link ${isActiveRoute(router.pathname, link.href) ? "is-active" : ""}`}
              onClick={closeMenu}
            >
              {t(`nav.${link.key}`)}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
