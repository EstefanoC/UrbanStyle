import React, { useState, useEffect } from 'react'
import { firestore } from '../../data/firebase'
import { Link } from 'react-router-dom'
import Loading from '../helpers/loading'
import Alert from '../helpers/alert'


let userImage
let priceAll = []
let finish


const CartContent = ({ status }) => {
    const [ data, setData ] = useState([])
    const [ load, setLoad ] = useState(false)
    const [visibility, setVisibility] = useState(false)
    const [message, setMessage] = useState('')

    const handleClickRemove = async (obj) => {
        await firestore.collection('carrito').doc(obj.id.toString()).delete()
        setVisibility(true)
        setMessage(`"${obj.name}" Se ha eliminado del carrito`)
        return (priceAll = [])
    }


    useEffect(() => {
        firestore.collection('carrito').onSnapshot( querySnapshot => {
            let Alldata = []
            querySnapshot.forEach( doc => {
                Alldata.push({...doc.data(), id:doc.id})
            })
            setData(Alldata)
            setLoad(true)
            status(Alldata)

            return (priceAll = [])
        })

        priceAll = []
        return (priceAll = [])
    }, [status])


    if (!load) {
        return <Loading />
    } else {
        if (data.length !== 0) {
            return (
                <>
                    {data.map( ( val, ind ) => {
                        userImage = require(`../../media/productos${val.id.toString()}.jpg`).default

                        return (
                            <div key={`${ind}${val}`} className="cart-item d-flex align-items-center m-3 pl-0 pr4">
                                <img src={userImage} alt={val.name} height="100px" width="100px" />
                                <Link to={`/producto/${val.id - 1}`}>
                                    <p className="d-block mb-0 ml-2">{val.name}</p>
                                </Link>
                                <strong className="cart-price mr-0 mr-md-5">{val.price}$</strong>
                                <i className="fa fa-times" aria-hidden="true" onClick={() => handleClickRemove(val)}></i>
                                <Alert visibility={visibility} bg="rgba(255, 0, 0, 0.800)" message={message} portalClose={() => setVisibility(false)} />
                            </div>
                        )
                    })
                    }
                    {data.forEach( val => {
                        (data.length === priceAll.length) ?
                            finish = priceAll.reduce((a, b) => a + b).toFixed(2)
                        :
                            priceAll.push(val.price)

                    })}
                    {
                        finish &&
                    <div className="cart-total mx-5 text-center text-md-right mb-2">
                        <strong className="cart-total-text float-md-left ml-md-5">Total</strong>
                        <strong className="cart-total-price mr-3">{finish}$</strong>
                    </div>
                    }
                </>
            )
        } else {
            return (
                <div className="py-5 cart-info">
                    <h3 className="font-weight-bold mt-3">El carrito está vacio<i className="fa fa-sad-tear d-block"></i></h3>
                    <Link to={`/buscador/`}><strong>Puedes ver todos los productos pulsando aqui</strong></Link>
                </div>
            )
        }
    }
}

export default CartContent