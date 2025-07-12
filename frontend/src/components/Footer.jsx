import React from 'react';
import { Grid, Column } from '@carbon/react';
import { LogoLinkedin, Email, LogoGithub } from '@carbon/icons-react';
import './Footer.scss';
import logo from '../assets/img/logo_white.svg'
import { Link } from 'react-router-dom';

const Footer = () => {
  const handleScrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="custom-footer">
      <Grid className="custom-grid" narrow>
        <Column lg={2} md={2} sm={2}>
          <Link to="/" onClick={handleScrollToTop}>
            <img  className="logo" src={logo} alt='Gracie logo' height={100}/>
          </Link>
        </Column>
        <Column lg={10} md={4} sm={2} className="nav-column">
          <nav>
            <ul>
              <li><Link to="/chat" aria-label="Chat page">Chat</Link></li>
              <li><Link to="/work" aria-label="Work page">Work</Link></li>
              <li><Link to="/playground" aria-label="visual playground page">Playground</Link></li>
            </ul>
          </nav>
        </Column>
        <Column lg={4} md={2} sm={4} className="social-column">
          <div className="social-icons">
            <Link to="https://www.linkedin.com/in/gracie-guan" target="_blank" rel="noopener noreferrer" aria-label="Linkedin">
              <LogoLinkedin size={20} />
            </Link>
            <Link to="mailto:gracie.yy.guan@gmail.com" aria-label="email">
              <Email size={20} />
            </Link>
            <Link to="https://github.com/Gracie-Guan/" aria-label="github">
              <LogoGithub size={20} />
            </Link>
          </div>
          <p className="copyright">
            Website designed and developed with<br />
            IBM Carbon Design System.<br />
            ©2025 Gracie Guan. All rights reserved.
          </p>
        </Column>
      </Grid>
    </footer>
  );
};

export default Footer;