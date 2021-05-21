import React from 'react'
import CuponForm from './cupon-form'


const Cupon = () => (
    <div className="row d-flex justify-content-center align-items-center">
        <div className="cupon-bg"></div>
        <div className="col-12 col-md-5 col-lg-6 p-3">
            <p className="cupon-text mb-0 text-center text-light">
                <strong className="display-4 d-block mb-2">¡Aprovecha!</strong>
                Descuento del <strong className="display-5">12%</strong> con solo ingresar tú correo electronico
            </p>
        </div>
        <div className="col-12 col-md-7 col-lg-6 p-3">
            <CuponForm />
        </div>
    </div>
)

export default Cupon