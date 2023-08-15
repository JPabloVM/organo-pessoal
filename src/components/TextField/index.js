import './TextField.css'

const TextField = (props) => {
    const onTyping = (event) => {
        props.onChange(event.target.value)
    }
    
    return (
        <div className='text-field'>
            <label>{props.text}</label>
            <input type={props.type} placeholder={props.placeholder} value={props.value} min={props.min} max={props.max} minLength={props.minLength} maxLength={props.maxLength} required={props.required} onChange={onTyping}></input>
        </div>
    )
}

export default TextField
