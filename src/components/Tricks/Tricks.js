import Card from '../Card/Card'
import './Tricks.css'

const Tricks = ({tricks}) => {
  console.log('Tricks tricks: ', tricks)

  const trickCards = tricks.map((trick) => {
      return <Card
        id={trick.id}
        key={trick.id}
        stance={trick.stance}
        name={trick.name}
        obstacle={trick.obstacle}
        tutorial={trick.tutorial}
      />
    })
  
  return (
    <div className='tricks-cont'>
      <h3>hello from Tricks</h3>
      {trickCards}
    </div>
  )
}

export default Tricks