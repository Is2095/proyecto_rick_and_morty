import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   console.log(props)
   
   return (
      <div>
         {
            characters.map(({name, species, gender, image, id}) => 
               (
                  <Card 
                     key = {id}
                     onClose={() => window.alert('Emulamos que se cierra la card')}
                     name = {name}
                     species = {species}
                     gender = {gender}
                     image = {image}
                  />))
         }
      </div>
   )
}
