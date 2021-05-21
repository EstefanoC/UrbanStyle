import React, { useEffect } from 'react'

// React-Router
import { Link, useHistory } from 'react-router-dom'


const Thanks = () => {
    const history = useHistory()

    useEffect(() => {
        setTimeout(() => {
            history.push('/')
        }, 4000);

        return (
            clearTimeout()
        )
    }, [history])

    return (
        <div className="thanks">
            <div className="d-flex flex-column align-items-center justify-content-start text-center h-100 text-dark">
                <h1 className="d-block display-1 mb-4">¡Gracias!</h1>
                <h2>Por comprar con nosotros</h2>
                <Link to='/'>
                    <p className="m-0">Volver al Inicio</p>
                </Link>
            </div>
        </div>
    )
}

export default Thanks