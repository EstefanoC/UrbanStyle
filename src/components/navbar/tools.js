import React from 'react'

// Redux
import { connect } from 'react-redux'

// React-Router
import { withRouter } from 'react-router-dom'


const Tools = ({history, search, navbar, handleOnChangeSearch}) => {


    const onSubmit = (e) => {
        e.preventDefault()
        history.push(`/buscador/${navbar.search.name}`)
    }


        return (
    <div className="tools text-center">

        <div className="form-search d-inline-block">
            <form onSubmit={onSubmit}>
                <input type="text" name={search} id={search} value={navbar.search.name} onChange={(e) => handleOnChangeSearch(e.target.value, navbar)} className="d-inline-block rounded-pill" required autoComplete="off"/>
                <label className="mb-0" htmlFor={search} name={search}>
                    <span className="fa fa-search" title="Buscar"></span>
                </label>
            </form>
        </div>

        <div className="d-inline-block">
            <ul className="list-unstyled d-flex mb-0">
                <li><i className="fa fa-shopping-cart" title="Carrito"><span className="sr-only">Cart</span></i></li>
                <li><i className="fa fa-heart" title="Favoritos"><span className="sr-only">Favorito</span></i></li>
                <li><i className="fa fa-user" title="Usuario"><span className="sr-only">Usuario</span></i></li>
            </ul> 
        </div>

    </div>
    )
}


const mapStateToProps = state => ({
    navbar: state.navbar
})


const mapStateToDispatch = dispatch => ({
    handleOnChangeSearch(e, navbar) {
        dispatch({
            type:"handleOnChangeSearch",
            e,
            navbar
        })
    }
})


export default withRouter(connect(mapStateToProps, mapStateToDispatch)(Tools))