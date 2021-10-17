import * as Styled from '../styles/styles';
import mobileHeaderImage from '../assets/img/mobile/image-header.jpg';
import headerArrow from '../assets/img/icon-arrow-down.svg';
import Nav from './Nav';

export default function Header() {
  return (
    <Styled.Header>
      <div className="header-content">
        <Nav />
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
