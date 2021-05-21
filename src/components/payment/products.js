import React from 'react'

// React router
import { Link } from 'react-router-dom'



let priceAll = []
let finish


const Products = ({ data, disabled, finished }) => {

    if (data.length > 0) {
        return (
            <>
                {data.map( ( val, ind ) => (
                    <div key={`${ind}${val}`} className="product-item d-flex align-items-center justify-content-between my-2 py-2">
                        <Link to={`/producto/${val.id - 1}`}>
                            <p className="text-left mb-0 mx-1">{val.name}</p>
                        </Link>
                        <strong className="text-right mx-1">{val.price}$</strong>
                    </div>
                ))}
                {data.forEach( val => {
                    (priceAll.length > data.length) ? priceAll = [] :
                        (data.length === priceAll.length) ?
                            finished(finish = priceAll.reduce((a, b) => a + b).toFixed(2))
                        :
                            priceAll.push(val.price)

                })}
                {
                    finish && <div className="d-flex justify-content-between mt-3">
                        <strong>Total</strong>
                        <strong>{finish}$</strong>
                    </div>
                }
            </>
        )
    } else {
        disabled()
        return (
            <div className="text-center">
                <h3 className="font-weight-bold mt-3">El carrito está vacio<i className="fa fa-sad-tear d-block"></i></h3>
                <Link to={`/buscador/`}><strong>Puedes ver todos los productos pulsando aqui</strong></Link>
            </div>
        )
    }
}

export default Products