import React, { useState, useEffect } from "react";
import axios from 'axios';

import "./App.css";

//Components
import SmurfForm from './SmurfForm';
import SmurfList from './SmurfList';

//Contexts
import { FormContext } from '../contexts/FormContext';
import { ListContext } from '../contexts/ListContext';


function App() {

 const [smurfList, setSmurfList] = useState([]);

 const [newSmurf, setNewSmurf] = useState({name: '', age: '', height: ''});

 useEffect(() => {
   axios.get('http://localhost:3333/smurfs')
   .then(response => {
     const smurfList = response.data;
     console.log(smurfList);
     setSmurfList(smurfList);
   })
   .catch(error => {
     console.log(error);
   });
 }, []);

  
    return (
      <div className="App">
        <ListContext.Provider value={{ smurfList, setSmurfList }}>
          <FormContext.Provider value={{ newSmurf, setNewSmurf, smurfList, setSmurfList}}>
              <SmurfList/>
              <SmurfForm/>
          </FormContext.Provider>
        </ListContext.Provider>
      
      </div>
    );
}

export default App;
