import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LandingPage from './Components/LandingPage'
import About from './Components/About'
import Contacto from './Components/Contacto'
import Proyectos from './Components/Proyectos'
// import About from './Components/About'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
        <Route exact path="/About" element={<About/>}/>
        <Route exact path="/Contacto" element={<Contacto/>}/>
        <Route exact path="/Proyectos" element={<Proyectos/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
