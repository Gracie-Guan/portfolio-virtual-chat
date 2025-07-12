import React from 'react';
import './SidebarNavigation.scss';

const SidebarNavigation = ({ items, currentSection, onItemClick }) => {
  return (
    <nav className="bx--tableofcontents__desktop">
      <ul className="bx--sub-content-left">
        {items.map((item, index) => (
          <li
            key={index}
            className={`bx--tableofcontents__desktop__item ${
              currentSection === item.id ? 'bx--tableofcontents__desktop__item--active' : ''
            }`}
          >
            <button
              className="bx--tableofcontents__desktop__item-link"
              onClick={() => onItemClick(item.id)}
              data-target={item.dataTarget}
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SidebarNavigation;