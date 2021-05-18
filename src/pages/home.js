import React from 'react'

// Redux
import { connect } from 'react-redux'

// component
import Navbar from '../components/navbar/'
import Carousel from '../components/carousel/'
import Recommended from '../components/recommended/'
import Cupon from '../components/cupon/'
import Gallery from '../components/gallery/'
import Footer from '../components/footer/'


const Home = ({navbar}) => {
    return (
        <div className={navbar.page.class} id="page-content">
            <Navbar />
            <main>
                <Carousel />
                <Recommended />
                <Cupon />
                <Gallery />
            </main>
            <Footer />
        </div>
    )
}

const mapStateToProps = state => ({
    navbar: state.navbar
})


export default connect(mapStateToProps)(Home)