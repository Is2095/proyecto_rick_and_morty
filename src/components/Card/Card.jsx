
import style from './Card.module.css'

function Card({name, species, gender, image, onClose}) {
   
   return (
      <div className={style.container}>
         <div className={style.buttonContainer}>
            <button className={style.boton} onClick={onClose}>X</button>
         </div> 
         <div className={style.imagen}>
            <img  src={image} alt={name} />
            <p className={style.nombre}>Nombre: {name}</p>
         </div>
         <div className={style.datos}>
            <h2 className={style.datosh2}>Species: {species}</h2>
            <h2 className={style.datosh2}>Gender: {gender}</h2>
         </div>        
      </div>
   );
}
export default Card;