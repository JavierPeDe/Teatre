import Linia from './components/Linia';
import obraTeatral from './data/obraTeatral.json';

function App() {
  
  const frases = obraTeatral.map((frase) => {
    return <Linia key={frase} info={frase} />;
  });

  return (
    <div>
      <h1>Nivel -1</h1>
      {frases}
    </div>
  );
}

export default App;
