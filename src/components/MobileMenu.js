import * as Styled from '../styles/styles';

export default function MobileMenu() {
  return (
    <Styled.MobileMenu>
      <a href="/">About</a>
      <a href="/">Services</a>
      <a href="/">Projects</a>
      <a className="selected" href="/">
        Contact
      </a>
    </Styled.MobileMenu>
  );
}
