import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import portraitMain from "../../public/programmer.png";
import { skillGroups, socialLinks } from "../../data/siteContent";
import ExperienceTimeline from "../ExperienceTimeline";
import Layout from "../Layout";
import ProjectGrid from "../ProjectGrid";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import SkillCategory from "../SkillCategory";

const socialIconMap = {
  GitHub: AiFillGithub,
  LinkedIn: AiFillLinkedin,
};

export default function HomePage() {
  const { t } = useTranslation();
  const heroStats = t("home.hero.stats", { returnObjects: true });
  const floatingCards = t("home.hero.floatingCards", { returnObjects: true });
  const experienceItems = t("home.experience.items", { returnObjects: true });

  return (
    <Layout pageKey="home">
      <div className="page-stack">
        <Reveal className="hero-panel">
          <div className="hero-grid">
            <div className="hero-copy">
              <span className="section-eyebrow">{t("home.hero.eyebrow")}</span>
              <h1 className="hero-title">{t("home.hero.title")}</h1>
              <h2 className="hero-subtitle">{t("home.hero.subtitle")}</h2>
              <p className="hero-description">{t("home.hero.description")}</p>

              <div className="hero-actions">
                <a
                  className="primary-button"
                  href="/Mariantonieta-CV.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t("common.viewCv")}
                </a>
                <Link href="/contact" className="secondary-button">
                  {t("common.contactMe")}
                </Link>
              </div>

              <div className="hero-socials">
                {socialLinks.map((item) => {
                  const Icon = socialIconMap[item.label];

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="social-link"
                    >
                      <Icon />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </div>

              <div className="hero-stats">
                {heroStats.map((item) => (
                  <article key={item.label} className="stat-card">
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </article>
                ))}
              </div>
            </div>

            <div className="hero-visual">
              <div className="portrait-card">
                <div className="portrait-accent portrait-accent-top" />
                <div className="portrait-accent portrait-accent-bottom" />
                <div className="portrait-main">
                  <Image
                    priority
                    src={portraitMain}
                    alt="Mariantonieta Chacon programmer illustration"
                    className="portrait-image"
                  />
                </div>
                <div className="floating-pill floating-pill-top">{floatingCards[0]}</div>
                <div className="floating-pill floating-pill-middle">{floatingCards[1]}</div>
                <div className="floating-pill floating-pill-bottom">{floatingCards[2]}</div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="section-surface" id="about">
          <SectionHeading title={t("home.about.title")} description={t("home.about.text")} />
        </Reveal>

        <Reveal className="section-surface" id="skills">
          <SectionHeading
            title={t("home.skills.title")}
            description={t("home.skills.intro")}
          />
          <div className="skills-grid">
            {skillGroups.map((category) => (
              <SkillCategory key={category.key} category={category} />
            ))}
          </div>
        </Reveal>

        <Reveal className="section-surface" id="experience">
          <SectionHeading
            title={t("home.experience.title")}
            description={t("home.experience.intro")}
          />
          <ExperienceTimeline items={experienceItems} />
        </Reveal>

        <Reveal className="section-surface" id="portfolio">
          <SectionHeading
            title={t("home.portfolio.title")}
            description={t("home.portfolio.intro")}
          />
          <ProjectGrid limit={4} showPreviewAction />
        </Reveal>

        <Reveal className="cta-banner">
          <div>
            <span className="section-eyebrow">{t("common.availableFor")}</span>
            <h2 className="section-title">{t("home.cta.title")}</h2>
            <p className="section-description">{t("home.cta.description")}</p>
          </div>
          <Link href="/contact" className="primary-button">
            {t("home.cta.action")}
          </Link>
        </Reveal>
      </div>
    </Layout>
  );
}
