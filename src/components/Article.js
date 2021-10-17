import * as Styled from '../styles/styles';

export default function Article({ headline, text, imgUrl, accentColor }) {
  return (
    <Styled.Article>
      <img className="article-image" src={imgUrl} alt={headline} />
      <div className="article-content">
        <h2>{headline}</h2>
        <p>{text}</p>
        <a href="/" style={{ borderBottom: `1px solid ${accentColor}` }}>
          LEARN MORE
        </a>
      </div>
    </Styled.Article>
  );
}
