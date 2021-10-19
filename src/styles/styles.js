import styled from 'styled-components';

export const Header = styled.div`
  color: white;
  width: 100%;

  .header-content {
    position: absolute;
    width: 100%;
  }

  .header-cta {
    font-weight: 900;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2em;
  }
  .header-text {
    text-align: center;
    font-size: 2.5rem;
    letter-spacing: 0.2rem;
    margin-bottom: 1em;
  }
  .header-background {
    width: 100%;
    display: block;
  }
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  padding: 1.5em 24px;
  justify-content: space-between;
  .hamburger-icon {
    cursor: pointer;
  }
`;

export const Article = styled.div`
  display: flex;
  flex-direction: column;
  .article-content {
    text-align: center;
    padding: 3em 1.5em;
    h2 {
      margin-bottom: 1em;
      font-size: 2rem;
    }
    p {
      flex: 1;
      font-size: 1rem;
      font-family: 'Barlow', sans-serif;
      color: gray;
      line-height: 1.8;
      margin-bottom: 2em;
    }
    a {
      text-decoration: none;
      color: black;
    }
  }
  .article-image {
    display: block;
    flex: 1;
    width: 100%;
  }
`;

export const ImageArticle = styled.div`
  position: relative;
  color: ${(p) => p.color};
  .background-image {
    display: block;
    width: 100%;
  }
  .text-content {
    position: absolute;
    width: 100%;
    text-align: center;
    padding: 2em 1.5em;
    top: 60%;
    h2 {
      margin-bottom: 1em;
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
      font-family: 'Barlow';
      line-height: 1.8;
      padding-left: 0.5em;
      padding-right: 0.5em;
    }
  }
`;

export const Testimonals = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 3em;
  .testimonals-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
  h2 {
    color: gray;
    font-size: 1rem;
    letter-spacing: 0.2rem;
    margin-bottom: 3em;
  }
  @media (min-width: 800px) {
    padding: 6em;
    .testimonals-wrapper {
      flex-direction: row;
    }
  }
`;

export const Testimonal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2em 1.5em;
  img {
    border-radius: 50%;
    width: 5rem;
  }
  h4 {
    padding: 0.5em 0;
  }
  p,
  h5 {
    font-family: 'Barlow';
  }
  p {
    padding: 1.5em;
  }
  h5 {
    color: grey;
  }

  @media (min-width: 800px) {
    p {
      padding-left: 0;
      padding-right: 0;
    }
  }
`;

export const ImageGallery = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  img {
    width: 100%;
  }
`;

export const Footer = styled.footer`
  font-family: 'Barlow';
  background-color: var(--dark-moderate-cyan);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > img {
    filter: invert(1);
    width: 250px;
    padding: 3em;
    margin-bottom: 1em;
  }
  .footer-links {
    width: 100%;
    display: flex;
    font-size: 1.2rem;
    justify-content: space-evenly;
  }

  .footer-social-links {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4em;
    img {
      height: 35px;
      margin: 1em;
    }
  }
`;

export const MobileMenu = styled.div`
  font-family: 'Barlow', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  right: 10%;
  left: 10%;
  padding: 10px;
  position: absolute;
  a {
    text-decoration: none;
    color: grey;
    padding: 10px 20px;
    margin: 15px;
    &.selected {
      text-transform: uppercase;
      border-radius: 16px;
      font-family: 'Fraunces', sans-serif;
      color: black;
      background-color: yellow;
    }
  }
`;
