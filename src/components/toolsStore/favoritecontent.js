import React, { useState, useEffect } from 'react'
import { firestore } from '../../data/firebase'
import { Link } from 'react-router-dom'
import Loading from '../helpers/loading'
import Alert from '../helpers/alert'


let userImage


const CartContent = () => {
    const [ data, setData ] = useState([])
    const [ load, setLoad ] = useState(false)
    const [visibility, setVisibility] = useState(false)
    const [message, setMessage] = useState('')

    const handleClickRemove = async (obj) => {
        await firestore.collection('favoritos').doc(obj.id.toString()).delete()
        setVisibility(true)
        setMessage(`"${obj.name}" Se ha eliminado de favorito`)
    }


    useEffect(() => {
        firestore.collection('favoritos').onSnapshot( querySnapshot => {
            let Alldata = []
            querySnapshot.forEach( doc => {
                Alldata.push({...doc.data(), id:doc.id})
            })
            setData(Alldata)
            setLoad(true)
        })
    }, [])


    if (!load) {
        return <Loading />
    } else {
        if (data.length !== 0) {
            return (
                data.map( ( val, ind ) => {
                    userImage = require(`../../media/productos${val.id.toString()}.jpg`).default

                    return(
                        <div key={`${ind}${val}`} className="favorite-item d-flex align-items-center m-3 pl-0 pr4">
                            <img src={userImage} alt={val.name} height="100px" width="100px" />
                            <Link to={`/producto/${val.id - 1}`}>
                                <p className="d-block mb-0 ml-2">{val.name}</p>
                            </Link>
                            <strong className="favorite-price mr-0 mr-md-5">{val.price}$</strong>
                            <i className="fa fa-times" aria-hidden="true" onClick={() => handleClickRemove(val)}></i>
                            <Alert visibility={visibility} bg="rgba(255, 0, 0, 0.800)" message={message} portalClose={() => setVisibility(false)} />
                        </div>
                    )
                })
            )
        } else {
            return (
                <div className="py-5 favorite-info">
                    <h3 className="font-weight-bold mt-3">No tienes nada en favoritos<i className="fa fa-sad-tear d-block"></i></h3>
                    <Link to={`/buscador/`}><strong>Puedes ver todos los productos pulsando aqui</strong></Link>
                </div>
            )
        }
    }
}

export default CartContent