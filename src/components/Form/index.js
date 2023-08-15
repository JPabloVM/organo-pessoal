import { useState } from 'react'
import Button from '../Button'
import DropdownList from '../DropdownList'
import TextField from '../TextField'
import Title from '../Title'
import './Form.css'

const Form = (props) => {
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [powerLevel, setPowerLevel] = useState('')
    const [image, setImage] = useState('')

    const onSend = (event) => {
        event.preventDefault()
        props.onRegistering({
            name,
            category,
            powerLevel,
            image
        })
        setName('')
        setCategory('')
        setPowerLevel('')
        setImage('')
    }

    return (
        <section className='form'>
            <form onSubmit={onSend}>
                <Title>Cadastre seus personagens do RPG</Title>

                <TextField type='text' text='Nome' placeholder='Digite o nome do personagem' required={true} value={name} onChange={valor => setName(valor)} />

                <DropdownList text='Categoria' required={true} value={category} itens={props.categories} onChange={valor => setCategory(valor)} />

                <TextField type='number' text='Nível de poder' min='1' max='10' required={true} value={powerLevel} onChange={valor => setPowerLevel(valor)} />

                <TextField type='text' text='Imagem' placeholder='Digite o caminho para uma imagem do personagem' value={image} onChange={valor => setImage(valor)} />

                <Button colorPrimary='#FFF' colorSecondary='#6278F7'>Cadastrar</Button>
            </form>
        </section>
    )
}

export default Form