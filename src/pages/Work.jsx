import React from 'react';
import { Grid, Column, Breadcrumb, BreadcrumbItem } from '@carbon/react';

import ProjectCardD from '../components/ProjectCard/ProjectCardD';
import ProjectCardC from '../components/ProjectCard/ProjectCardC';
import './Work.scss';

import nomNomImage from '../assets/img/Nomnom-1.png';
import tcdRentersImage from '../assets/img/TcdRenters.png';
import marketResearchImage from '../assets/img/MarketResearch2.jpg';
import productLaunch from '../assets/img/launch2.jpg';
import chimelong from '../assets/img/chimelong.jpg';
import testdrive from '../assets/img/test_drive.png';

const Work = () => {
  return (
    <div className="work-page">
      <Breadcrumb noTrailingSlash className='work-breadcrumb'>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>Work</BreadcrumbItem>
      </Breadcrumb>

      <section className="design-dev-section">
        <Grid>
          <Column lg={16} md={8} sm={4}>
            <h1>Design and Development ↷</h1>
          </Column>
        </Grid>
        <Grid condensed>
          <ProjectCardC
            type='Graduate Project'
            title="NOMNOM Mobile App"
            description="A mobile application that addresses common frustrations in finding accurate food information by converting user-uploaded menu photos into accessible, text-based formats using AI."
            imageSrc={nomNomImage}
            link="/nomnom"
            tags={['UX Design', 'Frontend', 'React Native', 'Google Cloud', 'Gemini AI']}
          />
          <ProjectCardC
            type='Volunteer Project'
            title="TCD Renters Network"
            description="A centralised website to coordinate campaigns around issues faced by the collective student renter community at Trinity College Dublin."
            imageSrc={tcdRentersImage}
            link="/tcdrenters"
            tags={['UX Design', 'Frontend', 'Vue.js']}
          />
        </Grid>
      </section>

      <section className="marketing-section">
        <Grid>
          <Column lg={16} md={8} sm={4}>
            <h1>Marketing ↷</h1>
          </Column>
        </Grid>
        <Grid fullWidth>
          <ProjectCardD
            title="Market Research for R&D"
            description="The company decided to develop a new model of electric scooter, but how to make decision on product specs, price, and market channel?"
            imageSrc={marketResearchImage}
            link="/research"
            tags={['Market Research']}
          />
          <ProjectCardD
            title="Product Launch"
            description="Start-up ready to launch the brand and product with new concept in a traditional industry, how to steal the spotlight?"
            imageSrc={productLaunch}
            link="/launch"
            tags={['Product Marketing']}
          />
          <ProjectCardD
            title="Process Improvement SOP"
            description="What if the people you rely upon to engage users have different backgrounds and skills? Maybe Creating an SOP and standard kit."
            imageSrc={testdrive}
            link="/testdrive"
            tags={['Process Optimization']}
          />
          <ProjectCardD
            title="Integrated Marketing Campaign"
            description="The old amusement park wanted to give visitors new reasons to come. Here's a trick: offer some new topics for conversation."
            imageSrc={chimelong}
            link="/campaign"
            tags={['Integrated Marketing']}
          />
        </Grid>
      </section>
    </div>
  );
};

export default Work;