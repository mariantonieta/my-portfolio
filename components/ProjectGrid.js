import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { portfolioProjects } from "../data/siteContent";

export default function ProjectGrid({ limit, showPreviewAction = false }) {
  const { t } = useTranslation();
  const visibleProjects =
    typeof limit === "number"
      ? portfolioProjects.slice(0, limit)
      : portfolioProjects;
  const projectCopy = t("projects.items", { returnObjects: true });

  return (
    <div className="project-stack">
      <div className="project-grid">
        {visibleProjects.map((project) => (
          <article key={project.id} className="project-card">
            <Link
              href={project.href}
              className="project-media"
              target="_blank"
              rel="noreferrer"
            >
              <span className="project-window-chrome" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
              <span className="project-screen">
                <Image
                  src={project.image}
                  width={project.width}
                  height={project.height}
                  alt={projectCopy[project.id]?.title ?? project.id}
                  className="project-image"
                />
              </span>
            </Link>
            <div className="project-content">
              <h3>{projectCopy[project.id]?.title ?? project.id}</h3>
              <p>{projectCopy[project.id]?.description ?? ""}</p>
              <Link
                href={project.href}
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                {t(`common.${project.cta || "repository"}`)}
              </Link>
            </div>
          </article>
        ))}
      </div>

      {showPreviewAction ? (
        <div className="section-action">
          <Link href="/portfolio" className="secondary-button">
            {t("common.viewAllProjects")}
          </Link>
        </div>
      ) : null}
    </div>
  );
}
