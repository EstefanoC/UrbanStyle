import React, { useState, useEffect, useCallback } from 'react'

// Firestore
import { firestore } from '../../data/firebase'

// Component
import Alert from './alert'

// Style
import './index.css'


const Favorite = ({ id, name, price }) => {
    let [favoriteAdd, setFavoriteAdd] = useState(true)
    let [visibilityDel, setVisibilityDel] = useState(false)
    let [visibilityAdd, setVisibilityAdd] = useState(false)
    let [message, setMessage] = useState('')


    let handleClickFav = () => {
        (favoriteAdd) ? setVisibilityAdd(!visibilityAdd) : setVisibilityDel(!visibilityDel);
        setFavoriteAdd(!favoriteAdd)


        let object = {
            id: id,
            name: name,
            price: price,
        }

        addOrRemove(favoriteAdd, object)
    }


    const addOrRemove = async (bool, obj) => {
        if (bool) {
            await firestore.collection('favoritos').doc(obj.id.toString()).set(obj)
            setMessage(`"${obj.name}" Se ha agregado a favorito`)
        } else {
            await firestore.collection('favoritos').doc(obj.id.toString()).delete()
            setMessage(`"${obj.name}" Se ha eliminado de favorito`)
        }
    }


    const status =  useCallback( async ()  => {
        const querySnap = await firestore.collection('favoritos').get()

        querySnap.forEach( doc => {
            if ( doc.data().id === id ) {
                setFavoriteAdd(false)
            }
        })
    }, [id])


    useEffect(() => {
        status()
    }, [status])


    if (favoriteAdd) {
        return(
            <>
                <span className="far fa-heart favorite" onClick={handleClickFav}><span className="sr-only">Favorito añadir</span></span>
                <Alert visibility={visibilityDel} bg="rgba(255, 0, 0, 0.800)" message={message} portalClose={() => setVisibilityDel(false)} />
            </>
        )
    }else {
        return(
            <>
                <span className="fas fa-heart favorite" onClick={handleClickFav}><span className="sr-only">Favorito eliminar</span></span>
                <Alert visibility={visibilityAdd} bg="rgba(0, 128, 0, 0.800)" message={message} portalClose={() => setVisibilityAdd(false)} />
            </>
        )
    }
}

export default Favorite