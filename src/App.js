import './App.css';
import { Route, Routes } from 'react-router-dom';

import Accueil from './components/Accueil/Accueil.js'

function App() {
  return (
    <Routes>
        <Route  path='/' element={<Accueil />} />
    </Routes>
  );
}

export default App;
