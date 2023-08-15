import './Title.css'

const Title = (props) => {
    return (
        <div className="title">
            <h1 style={{color: props.colorText}}>{props.children}</h1>
        </div>
    )
}

export default Title