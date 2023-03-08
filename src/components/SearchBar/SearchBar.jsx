import style from './SearchBar.module.css'
import { useState } from 'react';

const SearchBar = ({onSearch}) => {

   const [character, setCharacter] = useState('')

   const handleInput = (e) => {
      setCharacter(e.target.value)
   }

   return (
      <div className={style.search}>
         <input className={style.entrada} type='search' onChange={handleInput}/>
         <button className={style.searchButton} onClick={()=>onSearch(character)}>Agregar</button>
         <button className={style.searchButton} onClick={()=>{onSearch(Math.floor(Math.random()*826))}}>Random</button>
      </div>
   );
}
export default SearchBar
