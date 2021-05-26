import React, { useState, useEffect, useCallback } from 'react'
import { firestore } from '../../data/firebase'
import Alert from './alert'
import './index.css'


const Cart = ({ id, name, price }) => {
    let [cartAdd, setCartAdd] = useState(true)
    let [visibilityDel, setVisibilityDel] = useState(false)
    let [visibilityAdd, setVisibilityAdd] = useState(false)
    let [message, setMessage] = useState('')


    let handleClickCart = () => {
        (cartAdd) ? setCartAdd(!cartAdd) : setCartAdd(!cartAdd);
        (cartAdd) ? setVisibilityAdd(!visibilityAdd) : setVisibilityDel(!visibilityDel);


        let object = {
            id: id,
            name: name,
            price: price,
        }

        addOrRemove(cartAdd, object)
    }


    const addOrRemove = async (bool, obj) => {
        if (bool) {
            await firestore.collection('carrito').doc(obj.id.toString()).set(obj)
            setMessage(`"${obj.name}" Se ha agregado al carrito`)
        } else {
            await firestore.collection('carrito').doc(obj.id.toString()).delete()
            setMessage(`"${obj.name}" Se ha eliminado del carrito`)
        }
    }

    const status =  useCallback( async ()  => {
        const querySnap = await firestore.collection('carrito').get()

        querySnap.forEach( doc => {
            if ( doc.data().id === id ) {
                setCartAdd(false)
            }
        })
    }, [id])

    useEffect(() => {
        status()
    }, [status])


    if (cartAdd) {
        return(
            <>
                <span className="fas fa-cart-plus cart" onClick={handleClickCart}><span className="sr-only">Carro de venta, añadir</span></span>
                <Alert visibility={visibilityDel} bg="rgba(255, 0, 0, 0.800)" message={message} portalClose={() => setVisibilityDel(false)} />
            </>
        )
    }else {
        return(
            <>
                <span className="fas fa-cart-arrow-down cart" onClick={handleClickCart}><span className="sr-only">carro de venta, eliminar</span></span>
                <Alert visibility={visibilityAdd} bg="rgba(0, 128, 0, 0.800)" message={message} portalClose={() => setVisibilityAdd(false)} />
            </>
            )
    }
}

export default Cart