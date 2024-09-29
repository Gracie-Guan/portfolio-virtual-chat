import React from 'react';
import {
  StructuredListWrapper,
  StructuredListHead,
  StructuredListBody,
  StructuredListRow,
  StructuredListCell,
} from '@carbon/react';
import { CircleDash } from '@carbon/icons-react';
import './CapabilitiesTable.scss';
import capabilitiesIcon from '../assets/img/experiences.png'

const Capabilities = () => {
  const capabilities = [
    { design: 'UX Design', tech: 'HTML', marketing: 'Brand VI', projectManagement: 'User Research', language: 'English' },
    { design: 'Graphic Design', tech: 'CSS', marketing: 'Campaign Planing', projectManagement: 'Market Research', language: 'Mandarin' },
    { design: 'Illustration', tech: 'JavaScript', marketing: 'Campaign Execution', projectManagement: 'Budget Tracking', language: 'Cantonese' },
    { design: 'Video Editing', tech: 'React', marketing: 'PR writing', projectManagement: 'Business Model', language: '' },
    { design: '3D Modelling', tech: 'Prompt Engineering', marketing: 'SEO', projectManagement: 'Cross-functional Collaboration', language: '' },
  ];

  return (
    <section className="capabilities-section">
      <h1>Capabilities</h1>
      <div className="capabilities-content">
        <div className="capabilities-icon">
          <img src={capabilitiesIcon} alt='icon represent integration and universal' />
        </div>
        <StructuredListWrapper aria-label="Capabilities list">
          <StructuredListHead>
            <StructuredListRow head>
              <StructuredListCell head>Design</StructuredListCell>
              <StructuredListCell head>Tech</StructuredListCell>
              <StructuredListCell head>Marketing</StructuredListCell>
              <StructuredListCell head>Project Management</StructuredListCell>
              <StructuredListCell head>Language</StructuredListCell>
            </StructuredListRow>
          </StructuredListHead>
          <StructuredListBody>
            {capabilities.map((capability, index) => (
              <StructuredListRow key={index}>
                <StructuredListCell>{capability.design}</StructuredListCell>
                <StructuredListCell>{capability.tech}</StructuredListCell>
                <StructuredListCell>{capability.marketing}</StructuredListCell>
                <StructuredListCell>{capability.projectManagement}</StructuredListCell>
                <StructuredListCell>{capability.language}</StructuredListCell>
              </StructuredListRow>
            ))}
          </StructuredListBody>
        </StructuredListWrapper>
      </div>
    </section>
  );
};

export default Capabilities;