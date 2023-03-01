import logo from './logo.svg';
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

    {/* <Switch> */}
      {/* <Router> */}
      <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
        <Route exact path="/About" element={<About/>}/>
        <Route exact path="/Contacto" element={<Contacto/>}/>
        <Route exact path="/Proyectos" element={<Proyectos/>}/>

      </Routes>

      {/* </Router> */}
      {/* <Route exact path='/home'><Home/></Route> */}
      {/* <Route path='/detail/:id'><Detalle/></Route> */}
      {/* <Route path='/create'><Formulario/></Route> */}
      {/* <Route exact path='/card'><Card/></Route> */}
      {/* <Route path="/home" component={Home}/> */}
    {/* </Switch> */}
      
    </BrowserRouter>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
