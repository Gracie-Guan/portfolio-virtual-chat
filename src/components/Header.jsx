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
import { LogoLinkedin, Email } from '@carbon/react/icons';
// import { Link } from 'react-router-dom';

function MyHeader() {

    const handleLinkedInClick = () => {
      window.open('https://www.linkedin.com/in/gracie-guan/', '_blank');
    };
  
    const handleEmailClick = () => {
      window.location.href = 'mailto:gracie.yy.guan@gmail.com';
    };

    const handleNavigation = (page) => {
      window.dispatchEvent(new CustomEvent('navigate', { detail: page }));
    };

  return (<HeaderContainer render={({
    isSideNavExpanded,
    onClickSideNavExpand
  }) => <>
          <Header aria-label="Gracie Guan Portfolio">
            <SkipToContent />
            <HeaderMenuButton aria-label={isSideNavExpanded ? 'Close menu' : 'Open menu'} onClick={onClickSideNavExpand} isActive={isSideNavExpanded} aria-expanded={isSideNavExpanded} />
            <HeaderName href="#" onClick={() => handleNavigation('home')} prefix={null}>
              Gracie Guan
            </HeaderName>
            <HeaderNavigation aria-label="Gracie Guan Portfolio">
              <HeaderMenuItem href="#" onClick={() => handleNavigation('about')}>About</HeaderMenuItem>
              <HeaderMenuItem href="#" onClick={() => handleNavigation('work')}>Work</HeaderMenuItem>
              <HeaderMenuItem href="#" onClick={() => handleNavigation('gallery')}>Gallery</HeaderMenuItem>
            </HeaderNavigation>
            <HeaderGlobalBar>
              <HeaderGlobalAction aria-label="Linkedin" onClick={handleLinkedInClick}>
                <LogoLinkedin size={20} />
              </HeaderGlobalAction>
              <HeaderGlobalAction aria-label="Email" onClick={handleEmailClick}>
                <Email size={20} />
              </HeaderGlobalAction>
            </HeaderGlobalBar>
            <SideNav aria-label="Side navigation" expanded={isSideNavExpanded} isPersistent={false} onSideNavBlur={onClickSideNavExpand}>
              <SideNavItems>
                <HeaderSideNavItems>
                  <HeaderMenuItem href="#" onClick={() => handleNavigation('about')} >About</HeaderMenuItem>
                  <HeaderMenuItem href="#" onClick={() => handleNavigation('work')}>Work</HeaderMenuItem>
                  <HeaderMenuItem href="#" onClick={() => handleNavigation('gallery')}>Gallery</HeaderMenuItem>
                </HeaderSideNavItems>
              </SideNavItems>
            </SideNav>
          </Header>
        </>} />
  );
}

export default MyHeader;