import React from 'react';
import { Grid, Column, Breadcrumb, BreadcrumbItem } from '@carbon/react';

import ProjectCardD from '../components/ProjectCard/ProjectCardD';
import ProjectCardC from '../components/ProjectCard/ProjectCardC';
import './Work.scss';

import nomNomImage from '../assets/img/Nomnom-1.png';
import tcdRentersImage from '../assets/img/TcdRenters.png';
import marketResearchImage from '../assets/img/MarketResearch.jpg';

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
            description="Conducted in-depth user and distributor interviews for electric scooter products, formulating firsthand market insight and analysis for the R&D department."
            imageSrc={marketResearchImage}
            link="/projects/market-research"
            tags={['Market Research']}
          />
          <ProjectCardD
            title="Product Launch"
            description="Managed the successful launch of a new product line, coordinating marketing efforts across multiple channels."
            imageSrc={marketResearchImage}
            link="/projects/product-launch"
            tags={['Product Marketing']}
          />
          <ProjectCardD
            title="Process Improvement SOP"
            description="Developed and implemented standard operating procedures to streamline marketing processes and improve team efficiency."
            imageSrc={marketResearchImage}
            link="/projects/process-improvement"
            tags={['Process Optimization']}
          />
          <ProjectCardD
            title="Integrated Marketing Campaign"
            description="Led a cross-channel marketing campaign that significantly increased brand awareness and drove sales growth."
            imageSrc={marketResearchImage}
            link="/projects/marketing-campaign"
            tags={['Integrated Marketing']}
          />
        </Grid>
      </section>
    </div>
  );
};

export default Work;