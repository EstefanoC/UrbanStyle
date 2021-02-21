import React, { Component } from 'react'

// Data firebase
import { firestore } from '../data/firebase'
import "firebase/firestore";

// Redux
import { connect } from 'react-redux'

// component
import Navbar from '../components/navbar'
import Product from '../components/product'
import Footer from '../components/footer'


class Productos extends Component {
    constructor(...props) {
        super(...props)

        this.state = {
            id: [],
            name: [],
            price: [],
            gender: [],
            tag: [],
            stock: [],
            average: [],
            load: false
        }
    }

    componentWillMount () {
        const refer = firestore.collection('productos')
        let items = []
    
        refer.onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                items.push(doc.data())
            })
            items.forEach((value, index) => {
                this.setState({
                    id: [...this.state.id, ++index],
                    name: [...this.state.name, value.name],
                    price: [...this.state.price, value.price ],
                    gender: [...this.state.gender, value.gender],
                    tag: [...this.state.tag, value.tag],
                    stock: [...this.state.stock, value.stock],
                    average: [...this.state.average, value.average]
                })
            })
            this.setState({
                load: true
            })
        })
    } 

    render() {
        return(
            <div className={this.props.navbar.page.class} id="page-content">
                <Navbar />
                <main>
                    <Product 
                        load={this.state.load}
                        dbState = {this.state}
                    /> 
                </main>
                <Footer />
            </div>
        )
    }
}


const mapStateToProps = state => ({
    navbar: state.navbar
})


export default connect(mapStateToProps)(Productos)