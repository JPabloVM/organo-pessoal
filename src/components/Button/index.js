import './Button.css'

const Button = (props) => {
    return (
        <div className='button'>
            <button type={props.type} style={{ color: props.colorPrimary, backgroundColor: props.colorSecondary }}>{props.children}</button>
        </div>
    )
}

export default Button