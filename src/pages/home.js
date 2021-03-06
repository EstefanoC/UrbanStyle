import React from 'react'

// helmet
import { Helmet } from 'react-helmet';

// Redux
import { connect } from 'react-redux'

// component
import Navbar from '../components/navbar/'
import Carousel from '../components/carousel/'
import Recommended from '../components/recommended/'
import Cupon from '../components/cupon/'
import Gallery from '../components/gallery/'
import Map from '../components/helpers/map'
import Footer from '../components/footer/'


const Home = ({navbar}) => (
    <>
        <Helmet>
            <title>Urban Style</title>
        </Helmet>
        <div className={navbar.page.class} id="page-content">
            <Navbar />
            <main>
                <Carousel />
                <Recommended />
                <Cupon />
                <Gallery />
                <Map />
            </main>
            <Footer />
        </div>
    </>
)

const mapStateToProps = state => ({
    navbar: state.navbar
})


export default connect(mapStateToProps)(Home)