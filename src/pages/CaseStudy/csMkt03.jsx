import React from 'react';
import { Column, Breadcrumb, BreadcrumbItem, Link } from '@carbon/react';
import CaseStudy from './CaseStudy'; 
import testdrive from '../../assets/img/testdrive2.jpg';

function TestDrive() {
  const projectData = {
    title: "Blueshark Test Drive SOP",
    subtitle: "Templated the Test Drive Events",
    tags: ["SOP", "Event", "Client Support", "User Engagement"],
    role: "Brand Manager",
    timeframe: "N/A",
    teamSize: "3 people",
    productStage: "Promote",
    imageSrc: testdrive,
  };
  const sections = [
    {
      id: "problem",
      title: "Problem",
      content: [
        "For scooter products, consumers' purchasing decisions heavily rely on offline experiences, especially test drives, which can directly determine the sale. As a startup brand, Blushark doesn't have enough sales locations, and most dealers lack experience in organizing formal test drive events.",
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
        "As the brand manager, I needed to develop a standardized execution process, including: Event procedures, Venue instructions, Brand identity materials,Experience guidance for product features.",
        "This standardization had two main purposes:",
        "- To support business partners in independently executing these activities",
        "- To ensure consistency in brand image and service experience across various test drive events"
      ]
    },
    {
      id: "actions",
      title: "Actions",
      content: [
        "To ensure the feasibility of the Standard Operating Procedure (SOP) I developed, I applied this process during a test drive session after an exhibition.",
        "After execution, I revised the SOP and created a document to send to business partners. Subsequently, colleagues translated it into different language versions for reference by business partners in other target markets.",
      ]
    },
    {
      id: "result",
      title: "Results",
      content: [
        "- Each event can accommodate about 50 people (half-day)",
        "- The budget for a single event can be controlled within 5,000 euros",
        "- After execution and verification, the conversion rate from reservation to confirmed order can reach 60%"
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
            <BreadcrumbItem isCurrentPage>Test Drive SOP</BreadcrumbItem>
          </Breadcrumb>
        </Column>
    <CaseStudy projectData={projectData} sections={sections} />
    </div>);



}

export default TestDrive