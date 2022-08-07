
import './App.css';
import Ejemplo1 from './hooks/ejemplo1';
import Ejemplo2 from './hooks/ejemplo2';
import ComponenteConContexto from './hooks/ejemplo3';
import Ejemplo4 from './hooks/ejemplo4';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* Usando HOOKS*/}
      <Ejemplo4 nombre="Carlos">
      {/**
      *  TODO ESTO SE TRATARÁ COMO PROPS.CHILDREN
      */}
        <h3>Contenido de Children</h3>
      </Ejemplo4>
      </header>
    </div>
  );
}

export default App;
