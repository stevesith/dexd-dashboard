import React, { useState } from "react";
import htmlBadge from "../assets/html-badge.svg";
import cssBadge from "../assets/css-badge.svg";
import jsBadge from "../assets/js-badge.svg";

interface EvidenceCardProps {
  quarter: string;
  progress: number;
}

const skillData = [
  { skill: "HTML 5", image: htmlBadge, color: "primary", progress: 90 },
  { skill: "CSS 3", image: cssBadge, color: "primary", progress: 75 },
  { skill: "JavaScript", image: jsBadge, color: "primary", progress: 65 },
];

const EvidenceCard: React.FC<EvidenceCardProps> = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <div className="skill-card card border-0 pt-4 mt-4 mb-4 bg-primary-subtle rounded-4">
      <h3 className="card-title text-muted">Skillset Overview</h3>
      <br />
      <p className="card-text text-muted">
        Creative and detail-oriented digital designer and front-end developer
        skilled in crafting responsive user interfaces, branding assets, and
        interactive web experiences using HTML, CSS, JavaScript, and modern
        frameworks
      </p>
      <hr className="border-lg border-primary" />
      <div className="card-body d-flex flex-row justify-content-between flex-wrap gap-3 pt-4">
        {skillData.map(({ skill, image, color, progress }, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
            className="tech-skill d-flex align-items-center bg-light rounded-4 p-3 flex-grow-1"
            style={{
              minWidth: "350px",
              maxWidth: "300px",
              transform: hoverIndex === index ? "scale(1.03)" : "scale(1)",
              transition: "transform 0.3s ease-in-out",
            }}
          >
            <img
              src={image}
              className="px-2 py-2"
              alt={`${skill} Badge`}
              style={{ width: "60px", height: "60px" }}
            />
            <div className="d-flex flex-column ps-3 py-2 gap-2 w-100">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h4 className="mb-0">{skill}</h4>
                <small className="text-muted me-2 bg-primary-subtle p-1 px-2 rounded-pill">
                  {progress}%
                </small>
              </div>
              <div className="progress" style={{ height: "6px" }}>
                <div
                  className={`progress-bar-striped bg-${color}`}
                  role="progressbar"
                  style={{ width: `${progress}%`, borderRadius: "8px" }}
                  aria-valuenow={progress}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EvidenceCard;
