import React from 'react'

// React-Router
import { Link } from 'react-router-dom'


const Error404 = () => (
    <div className="bg-primary error404">
        <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 text-light">
            <h1 className="d-block display-1 m-0">Error 404</h1>
            <p className="m-0">Página no encontrada</p>
            <Link to='/'>
                <p className="m-0">Volver al Inicio</p>
            </Link>
        </div>
    </div>
)

export default Error404