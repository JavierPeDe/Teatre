import styled from 'styled-components';
import drama from './../img/drama.png';

const ContenedorCabezera = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Titulo = styled.h1`
  margin-top: 1rem;
  color: #fff;
  font-size: 80px;
  text-align: center;
  position: relative;
  margin-bottom: 0;
`;
const Imagen = styled.img`
  width: 40%;
`;

const Cabecera = () => {
  return (
    <ContenedorCabezera>
      <Titulo>TEATRE</Titulo>

      <Imagen src={drama} />
    </ContenedorCabezera>
  );
};
export default Cabecera;
