import styled from 'styled-components';
import Cabecera from './components/Cabecera';
import Linia from './components/Linia';
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
  const frases = obraTeatral.map((frase) => {
    return <Linia key={frase} info={frase} />;
  });

  return (
    <ContenedorAPP>
      <Cabecera />
      {frases}
    </ContenedorAPP>
  );
}

export default App;
