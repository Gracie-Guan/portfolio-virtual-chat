import React from 'react';
import { Grid, Column, Breadcrumb, BreadcrumbItem } from '@carbon/react';
import headshot from '../assets/img/gracie_headshot.jpg';
import './About.scss';
import Carousel from '../components/Carousel';
import Capabilities from '../components/CapabilitiesTable';

function About() {
  return (
    <div className='about-page'>
      <Breadcrumb noTrailingSlash aria-label="Page navigation" className='about-breadcrumb'>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>About</BreadcrumbItem>
      </Breadcrumb>

      <section className="intro-section">
        <Grid>
          <Column lg={4} md={4} sm={4}>
            <div className="intro-image">
              <img src={headshot} alt="Gracie Guan portrait" />
            </div>
          </Column>
          <Column lg={12} md={4} sm={4}>
            <div className="intro-text">
              <h1 className="intro-title">
                Hi, I'm<br />
                Gracie Guan
              </h1>
              <div className="intro-description">
                <div className='text-container'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                </div>

                <div className='text-container'>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit
                  anim id est laborum.
                </p>
                </div>
              </div>
            </div>
          </Column>
        </Grid>
      </section>

      <section className='journey-section'>
        <Carousel />
      </section>

      <section className='capabilities-section'>
        <Capabilities />
      </section>
    </div>
  )
}

export default About;