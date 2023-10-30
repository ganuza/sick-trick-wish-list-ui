import { useState } from 'react'
import './Form.css'

const Form = () => {
  
  const [stance, setStance] = useState()
  const [name, setName] = useState('')
  const [obstacle, setObstacle] = useState()
  const [link, setLink] = useState('')
  const submitTrick = () => {

  }

  return (
    <form>
      <input
        type='select'
        name='stance'
        value={stance}
      />
      <input
        type='text'
        name='name'
        placeholder='Name of Trick'
        value={name}
        // onChange={event =>}
      />
      <input
        type='select'
        name='obstacle'
        value={obstacle}
      />
      <input
        type='text'
        name='link'
        placeholder='Link to Tutorial'
        value={link}
      />
      <button className='send-btn'>Send It</button>
    </form>
  )
}

export default Form