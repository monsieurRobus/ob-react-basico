import logo from './logo.svg';
import './App.css';
import OptionalRenderer from './components/pure/optionalRenderer';


function App() {
  return (
    <div className="App">
      {/* Renderizado condicional */}
      <OptionalRenderer></OptionalRenderer>


    </div>
  );
}

export default App;
