import React from 'react';
import { Grid, Column, Breadcrumb, BreadcrumbItem, Link } from '@carbon/react';
import headshot from '../assets/img/gracie_headshot.jpg';
import './About.scss';
import Carousel from '../components/Carousel';
import Capabilities from '../components/CapabilitiesTable';
import { ArrowRight } from '@carbon/icons-react';
import cv from '../assets/Gracie Guan_Resume.pdf'


function About() {
  return (
    <div className='about-page'>
      <Breadcrumb noTrailingSlash aria-label="Page navigation" className='about-breadcrumb'>
        <BreadcrumbItem>
          <a href="#/">Home</a>
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
              <div>
              <h1 className="intro-title">
                Hi, I'm<br />
                Gracie Guan
              </h1>
              <Link href={cv} renderIcon={() => <ArrowRight aria-label="Arrow Right" />}>
                Download My CV
              </Link>
              </div>
              <div className="intro-description">
                <div className='text-container'>
                <div>
                <h3>A Creator</h3> 
                <p>Whether I'm behind a camera, sketching on a tablet, or putting together code, it is my happy place. I love being a digital blacksmith, forging raw ideas into polished creations. Design thinking is my trusty partner, helping me craft solutions that not only look cool but also make a difference.</p>
                </div>
                </div>

                <div className='text-container'>
                <div>
                <h3>A Problem Solver</h3> 
                <p>I observe with an open mind, armed with a toolkit that's part analytical thinking, part creative flair, and a whole lot of insight. I'm like a detective, piecing together clues from user behavior, business performance, and technical possibilities to crack the case. </p>
                </div>
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