import React, { useState, useEffect } from 'react';
import { Grid, Column, Content, Button, Breadcrumb, BreadcrumbItem } from '@carbon/react';
import { Add, Close } from '@carbon/icons-react';
import './Gallery.scss';

const sections = [
  { id: '3d-modelling', title: '3D Modelling' },
  { id: 'visual-computing', title: 'Visual Computing' },
  { id: 'illustration', title: 'Illustration' },
  { id: 'photography', title: 'Photography' },
  { id: 'game-design', title: 'Game Design' }
];

function Gallery() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 672);
  const [isNavOpen, setIsNavOpen] = useState(!isMobile);
  const [activeSection, setActiveSection] = useState(sections[0].id);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 672;
      setIsMobile(mobile);
      setIsNavOpen(!mobile);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
    if (isMobile) {
      setIsNavOpen(false);
    }
  };

  return (
    <div className="gallery-page">
      <Grid>
        <Column sm={4} md={8} lg={16}>
          <Breadcrumb noTrailingSlash aria-label="Page navigation">
            <BreadcrumbItem>
              <a href="/">Home</a>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>Gallery</BreadcrumbItem>
          </Breadcrumb>
        </Column>
      </Grid>
      <Grid className="gallery-content">
        <Column sm={4} md={2} lg={2} className="side-nav-column">
          {isMobile && (
            <Button
              hasIconOnly
              renderIcon={isNavOpen ? Close : Add}
              onClick={toggleNav}
              className="nav-toggle-button"
            />
          )}
          <nav className={`gallery-nav ${isNavOpen ? 'open' : ''}`}>
            <ul className="document-toc-list">
              {sections.map((section) => (
                <li 
                  key={section.id} 
                  className={`document-toc-item ${activeSection === section.id ? 'active' : ''}`}
                >
                  <a 
                    href={`#${section.id}`}
                    className="document-toc-link"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(section.id);
                    }}
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Column>
        <Column sm={4} md={6} lg={14} className="gallery-main-content">
          <Content>
            {sections.map((section) => (
              <section key={section.id} id={section.id}>
                <h2>{section.title}</h2>
                {/* Add your gallery items for each section here */}
              </section>
            ))}
          </Content>
        </Column>
      </Grid>
    </div>
  );
}

export default Gallery;