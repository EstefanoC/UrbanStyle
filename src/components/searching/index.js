import React, { Component } from 'react'
import './index.css'
import { firestore } from '../../data/firebase'
import "firebase/firestore";
import Cupon from '../cupon/index.js'
import FilterForm from './filter-form'


class Buscador extends Component {
    constructor(...props) {
        super(...props)

        this.state = {
            id: [],
            name: [],
            price: [],
            gender: [],
            tag: [],
            average: [],
            load: false
        }
    }


    componentDidMount () {
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
                    average: [...this.state.average, value.average]
                })
            })
            this.setState({
                load: true
            })
        })
    }


    render() {
        return (
            <>
                <div className="bg-primary py-4">
                    <section className="container recommended searching">

                        <h2 className="text-capitalize display-4 text-center mb-4">Buscador</h2>

                        <FilterForm
                            load={this.state.load}
                            dbState={this.state}
                            productFilter={this.props.productFilter}
                        />

                    </section>
                </div>
                <div id="cuponSearch">
                    <Cupon />
                </div>
            </>
        )
    }
}

export default Buscador