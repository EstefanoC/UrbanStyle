import React, { Component } from 'react'

// Styles
import './index.css'

// Data firebase
import { firestore } from '../../data/firebase'
import "firebase/firestore";

// Components
import RecommendedCard from './recommendedCard'


class Recommended extends Component {
    constructor(...props) {
        super(...props)

        this.state = {
            id: [],
            name: [],
            price: [],
            average: [],
            load: false
        }
    }

    componentDidMount() {
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
            <section className="container recommended">

                <h2 className="text-capitalize display-4 text-center mb-4">Top en compras</h2>

                <div className="row justify-content-center">
                    <RecommendedCard 
                        id={this.state.id} 
                        name={this.state.name} 
                        price={this.state.price} 
                        average={this.state.average} 
                        load={this.state.load}
                    />
                </div>
            </section>
        )
    }
}

export default Recommended