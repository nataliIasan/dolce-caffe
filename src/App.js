import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import Dolce from './Dolce';
import Caffe from './Caffe';
import Contatti from './Contatti';
import './App.css';


function App() {
  return <Router>
    <nav>
      <Link to='/' className='link'>Home</Link>
      <Link to='/dolce' className='link'>Pasticceria</Link>
      <Link to='/caffe' className='link'>Bar caffeteria</Link>
      <Link to='/contatti' className='link'>Contatti</Link>
    </nav>

    <Routes>
    <Route path='/' element={ <Home/> }/>
      <Route path='/dolce' element={ <Dolce/> }/>
      <Route path='/caffe' element={ <Caffe/> }/>
      <Route path='/contatti' element={ <Contatti/> }/>
    </Routes>

  </Router>
}

export default App;

