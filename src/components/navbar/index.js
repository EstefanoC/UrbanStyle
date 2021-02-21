import React, { Component } from 'react'

// Redux
import { connect } from 'react-redux'

// Style
import './index.css'

// Components
import NavbarVertical from './navbar-vertical'
import Toggler from './toggler'
import SocialMedia from '../helpers/socialMedia'
import Tools from '../navbar/tools'
import NavbarHorizontal from './navbar-horizontal'

// React-router.
import { Link } from 'react-router-dom'


// Module
import CircleType from 'circletype'


class Navbar extends Component {


    componentDidMount() {
        new CircleType(document.getElementById('textCircle')).radius(410)
    }


    render() {
        return(
            <header>
                <NavbarVertical />
                <NavbarHorizontal />

                    <section className="container-fluid banner">
                        
                            <div className="row nav-horizont d-flex justify-content-between align-items-center pl-0 pt-3">

                                <div className="col-1 px-0">
                                    <Toggler toggler={(this.props.navbar.horizontal.id) ? "toggler" : "nav-collapse"}/>
                                </div>

                                <article className="col-lg-2 d-none d-lg-block">
                                    <SocialMedia/>
                                </article>

                                <div className="col-5 col-lg-4 text-center nav-horizont-title">
                                    <Link to='/'>
                                        <h1 className="text-uppercase display-5 m-0">Urban Style</h1>
                                    </Link>
                                </div>

                                <div className="col-6 col-lg-5 px-0">
                                    <Tools 
                                    search="search"
                                    />
                                </div>
                            </div>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 260" className="border-bottom-style">
                        <path fill="#68749e" fillOpacity="1" d="M0,256L60,240C120,224,240,192,360,197.3C480,203,600,245,720,245.3C840,245,960,203,1080,192C1200,181,1320,203,1380,213.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250" className="border-bottom-style1">
                        <path fill="#9e9e9e" fillOpacity="1" d="M0,256L60,240C120,224,240,192,360,197.3C480,203,600,245,720,245.3C840,245,960,203,1080,192C1200,181,1320,203,1380,213.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                    </svg>
                    <p id="textCircle" className="Navbar-eslogan text-light">Comodidad en la calle</p>

                </section>
            </header>
        )
    }
}


const mapStateToProps = state => ({
    navbar: state.navbar
})


export default connect(mapStateToProps)(Navbar)