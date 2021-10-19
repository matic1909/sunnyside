import logo from '../assets/img/logo.svg';
import facebook from '../assets/img/icon-facebook.svg';
import twitter from '../assets/img/icon-twitter.svg';
import pinterest from '../assets/img/icon-pinterest.svg';
import instagram from '../assets/img/icon-instagram.svg';
import * as Styled from '../styles/styles';

export default function Footer() {
  return (
    <Styled.Footer>
      <img src={logo} alt="Sunnyside logo" />
      <div className="footer-links">
        <a>About</a>
        <a>Services</a>
        <a>Projects</a>
      </div>
      <div className="footer-social-links">
        <img src={facebook} alt="facebook" />
        <img src={twitter} alt="twitter" />
        <img src={instagram} alt="instagram" />
        <img src={pinterest} alt="pinterest" />
      </div>
    </Styled.Footer>
  );
}
