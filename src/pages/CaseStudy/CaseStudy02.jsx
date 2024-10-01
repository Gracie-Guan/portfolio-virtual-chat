import React from 'react';
import { Column, Breadcrumb, BreadcrumbItem, Link } from '@carbon/react';
import CaseStudy from './CaseStudy'; 

import TcdRenters from '../../assets/img/TcdRenters.png';
import walkthrough from '../../assets/img/tcdrenters-walkthrough.gif';
import personas from '../../assets/img/tcdpersonas.png';
import sitemap from '../../assets/img/tcdsitemap.jpg';
import tcdwireframe from '../../assets/img/tcdwireframe.png';
import techstack from '../../assets/img/techstack.jpg';
import uiux from '../../assets/img/uiux.jpg';
import tcddesignguideline from '../../assets/img/tcddesignguideline.png';

function TCDRenters() {

  const projectData = {
    title: "TCD Renters Network",
    subtitle: "Empower Student Renters by Action",
    tags: ["UX Design", "Frontend", "VUE.js"],
    role: "UX Designer, Frontend Developer",
    timeframe: "2 Months",
    teamSize: "3 people",
    productStage: "0 -> 1",
    imageSrc: TcdRenters,
  };

  const sections = [
    {
      id: "summary",
      title: "Project Summary",
      content: [
        "The TCD Renters' Solidarity Network struggled with a limited digital presence, hindering their ability to engage students and drive change in housing issues.", 
        "our team developed a comprehensive website solution, to coordinate campaigns around issues faced by the collective student renter community at Trinity College Dublin. The project aimed to improve the organization's legitimacy, provide resources for student renters, promote advocacy, and increase student engagement.",
        {
          type: 'multimedia',
          mediaType: 'image',
          src: walkthrough,
          alt: 'project walkthrough',
        },
      ]
    },
    {
      id: "problem",
      title: "Problem Statement",
      content: [
        "The TCD Renters' Solidarity Network had a limited digital presence, which hindered their ability to engage with students and support institutional change effectively. They lacked a centralized platform to share information, resources, and calls to action related to student housing issues."
      ]
    },
    {
      id: "objectives",
      title: "Objectives",
      content: [
        "- Improve the organization's legitimacy through a professional website",
        "- Provide a resources hub for Trinity renters and the wider student renter community in Dublin",
        "- Promote advocacy and communication with press and stakeholders",
        "- Increase student engagement with the Network online and offline"
      ]
    },
    {
      id: "research",
      title: "Research",
      content: [
        "The team conducted comprehensive research to understand their target audience and develop an effective advocacy website for the TCD Renters' Solidarity Network.",
        "User Research: ",
        "Due to limited access to direct user research, the team leveraged personal experiences, particularly from international students, to create user personas and empathy maps. They developed three main personas: an international student, an on-campus accommodation student, and a student union member. These personas helped identify key pain points and needs within the student renter community.",
        {
          type: 'multimedia',
          mediaType: 'image',
          src: personas,
          alt: 'personas of renters',
        },
        "Market Analysis: ",
        "The team analyzed websites with similar missions, including housing advocacy groups and student union websites, to gather inspiration and identify best practices in content structure, visual design, and user engagement strategies",
        "Social Media Research: ",
        "Referencing the Coimisiún na Meán's Digital News Report Ireland 2023, the team gained insights into social media usage among their target demographic. This informed their decision to focus primarily on Instagram for social media integration.",
        "Accessibility Research: ",
        "Committed to creating an inclusive website, the team studied WCAG 3.0 guidelines and best practices for color contrast, typography, and layout to accommodate users with various disabilities.",
        "Dublin Housing Market Research:", 
        "To provide valuable resources, the team gathered information on rental prices, transportation options, and cost of living statistics relevant to students in Dublin.",
        "This comprehensive research approach enabled the team to create a user-centered design that effectively addressed the needs of the TCD Renters' Solidarity Network and its target audience, guiding decisions on content structure, feature prioritization, and visual design throughout the project."
      ]
    },

    {
      id: "stakeholders",
      title: "Key Stakeholders",
      content: [
        "- Project Client: TCDSU, TCD Renters Solidarity Network",
        "- TCD students (approximately 20,000)",
        "- TCD staff (approximately 4,700)",
        "- International students",
        "- Press/media",
      ]
    },

    {
      id: "prototype",
      title: "Prototype",
      content: [
        "The team created wireframes and prototypes using Figma, focusing on:",
        "- A clean, professional design with a minimalist aesthetic",
        "- Mobile-first and responsive design",
        "- Integration of interactive elements such as forms, surveys, and maps",
        "- Custom illustrations to enhance visual appeal and engagement",
        "Key features of the prototype included:",
        "- News & Events section managed by a CMS with filter options",
        "- Actions & Demands section with embedded forms and petition information",
        "- Statistics & Resources section with cost of living calculator and embedded PDFs",
        {
          type: 'multimedia',
          mediaType: 'image',
          src: sitemap,
          alt: 'tcd renters network sitemap',
        },
        {
          type: 'multimedia',
          mediaType: 'image',
          src: tcdwireframe,
          alt: 'project wireframe',
        },
      ]
    },    
    {
      id: "challenge",
      title: "Challenges and Reflections",
      content: [
        "Challenges and reflections from the team:",
        "- The importance of a design system in ensuring visual consistency and reducing workload",
        "- Challenges in adopting new technologies (Vue.js) and the need for better onboarding and collaboration",
        "- The need for clear project management and timeline planning when working with new technologies",
      ]
    },
    {
      id: "final design",
      title: "Final Design",
      content: [
        "The website is live at: tcdrentstrike.ie",
        "The final design incorporated the following elements:",
        "- Color Palette: Warm white for the main body, warm black and dark grey for fonts, and a highly saturated orangey-red as an accent color",
        "- Typography: TASA Orbiter font family, with Display version for titles and Text version for body copy",
        {
          type: 'multimedia',
          mediaType: 'image',
          src: tcddesignguideline,
          alt: 'project wireframe',
        },
        "- Custom Illustrations: Used to soften the intense feeling of action and improve overall friendliness",
        "- mage Treatment: Gradient mapping to process images into black, white, and red tones",
        {
          type: 'multimedia',
          mediaType: 'image',
          src: uiux,
          alt: 'project wireframe',
        },
        "- Responsive Layout: Optimized for both desktop and mobile devices",
        "- Accessibility Features: High contrast colors, clear typography hierarchy, and adherence to WCAG guidelines",
      ]
    },

    {
      id: "development",
      title: "Development",
      content: [
        "The website was developed using the following technologies:",
        "- Frontend: Vue.js for a dynamic and scalable architecture",
        "- Backend: Drupal as the Content Management System (CMS)",
        "- Hosting: Students4Change Virtual Private Server (VPS) running Debian Linux",
        "- Additional Integrations: Change.org API for petition embedding",
        {
          type: 'multimedia',
          mediaType: 'image',
          src: techstack,
          alt: 'project techstack',
        },

      ]
    },

    {
      id: "outcome",
      title: "Outcome",
      content: [
        "The TCD Renters' Solidarity Network website successfully achieved its primary goals:",
        "- Created a centralized platform for information and resources",
        "- Improved the organization's legitimacy through professional design",
        "Future improvements:",
        "- Further development of dynamic content management features",
        "- Expansion of interactive elements and data visualization",
        "- Ongoing accessibility audits and improvements",
        "- Enhanced social media integration",
        "The TCD Renters' Solidarity Network website stands as a powerful tool for student advocacy, providing a solid foundation for future growth and engagement in the fight for better housing conditions for Trinity College Dublin students."
      ]
    },
  ];

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
            <BreadcrumbItem isCurrentPage>TCD Renters Network</BreadcrumbItem>
          </Breadcrumb>
        </Column>
    <CaseStudy projectData={projectData} sections={sections} />
    </div>);
}

export default TCDRenters