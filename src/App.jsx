import Header from './componentes/Header/Header.jsx';
import CoreConcepts from './componentes/CoreConcepts.jsx';
import Examples from './componentes/Examples.jsx';

function App() {

  return (
    <> {/* Fragment foi usado aqui, mas essa forma é mais sucinta de envelopar */}
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;