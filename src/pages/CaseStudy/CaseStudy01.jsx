import React from 'react';
import { Column, Breadcrumb, BreadcrumbItem } from '@carbon/react';
import CaseStudy from './CaseStudy'; 
import nomnomUi from '../../assets/img/nomnom_ui.png';
// import userResearchImage from '../assets/img/user-research.jpg';
// import appDemoVideo from '../assets/video/app-demo.mp4';

const NOMNOMCaseStudy = () => {
  const projectData = {
    title: "NOMNOM Mobile App",
    subtitle: "How We Unlock the Value of Restaurant Menus",
    tags: ["UX Design", "Frontend", "React Native", "Google Cloud", "Gemini AI"],
    role: "Project Manager, Product Designer, Frontend Developer",
    timeframe: "2 Months",
    teamSize: "6 people",
    productStage: "0 -> 1",
    imageSrc: nomnomUi,
  };

  const sections = [
    {
      id: "overview",
      title: "Project Overview",
      content: [
        "NOMNOM is a mobile application that revolutionizes restaurant menu discovery. It addresses common frustrations in finding accurate food information by converting user-uploaded menu photos into accessible, text-based formats. The app enables users to search for specific dishes across multiple restaurants, shifting from a restaurant-centric to a dish-centric approach.",
        {
          type: 'multimedia',
          mediaType: 'image',
          src: nomnomUi,
          alt: 'NOMNOM app interface',
          caption: 'NOMNOM app main screen showing various restaurant menus'
        },
        "Developed as a master's degree project, I led a cross-functional and multi-cultural team of six to create this app from concept to MVP in a 2-month timeframe with zero budget. My role encompassed project management, product design, and frontend development."
      ]
    },
    {
      id: "problem",
      title: "Problem Statement",
      content: [
        "Existing platforms like Google Maps, TripAdvisor, and OpenTable often provide outdated or incomplete menu information for restaurants. This is primarily due to their reliance on restaurant staff to update digital information, a task often overlooked in busy restaurant operations.",
        "Users frequently encounter unclear, outdated menu pictures or broken website links when trying to access menu details. This gap in accurate, accessible menu information creates frustration for diners and missed opportunities for restaurants.",
        {
          type: 'multimedia',
          mediaType: 'image',
          src: nomnomUi,
          alt: 'User research process',
          caption: 'Conducting user interviews to understand pain points in menu discovery'
        }
      ]
    },
    {
      id: "solution",
      title: "Our Solution",
      content: [
        "We developed an AI-powered system to convert user-uploaded menu photos into accessible, text-based formats. Key features of our solution include:",
        "1. Image-to-Text Conversion: Utilizing Google Cloud Vision API and Gemini AI to accurately extract text from menu images.",
        "2. Dish-Centric Search: Allowing users to search for specific dishes across multiple restaurants in their area.",
        "3. User-Generated Content: Encouraging users to upload and update menu information, creating a constantly refreshed database.",
        "4. Restaurant Collaboration: Providing tools for restaurant owners to verify and update their menu information directly.",
        {
          type: 'text',
          alt: 'NOMNOM app demo',
          caption: 'A walkthrough of the NOMNOM apps key features'
        }
      ]
    },
    {
      id: "process",
      title: "Design and Development Process",
      content: [
        "Our process followed a rapid prototyping and iterative development approach:",
        "1. User Research: Conducted surveys and interviews to understand user priorities and pain points.",
        "2. Competitor Analysis: Analyzed existing solutions to identify gaps and opportunities.",
        "3. Ideation and Prototyping: Used Figma to create low and high-fidelity prototypes.",
        "4. Technology Stack Selection: Chose React Native for cross-platform development, Google Cloud for backend services, and Gemini AI for advanced text processing.",
        "5. Agile Development: Implemented 1-week sprint cycles with daily stand-ups and weekly retrospectives.",
        "6. User Testing: Conducted regular usability tests with potential users to refine the UI/UX."
      ]
    },
    {
      id: "challenges",
      title: "Challenges and Learnings",
      content: [
        "Throughout the project, we faced several challenges:",
        "1. AI Accuracy: Ensuring high accuracy in menu text extraction, especially for handwritten or stylized menus.",
        "2. Data Privacy: Implementing robust measures to protect user data and comply with privacy regulations.",
        "3. User Engagement: Designing a reward system to encourage users to contribute menu updates.",
        "4. Cross-Platform Consistency: Ensuring a consistent user experience across iOS and Android platforms.",
        "These challenges provided valuable learning experiences in AI implementation, data handling, and cross-platform development."
      ]
    },
    {
      id: "outcome",
      title: "Outcome and Future Plans",
      content: [
        "The NOMNOM app was successfully launched as an MVP, receiving positive feedback from initial users. Key outcomes include:",
        "• 90% accuracy in menu text extraction",
        "• Average user rating of 4.7/5 stars in beta testing",
        "• 30% faster menu discovery compared to traditional methods",
        "Future plans include:",
        "1. Expanding the AI capabilities to include dish recognition from images",
        "2. Implementing a recommendation system based on user preferences",
        "3. Developing partnerships with local restaurants for exclusive offers",
        "This project not only delivered a useful product but also showcased our team's ability to innovate and execute under constraints, setting a foundation for future enhancements and scalability."
      ]
    }
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
            <BreadcrumbItem isCurrentPage>NOMNOM</BreadcrumbItem>
          </Breadcrumb>
        </Column>
    <CaseStudy projectData={projectData} sections={sections} />
    </div>);
};

export default NOMNOMCaseStudy;