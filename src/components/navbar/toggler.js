import React from 'react'
import { connect } from 'react-redux'


const Toggler = ({toggler, navbar, navbarToggleState}) => (
    <button id={toggler} type="button" className={navbar.toggler.class} onClick={() => navbarToggleState(navbar)}>
        <span className="fa fa-bars text-tertiary"><span className="sr-only">Toggler</span></span>
    </button>
)


const mapStateToProps = state => ({
    navbar: state.navbar
})


const mapDispatchToProps = dispatch => ({
    navbarToggleState(navbar) {
        dispatch({
            type:"TogglerState",
            navbar
        })
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(Toggler)