import './DropdownList.css'


const DropdownList = (props) => {

    return (
        <section className='dropdown-list'>
            <label>{props.text}</label>
            <select onChange={evento => props.onChange(evento.target.value)} required={props.required} value={props.value}>
                <option>Selecione uma categoria</option>
                {props.itens.map(item => <option key={item} value={item}>{item}</option>)}
            </select>
        </section>
    )
}
export default DropdownList