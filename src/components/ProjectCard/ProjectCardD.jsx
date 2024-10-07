import React from 'react';
import { Column, Tag } from '@carbon/react';
import { ArrowRight } from '@carbon/icons-react';
import './ProjectCardD.scss';

const ProjectCardD = ({ title, description, imageSrc, link, tags }) => {
  return (
    <Column sm={4} md={4} lg={8} className="project-card-d">
      <a href={link} className="project-card-d__link">
        <div className="project-card-d__content">
          <div className="project-card-d__text">
            <h3>{title}</h3>
            <p>{description}</p>
            {Array.isArray(tags) && tags.length > 0 && (
              <div className="project-card-d__tags">
                {tags.map((tag, index) => (
                  <Tag key={index} type="blue" size="md">
                    {tag}
                  </Tag>
                ))}
              </div>
            )}
            <div className="project-card-d__view">
              <ArrowRight size={16} />
            </div>
          </div>
          <div className="project-card-d__image-container">
            <img src={imageSrc} alt={title} className="project-card-d__image" />
          </div>
        </div>
      </a>
    </Column>
  );
};

export default ProjectCardD;
