import React, { Component } from 'react'
import firebase from 'firebase/app';
import "firebase/firestore";
import { connect } from 'react-redux'
import Navbar from '../components/navbar'
import Users from '../components/toolsStore/user';
import Footer from '../components/footer'


class User extends Component {
    constructor(...props) {
        super(...props)

        this.state = {
            data: null
        }
    }

    async componentDidMount() {
        var userAuth  = await firebase.auth().currentUser

        if (userAuth) {
            this.setState({
                data: userAuth.email
            })
        } else {
            this.setState({
                data: userAuth
            })
        }

    }

    componentWillUnmount() {
        this.setState({
            data: []
        })
    }

    render() {
        return(
            <div className={`${this.props.navbar.page.class} user`} id="page-content">
                <Navbar />
                <main>
                    <Users user={this.state.data} />
                </main>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    navbar: state.navbar
})

export default connect(mapStateToProps)(User)