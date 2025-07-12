import React from 'react';
import { Column, Breadcrumb, BreadcrumbItem } from '@carbon/react';
import CaseStudy from './CaseStudy'; 
import nomnomUi from '../../assets/img/nomnom_ui.png';

import persona1 from '../../assets/img/persona1.jpg';
import persona2 from '../../assets/img/persona2.jpg';
import persona3 from '../../assets/img/persona3.jpg';
import MVPplan from '../../assets/img/MVPplan.png';
import Wireframe from '../../assets/img/Wireframe.png';
import FinalDesign from '../../assets/img/FinalDesign.png';
import designguideline from '../../assets/img/designguideline.png';
import illustrations from '../../assets/img/illustrations.png';
import testimonial from '../../assets/img/testimonial.png';
import objectives from '../../assets/img/objectives.png';

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
      id: "summary",
      title: "TL;DR",
      content: [
        "NOMNOM addresses a common frustration in the restaurant industry: outdated or incomplete menu information on existing platforms, which leads to user dissatisfaction and missed opportunities for restaurants.", 
        "To solve this, we developed an AI-powered mobile application that revolutionizes menu discovery. Our approach leverages image-to-text conversion using Google Cloud Vision API and Gemini AI, enabling a dish-centric search across multiple restaurants. We encourage user-generated content to keep information current and provide tools for restaurant owners to verify and update their menu details. ",
        "The result:",
        "- An MVP that achieved 90% accuracy in menu text extraction",
        "- Largely enhanced the accessibility of menu, garnered highly positive feedback in beta testing", 
        "- Enabled faster menu discovery compared to traditional methods.", 
        "This project not only delivered a useful product but also showcased our team's ability to innovate and execute under constraints, setting a strong foundation for future enhancements and scalability in the restaurant tech space.",
        {
          type: 'multimedia',
          mediaType: 'youtube',
          src: '1QEd1i37qeo?si=wWQdvnXu8nTkWaBU',
          alt: 'nomnom walk through video',
        },
      ]
    },
    {
      id: "problem",
      title: "Problem Statement",
      content: [
        "Existing platforms like Google Maps, TripAdvisor, and OpenTable often provide outdated or incomplete menu information for restaurants. This is primarily due to their reliance on restaurant staff to update digital information, a task often overlooked in busy restaurant operations.",
        "Users frequently encounter unclear, outdated menu pictures or broken website links when trying to access menu details. This gap in accurate, accessible menu information creates frustration for diners and missed opportunities for restaurants.",
      ]
    },
    {
      id: "problem objective",
      title: "Objective",
      content: [
        {
          type: 'multimedia',
          mediaType: 'image',
          src: objectives,
          alt: 'project objectives',
        },
      ]
    },
    {
      id: "research",
      title: "Research",
      content: [
        "Our research process for NOMNOM involved both quantitative and qualitative methods to gather insights and validate our concept:",
        "1. User Survey: We conducted a survey to understand user priorities when choosing a restaurant. The results revealed that price, cuisine, and menu were the three main concerns for potential users. We also found the user likes to discovery restaurant and foods on social media, implied that they have strong demand of food content.",
        {
          type: 'multimedia',
          mediaType: 'image',
          src: persona1,
          alt: 'User persona',
          // caption: 'Persona: social-active local foodie'
        },
        {
          type: 'multimedia',
          mediaType: 'image',
          src: persona2,
          alt: 'User persona',
          // caption: 'Persona: budget-conscious international student'
        },
        {
          type: 'multimedia',
          mediaType: 'image',
          src: persona3,
          alt: 'User persona',
          // caption: 'Persona: health-conscious professional'
        },
        
        "2. Competitor Analysis and Restaurant Owner Interviews Findings: ",
        "- All platform and apps need the restaurant owners to update or upload their menus.",
        "- Most restaurants do not have a dedicated staff to update their online information.",
        "- Price and cuisine are two top factors affect user/'s choice on restaurants",
      ]
    },
    {
      id: "prototype",
      title: "Ideation and Prototype",
      content: [
        "Centred with the idea of transforming user uploaded data to text-based menu interface, we explore how could we maximise the use of menu database. Through team discussions and an idea pool document, we refined our concept and selected the key features in MVP. ",
        {
          type: 'multimedia',
          mediaType: 'image',
          src: MVPplan,
          alt: 'MVP Plan',
        },
        {
          type: 'multimedia',
          mediaType: 'image',
          src: Wireframe,
          alt: 'Wireframe',
        },
        "• Dual View: Toggle between restaurant and dish views. Browse by venue or explore individual dishes across multiple restaurants.",
        "• Dish-Specific Searching: Search for specific dishes rather than just restaurants. NOMNOM ranks dish searching results by ratings, helping you find the best version of your craving.",
        "• “Tender” for Surprise: Can't decide? Let NOMNOM choose for you. Get a random restaurant or dish recommendation to spice up your dining routine.",
        "• Accurate Reference for the Price: We provides real-time calculation for the average main dish price of the restaurants, showing them alongside with the restaurant information. ",
        "This menu-centric approach shaped our feature set and user interface design, defining NOMNOM's unique position in the food discovery app landscape.",
      ]
    },
    {
      id: "development",
      title:"Development",
      content:[
        'To achieve the goal of extracting menu information from images, we initially considered OCR. However, after experimenting, we discovered that the extracted information was disorganized.',
        "This challenge led us to explore Large Language Models (LLMs). We integrated the Gemini API into our system, tasking it with not only reading the menu information but also organizing it according to our database schema.",
        "This AI-powered approach allows us to acquire menu data efficiently, so that we can build a dish-centric experience on top of it.",
        "Besides Gemini API, we are using React Native for the frontend to ensure a seamless cross-platform availability with limited development time. We are using Google Maps Platform to provide in-app location searching, and TripAdvisor API provide us basic restaurant data. We chose to use Node.js to create a efficient backend, and MongoDB gives us the flexibility to handle our complex data structures, while AWS ensure we can scale as our app grows.",
      ]
    },
    {
      id: "final design",
      title:"Final Design",
      content:[

        {
          type: 'multimedia',
          mediaType: 'image',
          src: FinalDesign,
          alt: 'nomnom final design',
        },
        {
          type: 'multimedia',
          mediaType: 'image',
          src: designguideline,
          alt: 'nomnom final ui',
        },
        {
          type: 'multimedia',
          mediaType: 'image',
          src: illustrations,
          alt: 'nomnom illustrations',
        },
      ]
    },
    {
      id: "outcome",
      title:"Outcome",
      content:[
        "Showcase Success:",
        "- NOMNOM stood out at the showcase, recognized for having the highest level of completion among all presented projects.",
        "- The demo attracted significant interest, with over 50 people interacting with the application.",
        "- User feedback was positive, with more than 80% of comments praising the menu feature and the innovative tender function.",
        "Some comments from our potential users:",
        {
          type: 'multimedia',
          mediaType: 'image',
          src: testimonial,
          alt: 'testimonial from showcase',
        },
        "NOMNOM's development yielded impressive results across several key areas:",
        "Project Objective Completion:",
        "- We successfully implemented our feature design to address the outdated menu problem, a core issue we set out to solve.",
        "- Our team delivered a fully functional Minimum Viable Product (MVP) that included all planned core features in two months time frame.",
        "- Despite being new to many of the technologies used, we successfully integrated complex systems including Gemini AI, Google Maps, and MongoDB, demonstrating our ability to quickly adapt and learn.",
        "Academic Achievement:",
        "- The project received a grade of 75/100 (first class). This score is assessed by 8 examiners.",


      ]}
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