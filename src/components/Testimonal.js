import * as Styled from '../styles/styles';

export default function Testimonal({ imgUrl, name, text, role }) {
  return (
    <Styled.Testimonal>
      <img src={imgUrl} alt={name} />
      <p>{text}</p>
      <h4>{name}</h4>
      <h5>{role}</h5>
    </Styled.Testimonal>
  );
}
