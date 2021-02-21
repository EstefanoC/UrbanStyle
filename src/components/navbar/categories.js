import React, { Component } from 'react'

// Data firebase
import { firestore } from '../../data/firebase'
import "firebase/firestore";


// Component
import CategoriesList from './categories-list'



class Categories extends Component {
    constructor(...props) {
        super(...props)

        this.state = {
            id: [],
            name: [],
            icon: [],
            gender: [],
            dropdown: {
                id: [],
                name: [],
                gender: []
            },
            load: false
        }
    }


    componentDidMount() {
        const refer = firestore.collection('categorias').orderBy("name", "asc")
        let items = []
        let itemsId = []
        let itemsDropdown = []
        let itemsDropdownId = []
    
        refer.onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                let id = doc.ref.id

                itemsId.push(id)
                items.push(doc.data())

                if (doc.data().dropdown) {
                    const referDrop = firestore.collection(`/categorias/${id}/dropdown`)

                    referDrop.onSnapshot((querySnapshot) => {
                        querySnapshot.forEach((doc) => {

                            itemsDropdownId.push(id)
                            itemsDropdown.push(doc.data())
                        })


                        itemsDropdown.forEach((value) => {
                            this.setState({
                                dropdown: {
                                    id: [...this.state.dropdown.id, id],
                                    name: [...this.state.dropdown.name, value.name],
                                    gender: [...this.state.dropdown.gender, value.gender]
                                }
                            })
                        })
                        itemsDropdown = []
                    })
                }
            })


            items.forEach((value) => {
                this.setState({
                    name: [...this.state.name, value.name],
                    icon: [...this.state.icon, value.icon],
                    gender: [...this.state.gender, value.gender]
                })   
            })


            itemsId.forEach((value) => {
                this.setState({
                    id: [...this.state.id, value]
                })
            })


            this.setState({
                load: true
            })
        })
    }



    render() {
        return (
            <ul className="nav justify-content-left d-flex flex-column list-unstyled">
                <CategoriesList 
                id={this.state.id} 
                name={this.state.name} 
                icon={this.state.icon} 
                gender={this.state.gender} 
                dropdown={this.state.dropdown} 
                load={this.state.load}
                switchState={this.props.switchState}
                />
            </ul>
        )
    }
}


export default Categories