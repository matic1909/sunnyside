import React from 'react';
import * as Styled from '../styles/styles';

export default function TextImage({ imgUrl, headline, text, color }) {
  return (
    <Styled.ImageArticle color={color}>
      <div className="article-content">
        <img className="background-image" src={imgUrl} alt={headline} />
        <div className="text-content">
          <h2>{headline}</h2>
          <p>{text}</p>
        </div>
      </div>
    </Styled.ImageArticle>
  );
}
