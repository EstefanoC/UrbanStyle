import React from 'react'

// helmet
import { Helmet } from 'react-helmet';

// Redux
import { connect } from 'react-redux'

// component
import Navbar from '../components/navbar/'
import Searching from '../components/searching/'
import Footer from '../components/footer/'



const Buscador = ({navbar}) => {

    return (
        <>
            <Helmet>
                <title>Urban Style | Buscador</title>
            </Helmet>
            <div className={navbar.page.class} id="page-content">
                <Navbar />
                <main>
                    <Searching productFilter={navbar.search}/>
                </main>
                <Footer />
            </div>
        </>
    )
}


const mapStateToProps = state => ({
    navbar: state.navbar
})


export default connect(mapStateToProps)(Buscador)