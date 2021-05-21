import React, { Component } from 'react'

// Redux
import { connect } from 'react-redux'

// component
import Navbar from '../components/navbar'
import Payments from '../components/payment/index.js'
import Footer from '../components/footer'


class Payment extends Component {
    constructor() {
        super()
        this.state = {
            load: false
        }
    }

    componentDidMount() {
        this.setState({ load: true })
    }

    render() {
        return(
            <div className={`${this.props.navbar.page.class} payment`} id="page-content">
                <Navbar />
                <main>
                    <Payments load={this.state.load} />
                </main>
                <Footer />
            </div>
        )
    }
}


const mapStateToProps = state => ({
    navbar: state.navbar
})


export default connect(mapStateToProps)(Payment)