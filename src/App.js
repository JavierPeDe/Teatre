import styled from 'styled-components';
import Cabecera from './components/Cabecera';
import ControladorLinia from './components/ControladorLinia';
import obraTeatral from './data/obraTeatral.json';

const ContenedorAPP = styled.div`
  background-color: skyblue;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  text-aling: center;
  font-family: 'Roboto', sans-serif;
  height: 100vh;
  margin: 0;
`;

function App() {
  return (
    <ContenedorAPP>
      <Cabecera />
      <ControladorLinia obra={obraTeatral} />
    </ContenedorAPP>
  );
}

export default App;
