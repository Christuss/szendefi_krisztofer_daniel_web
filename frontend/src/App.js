
import './App.css';
import DataService from './api/DataService';
import Szavak from './components/Szavak';
import { useState, useEffect } from "react";
import Tablazat from './components/Tablazat';

function App() {
 const DS = new DataService();
 const [temak, setTemak] = useState([]);
 const [szavak, setSzavak] = useState([]);

 console.log(szavak);

    useEffect(() => {
      DS.get("http://localhost:8000/api/tema", getTemak)
      DS.get("http://localhost:8000/api/szavak", getSzavak)
    },[])

  function getTemak(data) {
    setTemak(data.data);
    console.log(temak);
  };

  function getSzavak(data) {
    setSzavak(data.data);
    
  };

  return (
    <div className="App">
    <nav class="navbar navbar-light bg-light">
    <span class="navbar-brand mb-0 h1">Szavak</span>
  </nav>
    <Szavak temak = {temak} setSzavak = {setSzavak} getSzavak = {getSzavak}/>
    <Tablazat szavak = {szavak}></Tablazat>
    </div>
  );
}

export default App;
