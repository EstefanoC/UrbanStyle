import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import CartContent from './cartContent';

const Cart = () => {
        const [ data, setData ] = useState([])


        const status = (val) => {
                setData(val)
        }


        return (
                <div className="cart-content bg-primary pb-5">

                        <h1 className="text-white text-center py-3 m-0 text-uppercase">Carrito</h1>

                        <main className="cart-main text-center text-white">
                                <CartContent status={(val) => status(val)} />
                        </main>

                        {(data.length > 0) && <Link to={'/pago'}><button type="button" className="btn btn-primary btn-block mt-3" >Continuar</button></Link>}

                </div>
        )
}

export default Cart;