import React from 'react';
import { ClickableTile, Column } from '@carbon/react';
import { ArrowRight } from '@carbon/icons-react';
import './ProjectCardB.scss';
import styled from 'styled-components';

const StyledColumn = styled(Column)`
  padding: 0; 
`;

const ProjectCardB = ({ title, description, link, imageSrc }) => {
  return (
    <StyledColumn sm={2} md={4} lg={4} >
    <ClickableTile
      className="project-card-b"
      href={link}
    >
      <div className="project-card-b__content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="project-card-b__footer">
        <ArrowRight size={16} />
      </div>
      <div className="project-card-b__image-container">
        <img src={imageSrc} alt={title} className="project-card-b__image" />
      </div>
    </ClickableTile>
    </StyledColumn>
  );
};

export default ProjectCardB;