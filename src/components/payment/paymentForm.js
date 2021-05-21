import React, { useState, useRef } from 'react'

// React-Router
import { useHistory } from 'react-router-dom'

// Paypal
import { PayPalButton } from 'react-paypal-button-v2'

// Components
import Alert from '../helpers/alert'

const PaymentForm = ({ disabled, finish }) => {
    const [ data, setData ] = useState({})
    const [ visibilityAdd, setVisibilityAdd ] = useState(false)
    const [ visibilityErr, setVisibilityErr ] = useState(false)
    const [ message, setMessage ] = useState('')
    const [ error, setError ] = useState('')

    let history = useHistory();
    const ref = useRef(null)
    const styleObject = {
        layout:  'vertical',
        color:   'blue',
        shape:   'pill',
        label:   'paypal'
    }


    const Submit = async (e, target) => {
        switch (target) {
            case 'pay':
                e.preventDefault()
                try {
                    var formData = new FormData(ref.current);
                    const dataAll = {
                        'name': formData.get('name'),
                        'email': formData.get('email'),
                        'country': formData.get('country'),
                        'city': formData.get('city'),
                        'postal': formData.get('postal'),
                    }

                    for (const data in dataAll) {
                        if (dataAll[data].length < 2) {
                            throw new Error("Los campos deben tener más de 2 caracteres")
                        }
                    }

                    setData(dataAll)
                    setMessage('Se han procesado los datos correctamente')
                    setVisibilityAdd(true)
                    setTimeout(() => {
                        history.push("/carrito/gracias")
                    }, 2000);
                }
                catch(error) {
                    setError(error.message)
                    setVisibilityErr(true)
                }
                break;
            case "paypal success":
                console.log(e);
                setMessage(`Hola, ${e.payer.name.given_name} ${e.payer.name.surname} Se han procesado su pago con id ${e.id} por un monto de ${e.purchase_units[0].amount} correctamente, será enviado a ${e.payer.address} con 3 días habiles a partir de ${e.update_time}`)
                setVisibilityAdd(true)
                setTimeout(() => {
                    history.push("/carrito/gracias")
                }, 5000);
                break;
            case "paypal error":
                setError("Se ha encontrado un problema con el pago")
                setVisibilityErr(true)
                break;
            default:
                break;
        }
    }


    return (
        <div className="payment-form mt-3 py-3 px-4" >

            <h4>Rellenar formulario o usa Paypal:</h4>

            <Alert visibility={visibilityErr} bg="rgba(255, 0, 0, 0.800)" message={error} portalClose={() => setVisibilityErr(false)} />
            <Alert visibility={visibilityAdd} bg="rgba(0, 128, 0, 0.800)" message={message} portalClose={() => setVisibilityAdd(false)} />
            <div className="bg-primary">

                <form className="form-horizontal" method="post" ref={ref}>
                    <fieldset className="text-left">

                        <div className="form-group">
                            <label htmlFor="name">
                                <span className="col-md-1 col-md-offset-2"><i className="fa fa-user"></i></span>
                            </label>
                            <div className="col">
                                <input id="name" name="name" type="text" placeholder="Nombre" className="form-control" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">
                                <span className="col-md-1 col-md-offset-2"><i className="fa fa-envelope"></i></span>
                            </label>
                            <div className="col">
                                <input id="email" name="email" type="email" placeholder="Email" className="form-control" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="country">
                                <span className="col-md-1 col-md-offset-2"><i className="fa fa-flag"></i></span>
                            </label>
                            <div className="col">
                                <input id="country" name="country" type="text" placeholder="País" className="form-control" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="city">
                                <span className="col-md-1 col-md-offset-2"><i className="fa fa-city"></i></span>
                            </label>
                            <div className="col">
                                <input id="city" name="city" type="text" placeholder="Ciudad" className="form-control" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="postal">
                                <span className="col-md-1 col-md-offset-2"><i className="fa fa-mail-bulk"></i></span>
                            </label>
                            <div className="col">
                                <input id="postal" name="postal" type="number" placeholder="Código Postal" className="form-control" />
                            </div>
                        </div>


                        <div className="container mt-5">
                            <div className="row">
                                <div className="col-6">
                                    <button type="button" className="btn btn-secondary btn-block" data-dismiss="modal" onClick={ () => history.goBack() }>Regresar</button>
                                </div>
                                <div className="col-6">
                                    <button type="button" className="btn btn-primary btn-block" disabled={disabled} data-dismiss="modal" onClick={ (e) => Submit(e, 'pay') }>Confirmar pago</button>
                                </div>
                                <div className="col-12 mt-5">
                                    <PayPalButton
                                        amount={finish.toString()}
                                        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                                        onSuccess={(details) => {
                                            Submit(details, "paypal success")

                                            // OPTIONAL: Call your server to save the transaction
                                            return fetch("/paypal-transaction-complete", {
                                                method: "post",
                                                body: JSON.stringify({
                                                    orderID: data.orderID
                                                })
                                            });
                                        }}
                                        catchError={(err) => Submit(err, "paypal error")}
                                        onError={(err) => Submit(err, "paypal error")}
                                        style={styleObject}
                                    />
                                </div>
                            </div>
                        </div>

                    </fieldset>
                </form>
            </div>
    </div>
    )
}

export default PaymentForm