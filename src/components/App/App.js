import Tricks from '../Tricks/Tricks';
import Form from '../Form/Form';
import { getTricks } from '../../apiCalls';
import './App.css';
import React, {useEffect, useState} from 'react';



function App() {

  const dummyTricks = [
    {
    "stance": "dummy",
    "name": "treflip",
    "obstacle": "flat ground",
    "tutorial": "https://www.youtube.com/watch?v=XGw3YkQmNig",
    "id": 1
    },
    {
    "stance": "dummy",
    "name": "heelflip",
    "obstacle": "stairs",
    "tutorial": "https://www.youtube.com/watch?v=9N9swrZU1HA",
    "id": 2
    },
    {
    "stance": "dummy",
    "name": "frontside 50-50, backside 180 out",
    "obstacle": "ledge",
    "tutorial": "https://www.youtube.com/watch?v=9N9swrZU1HA",
    "id": 3
    }
    ]
  const [tricks, setTricks] = useState([])

  useEffect(() => {
    getTricks()
      .then(data => {
        console.log('App data: ', data)
        setTricks(data)
      })
      .catch(error => console.log(error))
  }, [])

  const addTrick = (newTrick) => {
    setTricks([...tricks, newTrick])
  }

  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      {!tricks.length && <h3>No Tricks yet, add some!</h3>}
      <Form addTrick={addTrick}/>
      <Tricks tricks={tricks}/>
    </div>
  );
}

export default App; 
