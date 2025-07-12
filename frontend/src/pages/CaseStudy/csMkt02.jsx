import React from 'react';
import { Column, Breadcrumb, BreadcrumbItem, Link } from '@carbon/react';
import CaseStudy from './CaseStudy'; 
import launchheader from '../../assets/img/launch1.jpg'

function ProductLaunch() {
  const projectData = {
    title: "Blushark Product Launch Event",
    subtitle: "Promote New Concept in a Traditional Industry",
    tags: ["Product Launch", "Brand", "Public Relations"],
    role: "Project Manager",
    timeframe: "3 Months",
    teamSize: "5 people",
    productStage: "Launch",
    imageSrc: launchheader,
  };
  const sections = [
    {
      id: "background",
      title: "Project Background",
      content: [
        "Sharkgulf Technology is a company dedicated to creating intelligent new energy two-wheeled vehicles. In 2019, Sharkgulf's first product was ready to launch. They planned to officially introduce the product through a launch event, which would also serve as the debut of the Blueshark Intelligent Motorcycle brand.",
        // {
        //   type: 'multimedia',
        //   mediaType: 'image',
        //   src: '',
        //   alt: 'project walkthrough',
        // },
      ]
    },
    {
      id: "task",
      title: "Task",
      content: [
        "- Based on product features, coordinate with Keynote content and script to plan suitable visual presentation.", 
        "- Producing product feature videos and visual materials with vendor and designers.",
        "- Collaborated with the event agency on launch event execution, determining and overseeing venue design, material design, media reception, and other execution matters."
      ]
    },
    {
      id: "strategy",
      title: "Strategy Considerations",
      content: [
        "Unlike the normal electric bikes in the market, the Blueshark brand and product strongly emphasize intelligence and technology. In terms of industrial design, it is on par with world-class motorcycle products, making it a groundbreaking product.", 
        "Therefore, we used Automotive Technology as the keyword for the Blueshark brand and the launch product Blueshark Robor, continuously strengthening the association between Blueshark Robor and automobiles. The design and format of the launch event venue were on par with mobile phone company launches, creating a differentiated image",
        "Simultaneously, we captured the attention of core two-wheeler product users through online live streaming and by deeply engaging with competitors' user groups. We launched a pre-order campaign, gaining a batch of brand seed users."
      ]
    },
    {
      id: "results",
      title: "Key Results",
      content: [
        "- 100 people attended the launch event. The event invited 50 technology and automotive media outlets, over 20 supply chain personnel, and 30 industry distributors.", 
        "- 281 users paid to pre-order the product. In the online pre-order campaign launched after the event, 281 users paid a deposit to order the Blueshark Robor product. The launch price for Robor started at 12,000 yuan (1500 euro).",
        "20+ distributors signed letter of intent. Distributors felt that Blueshark's launch event was far superior to other companies in the same industry, and the product was innovative and attractive. Over 20 distributors signed sales cooperation contracts after the event."
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
              <a href="#/work">Work</a>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>Product Launch</BreadcrumbItem>
          </Breadcrumb>
        </Column>
    <CaseStudy projectData={projectData} sections={sections} />
    </div>);



}

export default ProductLaunch