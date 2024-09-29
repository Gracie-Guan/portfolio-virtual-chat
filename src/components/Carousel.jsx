import React, { useState, useEffect } from 'react';
import { Grid, Column, Tile, PaginationNav } from '@carbon/react';
import './Carousel.scss';

const journeyItems = [
  {
    title: "What brings me here?",
    description: "Description of what brings me here...",
    image: null
  },
  {
    title: "Title 1",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "/path-to-image-1.jpg"
  },
  {
    title: "Title 2",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "/path-to-image-2.jpg"
  },
  {
    title: "Title 3",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "/path-to-image-3.jpg"
  },
  {
    title: "Title 4",
    description: "Additional journey item description.",
    image: "/path-to-image-4.jpg"
  },
  {
    title: "Title 5",
    description: "Another journey item description.",
    image: "/path-to-image-5.jpg"
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