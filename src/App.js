//import logo from './logo.svg';
import './App.css';
import ConatctMangerForm from './Components/ContactManagerForm';
import {useState} from "react";

function App() {

  const [ContactManagerForm, setContactManagerform] = useState([]);

  const addManager =(manager) =>{
    setContactManagerform([...ContactManagerForm, manager]);
  }


  return (
    <div>
      <ConatctMangerForm addManager = {addManager}/>

    </div>
  );
}

export default App;

