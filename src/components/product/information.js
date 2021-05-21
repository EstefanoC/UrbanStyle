import React, { useState } from 'react'
import Favorite from '../helpers/favorite'
import Cart from '../helpers/cart'
import Review from '../helpers/review'
import ModalInformation from './modal-information'


const Informacion = (props) => {
    const [clickReview, setClickReview] = useState({
        state: false,
        targetReview:"#modal-review"
    })
    const [reviewForm, setReviewForm] = useState({class: 'hidden', click:0})


    const handleSendReview = () => {
        setReviewForm({class: 'hiddenForever', click:1})
        setClickReview({
            state: true,
            targetReview: ""
        })
    }

    return (
        <>
            <div className="text-light h-100">

                <h2 className="text-center text-uppercase mb-3">{props.dbState.name[props.productId]}</h2>

                <div className="row d-flex align-items-center">
                    <div className="col-8">
                        <span className="d-block">Precio: <strong className="ml-3">{props.dbState.price[props.productId]}$</strong></span>
                        <span className="d-block"> Género: <strong className="ml-3 text-uppercase">{props.dbState.gender[props.productId]}</strong></span>
                    </div>

                    <div className="col-4 fav-cart text-right">
                        <div className="d-block">
                            <Favorite id={props.dbState.id[props.productId]} name={props.dbState.name[props.productId]} price={props.dbState.price[props.productId]} />
                        </div>
                        <div className="d-block">
                            <Cart id={props.dbState.id[props.productId]} name={props.dbState.name[props.productId]} price={props.dbState.price[props.productId]} />
                        </div>
                    </div>
                </div>

                <span className="d-block m-0 mb-3">Quedan: &nbsp; <strong>{props.dbState.stock[props.productId]}</strong> en Stock!</span>
                <span className="d-block m-0 mb-5">¡Disponible en todas las tallas!</span>

                <p className="text-left">Realiza tú pedido con <span className="text-uppercase">¡Delivery gratis!</span> por tan solo {props.dbState.price[props.productId]}$.  Métodos de pago:</p>

                <div className="d-flex pagos justify-content-between px-3">
                    <span className="fab fa-cc-paypal" title="Paypal"><span className="sr-only">Paypal</span></span>
                    <span className="fab fa-cc-visa" title="Visa"><span className="sr-only">Visa</span></span>
                    <span className="fab fa-cc-mastercard" title="Mastercard"><span className="sr-only">Mastercard</span></span>
                    <span className="fab fa-cc-amex" title="American Express"><span className="sr-only">American Express</span></span>
                    <span className="fab fa-amazon-pay" title="Amazon pay"><span className="sr-only">Amazon pay</span></span>
                </div>

                <div className="text-center mt-5 mb-3">
                    <p className="m-0">Puedes Puntuar el producto aqui. ¡Dejanos tú comentario!</p>
                    <div className="d-inline-block review" onClick={() => (reviewForm.click === 0) ? setReviewForm('show') : null}>
                        <Review />
                        <button className={`${reviewForm.class}`} data-toggle="modal" data-target={clickReview.targetReview.toString()}>Envianos tu review</button>
                    </div>
                </div>

                <ModalInformation
                    handleClick={() => handleSendReview()}
                />

                <p className="tags m-0 text-capitalize">
                    Tags: &nbsp; {props.dbState.tag[props.productId].replace(/ /g, ", ")}
                </p>
            </div>
        </>
    )
}


export default Informacion