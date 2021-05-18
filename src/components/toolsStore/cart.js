import React from 'react'

// Component
import CartContent from './cartContent';

const Cart = () => {

        return (
                <div className="cart-content bg-primary pb-5">

                        <h1 className="text-white text-center py-3 m-0 text-uppercase">Carrito</h1>

                        <main className="cart-main text-center text-white">
                                <CartContent />
                        </main>

                        <button type="button" className="btn btn-primary btn-block mt-3" >Continuar</button>

                </div>
        )
}

export default Cart;