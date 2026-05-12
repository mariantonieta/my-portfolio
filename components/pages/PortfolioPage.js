import Link from "next/link";
import { useTranslation } from "react-i18next";
import Layout from "../Layout";
import ProjectGrid from "../ProjectGrid";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

export default function PortfolioPage() {
  const { t } = useTranslation();

  return (
    <Layout pageKey="portfolio">
      <div className="page-stack">
        <Reveal className="page-intro surface-hero">
          <SectionHeading
            eyebrow={t("portfolioPage.eyebrow")}
            title={t("portfolioPage.title")}
            description={t("portfolioPage.description")}
          />
          <p className="supporting-note">{t("portfolioPage.note")}</p>
          <div className="hero-actions">
            <Link href="/contact" className="primary-button">
              {t("common.contactMe")}
            </Link>
            <a
              className="secondary-button"
              href="/Mariantonieta-CV.pdf"
              target="_blank"
              rel="noreferrer"
            >
              {t("common.viewCv")}
            </a>
          </div>
        </Reveal>

        <Reveal className="section-surface">
          <ProjectGrid />
        </Reveal>
      </div>
    </Layout>
  );
}
