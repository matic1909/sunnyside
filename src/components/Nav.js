import logo from '../assets/img/logo.svg';
import hamburgerIcon from '../assets/img/icon-hamburger.svg';
import * as Styled from '../styles/styles';

export default function Nav() {
  return (
    <Styled.Nav>
      <div className="logo">
        <img src={logo} alt="Sunnyside logo" />
      </div>
      <div className="hamburger-icon">
        <img src={hamburgerIcon} alt="open menu" />
      </div>
    </Styled.Nav>
  );
}
