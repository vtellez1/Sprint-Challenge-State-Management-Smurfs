import React, {useContext} from 'react';
import { FormContext } from '../contexts/FormContext';
import axios from 'axios';

const SmurfForm = () => {

    const { newSmurf, setNewSmurf, setSmurfList } = useContext(FormContext);

const handleChange = e => {
    setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value })
}

const submitSmurf = event => {
    event.preventDefault();

    axios.post('http://localhost:3333/smurfs', newSmurf)
    .then(res => {
        const newSmurf = res.data;
        console.log(newSmurf);
        setSmurfList(newSmurf);
    })
    .catch(error => {
        console.log(error)
    });
};

    return(
        <div>
            <form onSubmit={submitSmurf}>
                <label> Name:
                <input type="text" name="name" onChange={handleChange} value={newSmurf.name}></input>
                </label>

                <label> Age:
                <input type="text" name="age" onChange={handleChange} value={newSmurf.age}></input>
                </label>

                <label> Height:
                <input type="text" name="height" onChange={handleChange} value={newSmurf.height}></input>
                </label>

             <button>Add to Smurf Village</button>   
            </form>
            
        </div>
    )
}
export default SmurfForm;