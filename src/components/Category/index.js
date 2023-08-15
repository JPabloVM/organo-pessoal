import Character from '../Character'
import Title from '../Title'
import './Category.css'

const Category = (props) => {
    return (
        props.characters.length > 0 && <section className='category' style={{ backgroundColor: props.colorSecondary }}>
            <Title colorText={props.colorPrimary}>{props.name}</Title>
            <div className='characters'>
                {props.characters.map(character => <Character key={character.name} image={character.image} name={character.name} category={character.category} powerLevel={character.powerLevel} background={props.colorPrimary} />)}
            </div>
        </section>
    )
}

export default Category