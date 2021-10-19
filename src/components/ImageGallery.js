import React from 'react';
import coneImage from '../assets/img/mobile/image-gallery-cone.jpg';
import milkBottleImage from '../assets/img/mobile/image-gallery-milkbottles.jpg';
import sugarCubesImage from '../assets/img/mobile/image-gallery-sugar-cubes.jpg';
import orangeImage from '../assets/img/mobile/image-gallery-orange.jpg';
import * as Styled from '../styles/styles';

export default function ImageGallery() {
  return (
    <Styled.ImageGallery>
      <img src={milkBottleImage} alt="milk bottles" />
      <img src={orangeImage} alt="orange" />
      <img src={coneImage} alt="Ice cream cone" />
      <img src={sugarCubesImage} alt="sugar cubes" />
    </Styled.ImageGallery>
  );
}
