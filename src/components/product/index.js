import React from 'react'

// Style
import './index.css'

// React-Router
import { useParams } from 'react-router-dom'

// Component
import Informacion from './information'
import Loading from '../helpers/loading'


let userImage


const Product = (props) => {
    const {id} = useParams()


    if (!props.load) {
        return <Loading load={props.load} />
    } else {
        userImage = require(`../../media/productos${props.dbState.id[id].toString()}.jpg`).default

        return (
            <section className="bg-primary producto">
                    <div className="container px-4 pt-4 pb-1">

                        <h1 className="text-center text-uppercase mb-5">{props.dbState.name[id]}</h1>

                        <div className="row p-3 py-md-3 pr-md-3 pl-1 mb-5">

                            <div className="col-12 col-md-6">
                                <img src={userImage} alt={props.dbState.name[id]} className="img-fluid"/>
                            </div>

                            <div className="col-12 col-md-6 producto-informacion bg-secondary px-4 pt-4 pb-1">
                                <Informacion 
                                productId = {id}
                                dbState = {props.dbState}
                                />
                            </div>
                            
                        </div>
                    </div>
            </section>
        )
    }
}


export default Product