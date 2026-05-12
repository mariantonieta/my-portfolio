import {
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaJava,
  FaLinux,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { SiAngular, SiGithubcopilot, SiJavascript, SiJenkins, SiJest, SiJunit5, SiMongodb, SiMysql, SiOpenai, SiPostgresql, SiSpringboot, SiTypescript } from "react-icons/si";
import { useTranslation } from "react-i18next";

const iconMap = {
  angular: SiAngular,
  claude: null,
  copilot: SiGithubcopilot,
  database: FaDatabase,
  docker: FaDocker,
  git: FaGitAlt,
  java: FaJava,
  javascript: SiJavascript,
  jenkins: SiJenkins,
  jest: SiJest,
  junit: SiJunit5,
  linux: FaLinux,
  mongo: SiMongodb,
  mysql: SiMysql,
  node: FaNodeJs,
  openai: SiOpenai,
  postgres: SiPostgresql,
  python: FaPython,
  react: FaReact,
  spring: SiSpringboot,
  typescript: SiTypescript,
};

function FallbackMark({ label }) {
  return <span className="skill-fallback">{label.slice(0, 2).toUpperCase()}</span>;
}

export default function SkillCategory({ category }) {
  const { t } = useTranslation();

  return (
    <article className="skill-card">
      <div className="skill-card-header">
        <span className="skill-card-tag">{t(`home.skills.categories.${category.key}`)}</span>
      </div>
      <div className="skill-list">
        {category.items.map((item) => {
          const Icon = iconMap[item.icon];

          return (
            <div key={item.name} className="skill-row">
              <div className="skill-label">
                <div className="skill-icon">
                  {Icon ? <Icon /> : <FallbackMark label={item.name} />}
                </div>
                <div>
                  <strong>{item.name}</strong>
                  <span>{item.level}%</span>
                </div>
              </div>
              <div className="skill-meter">
                <span className="skill-fill" style={{ width: `${item.level}%` }} />
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
}
