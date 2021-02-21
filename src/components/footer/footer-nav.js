import React from 'react'

const FooterNav = () => (
    <nav className="col-8 d-flex flex-column flex-md-row align-items-center justify-content-center align-items-md-start text-center text-light">

        <div className="nav-column pr-0 pr-md-3 mt-3 mt-md-0">
            <h3 className="nav-title text-capitalize">Sobre nosotros</h3>
            <ol className="nav d-flex flex-column text-center text-md-left">
                <li className="nav-link">Nuestra historia</li>
                <li className="nav-link">Objetivos</li>
                <li className="nav-link">Identidad</li>
                <li className="nav-link">Aporte social</li>
                <li className="nav-link">Ubicación</li>
            </ol>
        </div>

        <div className="nav-column px-0 px-md-3 mt-3 mt-md-0">
            <h3 className="nav-title text-capitalize">Atención al cliente</h3>
            <ol className="nav d-flex flex-column text-center text-md-left">
                <li className="nav-link">Preguntas frecuentes</li>
                <li className="nav-link">Envio</li>
                <li className="nav-link">Encuesta</li>
                <li className="nav-link">Sugerencias</li>
            </ol>
        </div>

        <div className="nav-column pl-0 pl-md-3 mt-3 mt-md-0">
            <h3 className="nav-title text-capitalize">Terminos y condiciones</h3>
            <ol className="nav d-flex flex-column text-center text-md-left">
                <li className="nav-link">Propiedad intelectual</li>
                <li className="nav-link">Protección</li>
                <li className="nav-link">Discreción</li>
            </ol>
        </div>

    </nav>
)


export default FooterNav