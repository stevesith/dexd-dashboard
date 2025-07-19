import React, { useRef, useState, useEffect } from "react";
import htmlBadge from "../assets/html-badge.svg";
import cssBadge from "../assets/css-badge.svg";
import jsBadge from "../assets/js-badge.svg";
import generalBadge from "../assets/general-badge.svg";
import softSBadge from "../assets/softskills-badge.svg";

interface Skill {
  id: string;
  name: string;
  image: string;
  color: string;
  proficiency: number;
}

interface SkillsCardProps {
  title?: string;
  description?: string;
}

const SKILLS_DATA: Skill[] = [
  {
    id: "html",
    name: "HTML 5",
    image: htmlBadge,
    color: "primary",
    proficiency: 90,
  },
  {
    id: "css",
    name: "CSS 3",
    image: cssBadge,
    color: "primary",
    proficiency: 75,
  },
  {
    id: "javascript",
    name: "JavaScript",
    image: jsBadge,
    color: "primary",
    proficiency: 65,
  },
  {
    id: "design",
    name: "Design",
    image: generalBadge,
    color: "primary",
    proficiency: 81,
  },
  {
    id: "softskills",
    name: "Soft Skills",
    image: softSBadge,
    color: "primary",
    proficiency: 35,
  },
];

const DEFAULT_PROPS = {
  title: "Skillset Overview",
  description:
    "Creative and detail-oriented digital designer and front-end developer skilled in crafting responsive user interfaces, branding assets, and interactive web experiences using HTML, CSS, JavaScript, and modern frameworks",
};

const SkillsCard: React.FC<SkillsCardProps> = ({
  title = DEFAULT_PROPS.title,
  description = DEFAULT_PROPS.description,
}) => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  // fadeClass will be one of: fade-left, fade-right, fade-both
  const [fadeClass, setFadeClass] = useState("fade-right");

  const handleScrollToCard = (id: string) => {
    const card = cardRefs.current[id];
    if (card) {
      card.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;

      if (scrollLeft <= 0) {
        setFadeClass("fade-right");
      } else if (scrollLeft >= maxScrollLeft - 1) {
        setFadeClass("fade-left");
      } else {
        setFadeClass("fade-both");
      }
    };

    container.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="card border-0 p-4 my-4 bg-primary-subtle rounded-4">
      <div className="card-header bg-transparent border-0 px-0">
        <h2 className="card-title text-muted mb-3 fs-2">{title}</h2>
        <p className="card-text text-muted mb-0 fs-5">{description}</p>
      </div>

      <hr className="border-primary my-5" />

      <div
        ref={scrollContainerRef}
        className={`scroll-container card-body d-flex flex-row gap-3 overflow-auto ${fadeClass}`}
        style={{ scrollSnapType: "x mandatory" }}
      >
        {SKILLS_DATA.map((skill) => (
          <div
            key={skill.id}
            ref={(el) => (cardRefs.current[skill.id] = el)}
            onClick={() => handleScrollToCard(skill.id)}
            onMouseEnter={() => setHoveredSkill(skill.id)}
            onMouseLeave={() => setHoveredSkill(null)}
            className={`bg-light rounded-4 p-3 flex-shrink-0 transition-all ${
              hoveredSkill === skill.id ? "shadow-sm" : ""
            }`}
            style={{
              minWidth: "280px",
              maxWidth: "320px",
              scrollSnapAlign: "center",
              cursor: "pointer",
            }}
          >
            <div className="d-flex align-items-center">
              <img
                src={skill.image}
                className="me-3"
                alt={`${skill.name} Badge`}
                width="34"
                height="34"
              />
              <div className="flex-grow-1">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h4 className="mb-0 fs-5">{skill.name}</h4>
                  <span className="badge bg-primary-subtle text-primary my-2">
                    {skill.proficiency}%
                  </span>
                </div>
                <div className="progress" style={{ height: "6px" }}>
                  <div
                    className={`progress-bar-striped bg-${skill.color}`}
                    role="progressbar"
                    style={{
                      width: `${skill.proficiency}%`,
                      borderRadius: "8px",
                    }}
                    aria-valuenow={skill.proficiency}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;
