import { useState } from 'react'
import './Form.css'

const Form = ({addTrick}) => {
  
  const [stance, setStance] = useState()
  const [name, setName] = useState('')
  const [obstacle, setObstacle] = useState()
  const [tutorial, setTutorial] = useState('')
  const submitTrick = (event) => {
    event.preventDefault()

    const newTrick = {
      stance,
      name,
      obstacle,
      tutorial
    }

    addTrick(newTrick)

    clearInputs()
  }

  const clearInputs = () => {
    setStance()
    setName('')
    setObstacle()
    setTutorial('')
  }

  return (
    <form>
      <label for='stance'>Choose Your Stance</label>
      <select
        type='select'
        name='stance'
        value={stance}
        onChange={event => setStance(event.target.value)}>
          <option>regular</option>
          <option>switch</option>
      </select>
      
      <input className='trick-name'
        type='text'
        name='name'
        placeholder='Name of Trick'
        value={name}
        onChange={event => setName(event.target.value)}
      />
      <label for='obstacle'>Choose Your Obstacle</label>
      <select
        
        type='select'
        name='obstacle'
        value={obstacle}
        onChange={event => setObstacle(event.target.value)}>
          <option>Flat Ground</option>
          <option>Ledge</option>
          <option>Rail</option>
          <option>Stairs</option>
          <option>Pool</option>
      </select>
      <input className='tutorial-link'
        type='text'
        name='link'
        placeholder='Link to Tutorial'
        value={tutorial}
        onChange={event => setTutorial(event.target.value)}
      />
      <button className='send-btn' onClick={event => submitTrick(event)}>Send It</button>
    </form>
  )
}

export default Form