//Muestra por pantalla el texto que entre por info.
import styled from 'styled-components';

const StyledParagraph = styled.p`
  font-size: 1.5rem;
  text-align: left;
  color: #fff;
  text-align: center;
  margin: 1rem;
`;

const Linia = (props) => {
  return (
    <div>
      <StyledParagraph>{props.info}</StyledParagraph>
    </div>
  );
};
export default Linia;
