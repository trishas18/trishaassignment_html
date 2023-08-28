import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Employeelist from './components/Employeelist';

import User from './components/User';
import { Calculator } from './components/Calculator';
import { Mcalc } from './components/Mcalc';


function App() {
  return (
    <div className="App">
      <Routes>

        <Route path='/' exact element={<Home/>}/>
        <Route path='/employee'  element={<Employeelist/>}/>
        <Route path='/User'  element={<User/>}/>
        <Route path='/calculator'  element={<Calculator/>}/>
        <Route path='/Mcalc'  element={<Mcalc/>}/>
       
       
      </Routes>

    </div>
  );
}

export default App;



