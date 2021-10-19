import Testimonal from './Testimonal';
import * as Styled from '../styles/styles';

export default function Testimonals({ testimonals }) {
  return (
    <Styled.Testimonals>
      <h2>CLIENT TESTIMONALS</h2>
      <div className="testimonals-wrapper">
        {testimonals.map((testimonal) => (
          <Testimonal {...testimonal} />
        ))}
      </div>
    </Styled.Testimonals>
  );
}
