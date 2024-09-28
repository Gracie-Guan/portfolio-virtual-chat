import React from 'react';
import { Column, AspectRatio, Tag, Button } from '@carbon/react';
import { ArrowRight } from '@carbon/icons-react';
import './ProjectCardC.scss';

const ProjectCardC = ({ type, title, description, imageSrc, link, tags }) => {
  return (
    <Column sm={4} md={8} lg={16} className="project-card-c">
        <div className="project-card-c__content">

          <div className="project-card-c__text">
            <div>
            <h3>{type}</h3>
            <h2>{title}</h2>

            {Array.isArray(tags) && tags.length > 0 && (
              <div className="project-card-c__tags">
                {tags.map((tag, index) => (
                  <Tag key={index} type="blue" size="md">
                    {tag}
                  </Tag>
                ))}
              </div>
            )}

            <p>{description}</p>
            </div>
            <Button 
            className='project-card-c__btn'
            href='#' 
            renderIcon={ArrowRight}
            iconDescription="View Case Study">
              View Case Study
            </Button>
          </div>

          <div className="project-card-c__image-container">
            <Column lg={8} md={8} sm={4}>
              <img src={imageSrc} alt={title} className="project-card-c__image" />
            </Column>
          </div>

        </div>

    </Column>
  );
};

export default ProjectCardC;