import React, {useState} from 'react'

// Style
import './index.css'


const Favorite = () => {

    let [favoriteAdd, setFavoriteAdd] = useState(true) 

    let handleClickFav = () => {
        (favoriteAdd) ? setFavoriteAdd(!favoriteAdd) : setFavoriteAdd(!favoriteAdd)
    }

    if (favoriteAdd) {
        return(
            <span className="far fa-heart favorite" onClick={handleClickFav}><span className="sr-only">Favorito añadir</span></span>
        )
    }else {
        return(
            <span className="fas fa-heart favorite" onClick={handleClickFav}><span className="sr-only">Favorito eliminar</span></span>
        )
    }
}

export default Favorite