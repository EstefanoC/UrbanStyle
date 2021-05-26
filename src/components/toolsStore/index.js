import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const ToolsStore = () => (
    <>
        <li><Link to={"/carrito"}><i className="fa fa-shopping-cart" title="Carrito"><span className="sr-only">Cart</span></i></Link></li>
        <li><Link to={"/favoritos"}><i className="fa fa-heart" title="Favoritos"><span className="sr-only">Favorito</span></i></Link></li>
        <li><Link to={"/registro"}><i className="fa fa-user" title="Usuario"><span className="sr-only">Usuario</span></i></Link></li>
    </>
)

export default ToolsStore