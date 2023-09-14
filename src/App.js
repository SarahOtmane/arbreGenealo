import './App.css';

import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, query, orderByChild} from "firebase/database";

import Accueil from './components/Accueil/Accueil.js';
import Description from './components/Description/Description';

import _ from "./firebase/init.js"

function App() {
  const db = getDatabase();
  const readData = (url, callback) =>{
    const itemRef = query(ref(db, url), orderByChild('nom'));
    onValue(itemRef, (snapshot) =>{
      const dat = snapshot.val();
      callback(dat)
    })
  }

  const [dataList, setDataList] = useState([]);

  useEffect(() =>{
    readData('animaux' , animauxInfo =>{
      const tab = [];
      for(const key in animauxInfo){
        tab.push(animauxInfo[key])
      }
      setDataList(tab)
    })
  }, [])

  return (
    <Routes>
        <Route 
          path='/' 
          element={<Accueil dataList={dataList} />} 
        />

        <Route path='/Description/' element={<Description />} />
    </Routes>
  );
}

export default App;
