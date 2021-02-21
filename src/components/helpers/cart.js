import React, {useState} from 'react'

// Style
import './index.css'


const Cart = () => {

    let [cartAdd, setCartAdd] = useState(true) 

    let handleClickCart = () => {
        (cartAdd) ? setCartAdd(!cartAdd) : setCartAdd(!cartAdd)
    }

    if (cartAdd) {
        return(
            <span className="fas fa-cart-plus cart" onClick={handleClickCart}><span className="sr-only">Carro de venta, añadir</span></span>
        )
    }else {
        return(
            <span className="fas fa-cart-arrow-down cart" onClick={handleClickCart}><span className="sr-only">carro de venta, eliminar</span></span>
        )
    }
}

export default Cart