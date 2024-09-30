import React, { useState, useEffect } from 'react';
import { Grid, Column, Tile, PaginationNav } from '@carbon/react';
import './Carousel.scss';

import undergrad from '../assets/img/introphoto.jpg';
import tcdgrad from '../assets/img/SNG01193.jpg';
import strategy from '../assets/img/strategy.jpg';
import production from '../assets/img/production.jpg';
import meizu from '../assets/img/meizu.jpg';
import pro from '../assets/img/pro.jpg';

const journeyItems = [
  {
    title: "What brings me here?",
    description: "From a small city in China to the vibrant tech scene in Dublin, transitioning from a marketer to exploring exciting opportunities in technology, my journey is driven by curiosity and determination.",
    image: null
  },
  {
    title: "Diving into the Digital Realm",
    description: "2023 - 2024 | I graduated with first class honours from Trinity with an MSc in Interactive Digital Media.",
    image: tcdgrad,
  },
  {
    title: "Developing Strategy Thinking",
    description: "2019 - 2023 | Working in a startup has pushed me to think more multi-dimensionally and results-focused. Over time, I have learned to take a more strategic approach when planning market actions.",
    image: strategy,
  },
  {
    title: "Having Fun in Content Marketing",
    description: "2018 - 2019 | Content marketing lets me blend creativity with work, while WPP has taught me to think globally and outside the box.",
    image: production,
  },
  {
    title: "Experiencing the Tech Vibe",
    description: "2015 - 2018 | Meizu was like another college for me, where I gain interest in tech and try to expand my boundaries.",
    image: meizu,
  },
  {
    title: "Learning to be a Pro",
    description: "2014 - 2015 | My career began as an Account Executive at a digital marketing agency, where I learned the importance of professionalism, work standards, and strong ethics.",
    image: pro,
  },
  {
    title: "Juggling Dual Degree",
    description: "2010 - 2014 | I graduated with dual Bachelor's degrees in Finance and TV Broadcasting, giving me two distinct perspectives to better understand the world.",
    image: undergrad,
  }
];

const Carousel = () => {
  const itemsPerPage = 4;
  const totalItems = journeyItems.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedItems, setDisplayedItems] = useState([]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
    setDisplayedItems(journeyItems.slice(startIndex, endIndex));
    console.log(`Current page: ${currentPage}, Showing items ${startIndex + 1} to ${endIndex}`);
  }, [currentPage]);

  const handlePageChange = (page) => {
    console.log(`Changing to page: ${page}`);
    setCurrentPage(page);
  };

  return (
    <section className="journey-section">
      <h2>Journey</h2>
      <Grid narrow className="journey-grid">
        {displayedItems.map((item, index) => (
          <Column sm={4} md={2} lg={4} key={index}>
            <Tile className={`journey-tile ${index === 0 && currentPage === 1 ? 'journey-tile--highlighted' : ''}`}>
              {item.image && (
                <div className="journey-image">
                  <img src={item.image} alt={item.title} />
                </div>
              )}
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Tile>
          </Column>
        ))}
      </Grid>
      <div className="journey-navigation">
        <PaginationNav 
          itemsShown={5}
          totalItems={totalPages+1}
          page={currentPage}
          onChange={handlePageChange}
        />
      </div>
    </section>
  );
};

export default Carousel;