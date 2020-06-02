import React, { useContext } from 'react';
import { ListContext } from '../contexts/ListContext';


const SmurfList = ()=> {

const { smurfList } = useContext(ListContext);

    return(
        <div>
            <h1>Smurf Village:</h1>
           {smurfList.map(smurf => (
               <div key={smurf.id}>
               <p>Name: {smurf.name}</p>
               <p>Age: {smurf.age}</p>
               <p>Height: {smurf.height} </p>
               </div>
           ))}
        </div>
    )
}
export default SmurfList;