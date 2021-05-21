import React, { Component } from 'react'

// Redux
import { connect } from 'react-redux'

// component
import Navbar from '../components/navbar'
import Carts from '../components/toolsStore/cart';
import Footer from '../components/footer'


class Cart extends Component {
    render() {
        return(
            <div className={`${this.props.navbar.page.class} cart`} id="page-content">
                <Navbar />
                <main>
                    <Carts />
                </main>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    navbar: state.navbar
})

export default connect(mapStateToProps)(Cart)