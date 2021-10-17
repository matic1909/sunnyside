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
    margin-bottom: 1em;
  }
  .header-background {
    width: 100%;
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
    padding: 2em 1.5em;
    h2 {
      margin-bottom: 1em;
    }
    p {
      flex: 1;
      font-family: 'Barlow', sans-serif;
      color: gray;
      line-height: 1.8;
      margin-bottom: 1em;
    }
    a {
      text-decoration: none;
      color: black;
    }
  }
  .article-image {
    flex: 1;
    width: 100%;
  }
`;

export const ImageArticle = styled.div`
  position: relative;
  color: ${(p) => p.color};
  .background-image {
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
    }
    p {
      font-family: 'Barlow';
      padding-left: 0.5em;
      padding-right: 0.5em;
    }
  }
`;
