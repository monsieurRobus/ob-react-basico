import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Home from './components/pages/home';
import NF from './components/pages/nf';
import AboutPage from './components/pages/about';


function App() {
  return (
    <div className="App">
    
    <Router>
    <div>
      <Link to="/about">Sobre moi</Link>
    </div>
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="about" element= { <AboutPage/> }/>
        <Route path="*" element={ <NF/> } />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
