import * as Styled from '../styles/styles';
import mobileHeaderImage from '../assets/img/mobile/image-header.jpg';
import headerArrow from '../assets/img/icon-arrow-down.svg';
import Nav from './Nav';
import MobileMenu from './MobileMenu';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Styled.Header>
      <div className="header-content">
        <Nav setIsOpen={() => setIsOpen(!isOpen)} />
        {isOpen && <MobileMenu />}
        <div className="header-cta">
          <h1 className="header-text">WE ARE CREATIVES</h1>
          <img className="header-arrow" src={headerArrow} alt="down arrow" />
        </div>
      </div>
      <img
        className="header-background"
        src={mobileHeaderImage}
        alt="orange slice"
      ></img>
    </Styled.Header>
  );
}
