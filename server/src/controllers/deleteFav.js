
const {Favorite} = require('../DB_connection')

const deleteFav = async (req, res) => {

    const {id} = req.params;
     try {
         const idDelete = await Favorite.findByPk(id);
         await idDelete.destroy();
         const favoritesRestantes = await Favorite.findAll()
         
        res.status(200).json(favoritesRestantes)
     } catch (error) {
         res.status(500).json(error.message)
     }
    
}

module.exports = deleteFav;