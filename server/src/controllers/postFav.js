
const{Favorite} = require('../DB_connection')

const postFav = async (req, res) => {

    const {name, image, species, gender, id} = req.body;

    try {
        if(!name || !image || !species || !gender || !id) res.status(401).json({error: 'Faltan datos'}) 

        const [fav, created] = await Favorite.findOrCreate({
            where: 
            {name, image, species, gender, id}
        });
        const favAll = await Favorite.findAll()
        res.status(200).json(favAll)
    } catch (error) {
        res.status(500).json(error.message);
    }
        
    
};

module.exports = postFav;