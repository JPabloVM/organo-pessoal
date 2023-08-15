import './Character.css'

const Character = (props) => {
    return (
        <div className='character'>
            <div className='header' style={{ backgroundColor: props.background }}>
                <img src={props.image} alt={props.name}></img>
            </div>
            <div className='footer'>
                <h4>{props.name}</h4>
                <h5>{props.category}</h5>
                <p>Nível de poder: {props.powerLevel}</p>
            </div>
        </div>
    )
}

export default Character