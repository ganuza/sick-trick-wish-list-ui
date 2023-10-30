import './Card.css'

const Card = ({id, stance, name, obstacle, tutorial}) => {

  return (
    <div>
      <h4>{stance} {name}</h4>
      <h4>Obstacle: {obstacle}</h4>
      <h4>Link to Tutorial:</h4>
      <h4>{tutorial}</h4>
    </div>
  )
}

export default Card