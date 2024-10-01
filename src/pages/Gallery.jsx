import React, { useState, useEffect } from 'react';
import { Grid, Column, Content, Button, Breadcrumb, BreadcrumbItem } from '@carbon/react';
import { Add, Close } from '@carbon/icons-react';
import './Gallery.scss';
import { Link } from 'react-router-dom';

import setting1 from '../assets/img/3D/Final-A3-Yunyi-Guan2.jpg';
import setting2 from '../assets/img/3D/computerdesk.jpg';
import object1 from '../assets/img/3D/cystalball.jpg';
import object2 from '../assets/img/3D/headphone.jpg';
import object3 from '../assets/img/3D/chair.jpg';
import object4 from '../assets/img/3D/shoes.png';
import object5 from '../assets/img/3D/doll-cycle.png';

import vc1 from '../assets/img/vc1.gif';
import vc2 from '../assets/img/vc2.gif';
import vc3 from '../assets/img/vc3.gif';
import vc4 from '../assets/img/vc4.gif';

import ill1 from '../assets/img/illustration/myclarins.jpg';
import ill2 from '../assets/img/illustration/nothingphone.jpg';
import ill3 from '../assets/img/illustration/workethnic.jpg';
import ill4 from '../assets/img/illustration/workethnic2.jpg';
import ill5 from '../assets/img/illustration/keyboards.jpg';
import ill6 from '../assets/img/illustration/joliesgift.jpg';
import ill7 from '../assets/img/illustration/nilegarden.jpg';
import ill8 from '../assets/img/illustration/xiaohong.jpg';
import ill9 from '../assets/img/illustration/sansa.jpg';
import ill10 from '../assets/img/illustration/rooftop.jpg';
import ill11 from '../assets/img/illustration/room.jpg';
import ill12 from '../assets/img/illustration/8-4.jpg';
import ill13 from '../assets/img/illustration/8-3.jpg';
import ill14 from '../assets/img/illustration/8-2.jpg';

import photo1 from '../assets/img/photography/000004.jpg';
import photo2 from '../assets/img/photography/38820006ys.jpg';
import photo3 from '../assets/img/photography/CNV000032.jpg';
import photo4 from '../assets/img/photography/CNV000010.jpg';
import photo5 from '../assets/img/photography/IMG_4965.jpg';
import photo6 from '../assets/img/photography/000032.jpg';



const galleryData = {
  '3d-modelling': [
    { id: '3d1', src: setting1, alt: '3D Model 1', ratio: '16:9' },
    { id: '3d2', src: setting2, alt: '3D Model 2', ratio: '16:9' },
    { id: '3d3', src: object1, alt: '3D object 1', ratio: '1:1' },
    { id: '3d4', src: object2, alt: '3D object 2', ratio: '1:1' },
    { id: '3d5', src: object3, alt: '3D object 3', ratio: '1:1' },
    { id: '3d6', src: object4, alt: '3D object 4', ratio: '3:4' },
    { id: '3d7', src: object5, alt: '3D object 5', ratio: '3:4' },
  ],


  'visual-computing': [
    { id: 'vc1', src: vc1, alt: 'Visual Computing 1', ratio: '1:1' },
    { id: 'vc2', src: vc2, alt: 'Visual Computing 2', ratio: '1:1' },
    { id: 'vc3', src: vc3, alt: 'Visual Computing 3', ratio: '1:1' },
    { id: 'vc4', src: vc4, alt: 'Visual Computing 4', ratio: '16:9' },
  ],
  'illustration': [
    { id: 'ill1', src: ill1, alt: 'Illustration 1', ratio: '16:9' },
    { id: 'ill2', src: ill2, alt: 'Illustration 2', ratio: '16:9' },
    { id: 'ill3', src: ill3, alt: 'Illustration 3', ratio: '3:4' },
    { id: 'ill4', src: ill4, alt: 'Illustration 4', ratio: '3:4' },
    { id: 'ill5', src: ill5, alt: 'Illustration 5', ratio: '3:4' },
    { id: 'ill6', src: ill6, alt: 'Illustration 6', ratio: '3:4' },
    { id: 'ill7', src: ill7, alt: 'Illustration 7', ratio: '3:4' },
    { id: 'ill8', src: ill8, alt: 'Illustration 8', ratio: '3:4' },
    { id: 'ill9', src: ill9, alt: 'Illustration 9', ratio: '3:4' },
    { id: 'ill10', src: ill10, alt: 'Illustration 10', ratio: '3:4' },
    { id: 'ill11', src: ill11, alt: 'Illustration 11', ratio: '3:4' },
    { id: 'ill12', src: ill12, alt: 'Illustration 12', ratio: '3:4' },
    { id: 'ill13', src: ill13, alt: 'Illustration 13', ratio: '3:4' },
    { id: 'ill14', src: ill14, alt: 'Illustration 14', ratio: '3:4' },
  ],
  'photography': [
    { id: 'photo1', src: photo1, alt: 'Photo 1', ratio: '16:9' },
    { id: 'photo2', src: photo2, alt: 'Photo 2', ratio: '16:9' },
    { id: 'photo3', src: photo3, alt: 'Photo 2', ratio: '3:4' },
    { id: 'photo4', src: photo4, alt: 'Photo 2', ratio: '3:4' },
    { id: 'photo5', src: photo5, alt: 'Photo 2', ratio: '3:4' },
    { id: 'photo6', src: photo6, alt: 'Photo 2', ratio: '3:4' },
  ],
  // 'game-design': [
  //   { id: 'game1', src: '/path/to/game-design-1.jpg', alt: 'Game Design 1', ratio: '3:4' },
  //   { id: 'game2', src: '/path/to/game-design-2.jpg', alt: 'Game Design 2', ratio: '16:9' },
  // ],
};

const sections = [
  { id: '3d-modelling', title: '3D Modelling' },
  { id: 'visual-computing', title: 'Visual Computing' },
  { id: 'illustration', title: 'Illustration' },
  { id: 'photography', title: 'Photography' },
  // { id: 'game-design', title: 'Game Design' }
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
          <Breadcrumb noTrailingSlash aria-label="Page navigation" className='gallery-breadcrumb'>
            <BreadcrumbItem>
              <Link as={Link} to="/">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>Gallery</BreadcrumbItem>
          </Breadcrumb>
        </Column>
      </Grid>
      <div className="gallery-content">
        <div className="side-nav-column">
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
        </div>
        <div className="gallery-main-content">
          <Content>
            {sections.map((section) => (
              <section key={section.id} id={section.id}>
                <h2>{section.title}</h2>
                <div className="gallery-grid">
                  {galleryData[section.id].map((image) => (
                    <div key={image.id} className={`gallery-item ratio-${image.ratio.replace(':', '-')}`}>
                      <img src={image.src} alt={image.alt} />
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </Content>
        </div>
      </div>
    </div>
  );
}

export default Gallery;