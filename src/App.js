// import './App.css'
// import Card from './components/Card.jsx'
// import SearchBar from './components/SearchBar.jsx'
// import characters, { Rick } from './data.js'
import style from './App.module.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav'
import { useState } from 'react'

function App () {

  const [characters, setCharacters] = useState([]);
  const [idCards, setIdCards] = useState([]);

  const onSearch = (id) => {
    if (!(idCards.includes(id))) {
      setIdCards([...idCards, id])
      
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
       .then((response) => response.json()) //cuando tengas una respuesta (response) transforma a json
       .then((data) => {
          if (data.name) {
            //  setCharacters((oldChars) => [...oldChars, data]); ó =>
             setCharacters([...characters, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
        });
    }else alert('El personaje ya existe')
  }

  const onClose = (id) => {
    setCharacters(characters.filter(character=>character.id !==id))
    setIdCards(idCards.filter(cards=>cards !== id.toString()))
  }


  return (

    <div className={style.App} id='hola'>

      <div className={style.cartel}></div>

      <div className={style.nav}> 
        <Nav onSearch={onSearch}/>
      </div>
    
      <div>
        <Cards
          characters={characters}
          onClose={onClose}
        />
      </div>

      
      <div className={style.fo}>
        <footer>
          <a href='#hola' className={style.regreso}>inicio</a>
        </footer>
      </div>
    </div>
  )
}

export default App
