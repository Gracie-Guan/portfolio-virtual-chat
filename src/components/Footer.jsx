import React from 'react';
import { Grid, Column } from '@carbon/react';
import { LogoLinkedin, Email, LogoGithub } from '@carbon/icons-react';
import './Footer.scss';
import logo from '../assets/img/logo_white.svg'
import { Link } from 'react-router-dom';

const Footer = () => {
  
  return (
    <footer className="custom-footer">
      <Grid className="custom-grid" narrow>
        <Column lg={2} md={2} sm={2}>
          <div>
            <img className="logo" src={logo} alt='Gracie logo' height={100}/>
          </div>
        </Column>
        <Column lg={10} md={4} sm={2}>
          <nav>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/work">Work</Link></li>
              <li><Link to="/playground">Visual Playground</Link></li>
            </ul>
          </nav>
        </Column>
        <Column lg={4} md={2} sm={4}>
          <div className="social-icons">
            <Link to="https://www.linkedin.com/in/gracie-guan" target="_blank" rel="noopener noreferrer">
              <LogoLinkedin size={20} />
            </Link>
            <Link to="mailto:gracie.yy.guan@gmail.com">
              <Email size={20} />
            </Link>
            <Link to="https://github.com/Gracie-Guan/">
              <LogoGithub size={20} />
            </Link>
          </div>
          <p className="copyright">
            Website designed and developed with<br />
            IBM Carbon Design System.<br />
            ©2024 Gracie Guan. All rights reserved.
          </p>
        </Column>
      </Grid>
    </footer>
  );
};

export default Footer;