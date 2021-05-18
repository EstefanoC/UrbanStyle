import React from 'react'

// Redux
import { connect } from 'react-redux'

// Component
import Switch from './switch.js'
import Categories from './categories'



const NavbarVertical = ({navbar}) => {
    return (
    <div className={navbar.vertical.class} id="vertical-nav">

        <div className="vertical-nav-header py-4">
            <h2 className="mx-2 text-uppercase text-white">Categorias</h2>
                <div className="d-flex justify-content-center align-items-center my-4 pt-2 switch">
                    <Switch />
                </div>
        </div>

        <nav>
            <Categories
                switchState={navbar.switch}
            />
        </nav>

    </div>
    )
}


const mapStateToProps = state => ({
    navbar: state.navbar
})


export default connect(mapStateToProps)(NavbarVertical)