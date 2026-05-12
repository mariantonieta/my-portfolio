import Image from "next/image";
import { useTranslation } from "react-i18next";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import portraitAccent from "../../public/anto2.png";
import { socialLinks } from "../../data/siteContent";
import ContactForm from "../ContactForm";
import Layout from "../Layout";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

const socialIconMap = {
  GitHub: AiFillGithub,
  LinkedIn: AiFillLinkedin,
};

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <Layout pageKey="contact">
      <div className="page-stack">
        <Reveal className="contact-layout">
          <div className="contact-copy-card">
            <SectionHeading
              eyebrow={t("contactPage.eyebrow")}
              title={t("contactPage.title")}
              description={t("contactPage.description")}
            />

            <div className="contact-portrait-panel">
              <div className="contact-portrait-frame">
                <Image
                  src={portraitAccent}
                  alt="Mariantonieta Chacon portrait"
                  className="portrait-image"
                />
              </div>
              <div className="availability-card">
                <span className="badge-pill">{t("contactPage.cardTitle")}</span>
                <strong>{t("contactPage.availability")}</strong>
                <p>{t("contactPage.response")}</p>
              </div>
            </div>

            <div className="contact-social-block">
              <span>{t("contactPage.socialTitle")}</span>
              <div className="hero-socials">
                {socialLinks.map((item) => {
                  const Icon = socialIconMap[item.label];

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="social-link"
                    >
                      <Icon />
                      <span>{item.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <ContactForm />
        </Reveal>
      </div>
    </Layout>
  );
}
