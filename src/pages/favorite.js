import React, { Component } from 'react'

// Data firebase
import { firestore } from '../data/firebase'
import "firebase/firestore";

// Redux
import { connect } from 'react-redux'

// component
import Navbar from '../components/navbar'
import Favorites from '../components/toolsStore/favorite';
import Footer from '../components/footer'


class Favorite extends Component {
    constructor(...props) {
        super(...props)

        this.state = {
            data: [],
            load: false
        }
    }

    componentDidMount () {
        const refer = firestore.collection('favoritos')
        let items = []

        refer.onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                items.push(doc.data())
            })
            this.setState({
                data: items,
                load: true
            })
        })
    }

    componentWillUnmount() {
        this.setState({
            data: [],
            load: false
        })
    }

    render() {
        return(
            <div className={`${this.props.navbar.page.class} favorite`} id="page-content">
                <Navbar />
                <main>
                    <Favorites load={this.state.load} data={this.state.data} />
                </main>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    navbar: state.navbar
})

export default connect(mapStateToProps)(Favorite)