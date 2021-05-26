import React, { useState, useEffect } from 'react'
import { firestore } from '../../data/firebase'
import Loading from '../helpers/loading'
import Products from './products'


export const PaymentProduct = ({ disabled, finished }) => {
    const [ load, setLoad ] = useState(false)
    const [ data, setData ] = useState([])


    useEffect(() => {
        firestore.collection('carrito').onSnapshot( querySnapshot => {
            let Alldata = []
            querySnapshot.forEach( doc => {
                Alldata.push({...doc.data(), id:doc.id})
            })
            setData(Alldata)
            setLoad(true)
        })
    }, [])

    const disableds = () => {
        disabled()
    }

    const finish = (val) => {
        finished(val)
    }


    if (!load) {
        return <Loading />
    } else {
        return (
            <div className="payment-product mt-3 py-3 px-4">
                <h4>Productos:</h4>
                <Products data={data} disabled={disableds} finished={(val) => finish(val)}/>
            </div>
        )
    }

}

export default PaymentProduct