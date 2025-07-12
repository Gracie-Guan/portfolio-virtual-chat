import React from 'react';

import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  HeaderSideNavItems,
  HeaderMenuButton,
  SideNav, SideNavItems,
} from '@carbon/react';
import { LogoLinkedin, Email, LogoGithub } from '@carbon/react/icons';
import { Link  } from 'react-router-dom';

function MyHeader() {

    const handleLinkedInClick = () => {
      window.open('https://www.linkedin.com/in/gracie-guan/', 'linkedin');
    };
  
    const handleEmailClick = () => {
      window.location.href = 'mailto:gracie.yy.guan@gmail.com';
    };

    const handleGithubClick = () => {
      window.open('https://github.com/Gracie-Guan/', 'github');
    }

  return (<HeaderContainer render={({
    isSideNavExpanded,
    onClickSideNavExpand
  }) => <>
          <Header aria-label="Gracie Guan Portfolio">
            <SkipToContent />
            <HeaderMenuButton aria-label={isSideNavExpanded ? 'Close menu' : 'Open menu'} onClick={onClickSideNavExpand} isActive={isSideNavExpanded} aria-expanded={isSideNavExpanded} />
            <HeaderName as={Link} to="/" prefix={null}>
              Gracie Guan
            </HeaderName>
            <HeaderNavigation aria-label="Gracie Guan Portfolio">
              <HeaderMenuItem as={Link} to="/chat">Chat</HeaderMenuItem>
              <HeaderMenuItem as={Link} to="/work">Work</HeaderMenuItem>
              <HeaderMenuItem as={Link} to="/playground">Visual Playground</HeaderMenuItem>
            </HeaderNavigation>
            <HeaderGlobalBar>
              <HeaderGlobalAction aria-label="Linkedin" onClick={handleLinkedInClick}>
                <LogoLinkedin size={20} />
              </HeaderGlobalAction>
              <HeaderGlobalAction aria-label="Email" onClick={handleEmailClick}>
                <Email size={20} />
              </HeaderGlobalAction>
              <HeaderGlobalAction aria-label="Github" onClick={handleGithubClick}>
                <LogoGithub size={20} />
              </HeaderGlobalAction>
            </HeaderGlobalBar>
            <SideNav aria-label="Side navigation" expanded={isSideNavExpanded} isPersistent={false} onSideNavBlur={onClickSideNavExpand}>
              <SideNavItems>
                <HeaderSideNavItems>
                  <HeaderMenuItem as={Link} to="/chat">Chat</HeaderMenuItem>
                  <HeaderMenuItem as={Link} to="/work">Work</HeaderMenuItem>
                  <HeaderMenuItem as={Link} to="/playground">Visual Playground</HeaderMenuItem>
                </HeaderSideNavItems>
              </SideNavItems>
            </SideNav>
          </Header>
        </>} />
  );
}

export default MyHeader;