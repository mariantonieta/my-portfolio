import Link from "next/link";
import { useTranslation } from "react-i18next";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";
import { socialLinks } from "../data/siteContent";

const socialIcons = {
  GitHub: AiFillGithub,
  LinkedIn: AiFillLinkedin,
};

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <a className="back-to-top" href="#top">
          <AiOutlineArrowUp />
          <span>{t("footer.backToTop")}</span>
        </a>
        <div className="footer-socials">
          {socialLinks.map((item) => {
            const Icon = socialIcons[item.label];

            return (
              <Link
                key={item.label}
                href={item.href}
                className="social-link"
                target="_blank"
                rel="noreferrer"
              >
                <Icon />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
        <p>{t("footer.copyright", { year: new Date().getFullYear() })}</p>
      </div>
    </footer>
  );
}
