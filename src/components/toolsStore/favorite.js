import React from 'react'
import FavoriteContent from './favoritecontent';

const Favorite = () => {

        return (
                <div className="favorite-content bg-primary pb-5">

                        <h1 className="text-white text-center py-3 m-0 text-uppercase">Favoritos</h1>

                        <main className="favorite-main text-center text-white">
                                <FavoriteContent />
                        </main>

                        <button type="button" className="btn btn-primary btn-block mt-3" >Continuar</button>

                </div>
        )
}

export default Favorite;