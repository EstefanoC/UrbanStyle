import React from 'react'

// Components
import Loading from '../helpers/loading'
import PaymentForm from './paymentForm'
import PaymentProduct from './paymentProduct'

// Style
import './index.css'
import { useState } from 'react'

const Payment = ({ load }) => {
    const [ disabled, setDisabled ] = useState(false)
    const [ finished, setFinished ] = useState(false)

    const disableds = () => {
        setDisabled(true)
    }

    const finish = (val) => {
        setFinished(val)
    }

    if (!load) {
        return <Loading />
    } else {
        return (
            <div className="bg-primary pb-5 pt-2 text-light">

                <h1 className="m-0 text-center">Pago</h1>

                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-12">
                            <PaymentForm disabled={disabled} finish={finished}/>
                        </div>
                        <div className="col-md-4 col-12">
                            <PaymentProduct disabled={disableds} finished={(val) => finish(val)} />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Payment
