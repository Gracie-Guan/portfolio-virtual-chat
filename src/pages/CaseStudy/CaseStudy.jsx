import React, { useState, useEffect } from 'react';
import { Grid, Column, Content, Button } from '@carbon/react';
import ProjectOverview from '../../components/Overview';

import MultimediaContent from './MultimediaContent';
import SidebarNavigation from '../../components/SidebarNavigation';
import './CaseStudy.scss';

const CaseStudy = ({ projectData, sections }) => {
  const [currentSection, setCurrentSection] = useState(sections[0]?.id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleNavigation = (sectionId) => {
    setCurrentSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(section => 
        document.getElementById(section.id)
      );
      
      const currentSectionIndex = sectionElements.findIndex(element => {
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 100;
        }
        return false;
      });

      if (currentSectionIndex !== -1) {
        setCurrentSection(sections[currentSectionIndex].id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const renderContent = (content) => {
    const contentArray = Array.isArray(content) ? content : [content];

    return contentArray.map((item, itemIndex) => {
      if (typeof item === 'string') {
        return <p key={itemIndex}>{item}</p>;
      } else if (item && item.type === 'multimedia') {
        return (
          <MultimediaContent
            key={itemIndex}
            type={item.mediaType}
            src={item.src}
            alt={item.alt}
            caption={item.caption}
          />
        );
      }
      return null;
    });
  };

  return (
    <Content>
      <ProjectOverview {...projectData} />
      
      <Grid narrow>
        <Column lg={4} md={2} sm={4} className={`sidebar-column ${isSidebarOpen ? 'open' : ''}`}>
          <Button
            className="sidebar-toggle"
            kind="ghost"
            hasIconOnly
            iconDescription={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
            onClick={toggleSidebar}
          />
          <SidebarNavigation 
            items={sections.map(section => ({
              id: section.id,
              title: section.title,
              dataTarget: section.id
            }))}
            currentSection={currentSection}
            onItemClick={handleNavigation}
          />
        </Column>
        
        <Column lg={10} md={6} sm={4} className="content-column">
          <main className="case-study-content">
            {sections.map((section, index) => (
              <React.Fragment key={index}>
                <section id={section.id}>
                  <h2>{section.title}</h2>
                  {renderContent(section.content)}
                </section>
                {index < sections.length - 1 && (
                  <div className="section-divider"></div>
                )}
              </React.Fragment>
            ))}
          </main>
        </Column>
      </Grid>
    </Content>
  );
};

export default CaseStudy;