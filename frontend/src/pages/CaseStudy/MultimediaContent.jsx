import React from 'react';
import { AspectRatio } from '@carbon/react';
import './MultimediaContent.scss';

const MultimediaContent = ({ type, src, alt, caption }) => {
  const renderContent = () => {
    switch (type) {
      case 'image':
        return (
          <img 
            src={src} 
            alt={alt} 
            style={{ width: '100%', height: 'auto', marginBottom:'16px' }}
            onError={(e) => {
              console.error(`Error loading image: ${src}`);
              e.target.src = '/path/to/fallback-image.jpg';
            }}
          />
        );
      case 'video':
        return (
          <AspectRatio ratio="16x9">
            <video controls width="100%">
              <source src={src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </AspectRatio>
        );
      case 'youtube':
        return (
          <AspectRatio ratio="16x9">
         <div className="youtube-container">
            <iframe
              src={`https://www.youtube.com/embed/${src}`}
              title={alt}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            </div>
          </AspectRatio>
        );
      default:
        return null;
    }
  };

  return (
    <div className="multimedia-content">
      {renderContent()}
      {caption && <p className="multimedia-caption">{caption}</p>}
    </div>
  );
};

export default MultimediaContent;