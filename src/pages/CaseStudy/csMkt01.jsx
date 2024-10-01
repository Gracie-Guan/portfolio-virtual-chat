import React from 'react';
import { Column, Breadcrumb, BreadcrumbItem, Link } from '@carbon/react';
import CaseStudy from './CaseStudy'; 
import researchimg from '../../assets/img/MarketResearch1.jpg'

function MktResearch() {
  const projectData = {
    title: "Marketing Research",
    subtitle: "Blushark H Series Product Planning Project",
    tags: ["User Survey", "Frontend", "Reporting", "Analysis"],
    role: "Project Manager",
    timeframe: "1 Months",
    teamSize: "2 people",
    productStage: "Research",
    imageSrc: researchimg,
  };
  const sections = [
    {
      id: "problem",
      title: "Problem",
      content: [
        "Based on feedback from the sales end, domestic customers have a strong demand for lightweight scooters and vehicle models adhere the new national regulation. The previously launched model did not meet this specific market demands. Therefore, it was necessary to conduct market research and interviews to understand the real needs of both business partners and retail consumers, in order to define the specs of the next product.",
      ]
    },
    {
      id: "task",
      title: "Task",
      content: [
        "- Collect parameters and sales trend information of major competitors' models currently on sale.",
        "- Anonymously visit major competitors' specialty stores to observe customer flow, models of interest, promoted products, sales pitches, etc.",
        "- Communicate with potential retail consumers to understand usage scenarios, frequency, budget, product features of interest, and other information.",
      ]
    },
    {
      id: "action",
      title: "Actions",
      content: [
        "- Market Information Collection: Gather publicly available information from domestic and international sources (including listed company financial reports, government statistical bureau data, industry media, etc.) to understand market demand trends and estimate market capacity.",
        "- Competitor Information Collection: Find target models and their main promoted products through official websites and competitors' e-commerce channels. Collect and organize specific parameters, functions, prices, and list mainstream accessories for product development reference.",
        "- Consumer Interviews and Store Visits: Understand real consumption scenarios on the market frontline to draw key conclusions.",
        // {
        //   type: 'multimedia',
        //   mediaType: 'image',
        //   src: '',
        //   alt: 'project walkthrough',
        // },
      ]
    },
  ]


  return (
    <div>
         <Column sm={4} md={8} lg={16}>
          <Breadcrumb noTrailingSlash aria-label="Page navigation">
            <BreadcrumbItem>
              <a href="/">Home</a>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <a href="/work">Work</a>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>Market Research</BreadcrumbItem>
          </Breadcrumb>
        </Column>
    <CaseStudy projectData={projectData} sections={sections} />
    </div>);



}

export default MktResearch