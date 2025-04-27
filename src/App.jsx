//import logo from './logo.svg';
import './App.css';
import ContactManagerForm from './Components/ContactManagerForm';
import ContactManagerList from './Components/ContactManagerList';
import {useState} from "react";

function App() {

  const [ContactManager, setContactManager] = useState([]);

  const addManager =(manager) =>{
    setContactManager([...ContactManager, manager]);
  }


  return (
    <div>
      <ContactManagerForm addManager = {addManager}/>
      <ContactManagerList ContactManager = {ContactManager}/>

    </div>
  );
}

export default App;

