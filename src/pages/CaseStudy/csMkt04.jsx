import React from 'react';
import { Column, Breadcrumb, BreadcrumbItem, Link } from '@carbon/react';
import CaseStudy from './CaseStudy'; 
import chiemlong from '../../assets/img/chimelong.jpg';
import kingofcomedy from '../../assets/img/kingofcomedy.jpeg';
import mrx from '../../assets/img/mrx.jpeg';

function MktIntegrated() {
  const projectData = {
    title: "Chimelong Marketing Campaign",
    subtitle: "Produce New Attraction for old Paradise",
    tags: ["Integrated Marketing", "Celebrity", "Roadshow", "Vlog"],
    role: "Project Manager",
    timeframe: "3 Months",
    teamSize: "4 people",
    productStage: "N/A",
    imageSrc: chiemlong,
  };
  const sections = [
    {
      id: "background",
      title: "Project Background",
      content: [
        "Chimelong Paradise is the largest tourist resort in southern China. The Spring Festival is Chimelong's busiest season of the year, but it has limited original content, and facilities cannot be changed or added. At the same time, new competitors are emerging in surrounding cities to compete for tourists. Chimelong needs new content and marketing events to attract visitors.",

      ]
    },
    {
      id: "task",
      title: "Task",
      content: [
        "- Plan and introduce new entertainment resources to combine with Chimelong's existing facilities and park activities, ensure successful implementation of entertainment resources, and conduct network-wide promotion.",
        "- Plan social media promotion strategies, control copy, images, videos, and other materials, select KOLs and supervise the release rhythm."
      ]
    },
    {
      id: "strategy",
      title: "Project Strategy",
      content: [
        "Chimelong's main customer groups are divided into two categories: family groups with children and young groups of friends traveling together. We sought entertainment collaboration resources that match the interests of these two types of groups.",
      ]
    },
    {
      id: "action1",
      title: "Movie Roadshow Collab",
      content: [
        "Targeting the family with children group, which accounts for the highest proportion of Chimelong's visitors, we invited Stephen Chow and the New King of Comedy production team to Chimelong Wildlife World for a roadshow event.",
        "Warm-up:",
        "Chimelong's multiple parks jointly launched King of Comedy themed activities (online + offline)",
        "Promoted Unexpected encounter with Stephen Chow social content, teaser videos, and multi-angle promotional materials",
        "Promotion:",
        "On the day of the event, the movie's official Weibo and Chimelong's official Weibo simultaneously live-streamed photos and short videos",
        "Local lifestyle and entertainment influencers assisted in event promotion",
        {
          type: 'multimedia',
          mediaType: 'image',
          src: kingofcomedy,
          alt: 'project walkthrough',
        },
        "Result:",
        "- 40k paid admissions to participate in the event. The event attracted over 40,000 people to visit the park on the day, 2-3 times that of a regular weekend. Calculating at 300 yuan per ticket, the ticket revenue on the event day alone was 10 times the collaboration fee.",
        "- Achieved nearly 20 million social media reads. On the Weibo platform, the topic #NewKingofComedyatChimelong# received nearly 19.643 million reads and 56,000 discussions.",
        "- Generated 3 hot marketing topics. During the roadshow, we arranged three highlight topics: Chimelong gorilla presents wheat to Stephen Chow, Cecilia Cheung and Stephen Chow recreate classic scene, and Stephen Chow talks about collaboration with Ng Man-tat, all of which sparked heated discussions on social media.",

      ]
    },
    {
      id: "action2",
      title: "Young Singer Group Vlog",
      content: [
        "For the young customer group, we invited the boy group MR-X to Zhuhai Chimelong Ocean Resort to film a short variety show about visiting the park. We promoted it through the entertainment account Orange Entertainment and used media methods like Fan Pass to precisely reach MR-X fans.",
        "Result:",
        "The series of vlog achieved over 50 million in reach, with a total video play count of over 30 million, and social media interactions reaching 238k.",
        {
          type: 'multimedia',
          mediaType: 'image',
          src: mrx,
          alt: 'project walkthrough',
        },
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
            <BreadcrumbItem isCurrentPage>Integrated Marketing Campaign</BreadcrumbItem>
          </Breadcrumb>
        </Column>
    <CaseStudy projectData={projectData} sections={sections} />
    </div>);



}

export default MktIntegrated