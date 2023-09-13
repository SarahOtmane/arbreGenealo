import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Accueil from './components/Accueil/Accueil.js';
import Back from './components/Back/Back';

function App() {
  const [data, setData] = useState([]);

  useEffect(() =>{
    /*recup donnée*/
  }, [])

  return (
    <Routes>
        <Route  path='/' element={<Back />} />
        <Route  path='/Accueil/' element={<Accueil />} />
    </Routes>
  );
}

export default App;
