import Banner from "./components/Banner";
import Form from "./components/Form";
import Category from "./components/Category";
import { useState } from "react";

function App() {
  const categories = [
    {
      name: 'Arqueiro',
      colorPrimary: '#57C278',
      colorSecondary: '#D9F7E9'
    },
    {
      name: 'Bárbaro',
      colorPrimary: '#82CFFA',
      colorSecondary: '#E8F8FF'
    },
    {
      name: 'Clérigo',
      colorPrimary: '#A6D157',
      colorSecondary: '#F0F8E2'
    },
    {
      name: 'Curandeiro',
      colorPrimary: '#E06B69',
      colorSecondary: '#FDE7E8'
    },
    {
      name: 'Druida',
      colorPrimary: '#DB6EBF',
      colorSecondary: '#FAE9F5'
    },
    {
      name: 'Mago',
      colorPrimary: '#FFBA05',
      colorSecondary: '#FFF5D9'
    },
    {
      name: 'Paladino',
      colorPrimary: '#FF8A29',
      colorSecondary: '#FFEEDF'
    }
  ];
  const [characters, setCharacters] = useState([])
  const onNewCharacterRegistering = (character) => {
    setCharacters([...characters, character])
  }
  return (
    <div className="App">
      <header>
        <Banner />

        <Form categories={categories.map(category => category.name)} onRegistering={character => onNewCharacterRegistering(character)} />

        {categories.map(category => <Category key={category.name} name={category.name} colorPrimary={category.colorPrimary} colorSecondary={category.colorSecondary} characters={characters.filter(character => character.category === category.name)} />)}
      </header>
    </div>
  );
}

export default App;
