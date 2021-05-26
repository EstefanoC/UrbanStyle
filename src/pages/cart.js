import React, { Component } from 'react'
import { connect } from 'react-redux'

// helmet
import { Helmet } from 'react-helmet';

// component
import Navbar from '../components/navbar'
import Carts from '../components/toolsStore/cart';
import Footer from '../components/footer'


class Cart extends Component {
    render() {
        return(
            <>
                <Helmet>
                    <title>Urban Style | Carrito</title>
                </Helmet>
                <div className={`${this.props.navbar.page.class} cart`} id="page-content">
                    <Navbar />
                    <main>
                        <Carts />
                    </main>
                    <Footer />
                </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    navbar: state.navbar
})

export default connect(mapStateToProps)(Cart)