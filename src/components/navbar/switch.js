import React from 'react'

// Redux
import { connect } from 'react-redux'


const SwitchVertical = ({ navbar, handleClickHombre, handleClickNeutro, handleClickMujer }) => {
    return (
        <div className={navbar.switch.class}>
            <p className="d-inline-block text-uppercase mb-0 ml-2 boy" onClick={() => handleClickHombre(navbar)}>Hombre</p>
            <p className="d-inline-block text-uppercase mb-0 px-2 neutro"><span className="fa fa-circle" onClick={() => handleClickNeutro(navbar)}></span></p>
            <p className="d-inline-block text-uppercase mb-0 mr-2 girl" onClick={() => handleClickMujer(navbar)}>Mujer</p>
        </div>
    )
}


const mapStateToProps = state => ({
    navbar: state.navbar
})


const mapDispatchToProps = dispatch => ({
    handleClickHombre(navbar) {
        dispatch({
            type:"handleClickHombre",
            navbar
        })
    },
    handleClickNeutro(navbar) {
        dispatch({
            type:"handleClickNeutro",
            navbar
        })
    },
    handleClickMujer(navbar) {
        dispatch({
            type:"handleClickMujer",
            navbar
        })
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(SwitchVertical)