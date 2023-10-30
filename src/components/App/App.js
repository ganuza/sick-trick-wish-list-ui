import Tricks from '../Tricks/Tricks';
import './App.css';
import React, {useState} from 'react';



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
  const [tricks, setTricks] = useState(dummyTricks)

  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      <Tricks tricks={tricks}/>
    </div>
  );
}

export default App; 
