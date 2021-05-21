import React, { Component } from 'react'
import './index.css'
import { firestore } from '../../data/firebase'
import GalleryItems from './gallery-items'


class Gallery extends Component {
    constructor (...props) {
        super(...props)

        this.state = {
            id: [],
            username: [],
            garment: []
        }
    }

    componentDidMount () {
        const refer = firestore.collection('clientes')
        let items = []

        refer.onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                items.push(doc.data())
            })
            items.map((value, index) => {
                return (
                    this.setState({
                        id: [...this.state.id, ++index],
                        username: [...this.state.username, value.username],
                        garment: [...this.state.garment, value.garment]
                    })
                )
            })
        })
    }


    render () {
        return (
            <section className="container gallery mb-4">

                <h2 className="text-center text-capitalize display-4 my-4" >galeria de clientes</h2>

                <div className="row">
                    <div className="col-12">
                        <GalleryItems id={this.state.id} username={this.state.username} garment={this.state.garment} />
                    </div>
                </div>

            </section>
        )
    }
}

export default Gallery