import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import Favorite from '../helpers/favorite'
import Cart from '../helpers/cart'
import Review from '../helpers/review'
import Loading from '../helpers/loading'


let userImage
let heightLoad = []


class SearchingCard extends Component {
    constructor(...props) {
        super(...props)

        this.state = {
            quantityLoad: {
                number: 12,
                class: false
            }
        }
        this.onClickLoadMore = this.onClickLoadMore.bind(this)
    }


    onClickLoadMore = (limit) => {
        this.setState({ ...this.state, quantityLoad: {
            number: this.state.quantityLoad.number + 12,
            class: false
        }})
        if (this.state.quantityLoad.number + 12 >= limit) {
            this.setState({ ...this.state, quantityLoad: {
                number: limit,
                class: true
            }})
        }
    }

    render () {
        if (!this.props.load) {
            return <div className="bg-primary"><Loading load={false}/></div>
        } else {
            if (this.props.filter.length) {
                return (
                    <>
                        {this.props.filter.slice(0, this.state.quantityLoad.number).map( (value, i) => {
                            userImage = require(`../../media/productos${value.toString()}.jpg`).default
                            heightLoad.push("200px")

                            return (
                                <article className="col-12 col-sm-5 col-md-3 col-lg-2 card mb-3 bg-primary text-light" key={this.props.dbState.id[value-1]} >
                                    <figure>
                                        <div className="card-top">
                                        <Favorite id={this.props.dbState.id[value-1]} name={this.props.dbState.name[value-1]} price={this.props.dbState.price[value-1]} />
                                        <Cart id={this.props.dbState.id[value-1]} name={this.props.dbState.name[value-1]} price={this.props.dbState.price[value-1]}/>
                                            <LazyLoadImage
                                                className="card-img-top img-fluid"
                                                alt={this.props.dbState.name[value-1]}
                                                src={userImage}
                                                effect="blur"
                                                height={heightLoad[i]}
                                                afterLoad={() => heightLoad[i] = "auto"}
                                            />
                                            <span className="card-review text-center w-100"><Review staticStar={true} staticAverage={this.props.dbState.average[value-1]} /></span>
                                        </div>
                                        <figcaption className="card-body py-3 px-2">
                                            <Link to={`/producto/${value-1}`}>
                                                <p className="card-title text-uppercase">{this.props.dbState.name[value-1]}</p>
                                            </Link>
                                            <strong className="card-text ml-2">{this.props.dbState.price[value-1]}$</strong>
                                        </figcaption>
                                    </figure>
                                </article>
                            )
                        })}
                        {
                            (this.props.filter.length > this.state.quantityLoad.number) ?
                                <input type="button" value="Cargar más" className="btn btn-lg btn-success w-100 mx-5" onClick={() => { this.onClickLoadMore(this.props.filter.length)}}/>
                            :
                                <></>
                        }
                    </>
                )
            } else {
                return (
                    <>
                        {this.props.dbState.id.slice(0, this.state.quantityLoad.number).map( (value, i) => {
                            userImage = require(`../../media/productos${value.toString()}.jpg`).default
                            heightLoad.push("200px")

                            return(
                                <article className="col-12 col-sm-5 col-md-3 col-lg-2 card mb-3 bg-primary text-light" key={this.props.dbState.id[value-1]} >
                                    <figure>
                                        <div className="card-top">
                                            <Favorite id={this.props.dbState.id[value-1]} name={this.props.dbState.name[value-1]} price={this.props.dbState.price[value-1]} />
                                            <Cart id={this.props.dbState.id[value-1]} name={this.props.dbState.name[value-1]} price={this.props.dbState.price[value-1]} />
                                            <LazyLoadImage
                                                className="card-img-top img-fluid"
                                                alt={this.props.dbState.name[value-1]}
                                                src={userImage}
                                                effect="blur"
                                                height={heightLoad[i]}
                                                afterLoad={() => heightLoad[i] = "auto"}
                                            />
                                            <span className="card-review text-center w-100"><Review staticStar={true} staticAverage={this.props.dbState.average[value-1]} /></span>
                                        </div>
                                        <figcaption className="card-body py-3 px-2">
                                            <Link to={`/producto/${value-1}`}>
                                                <p className="card-title text-uppercase">{this.props.dbState.name[value-1]}</p>
                                            </Link>
                                            <strong className="card-text ml-2">{this.props.dbState.price[value-1]}$</strong>
                                        </figcaption>
                                    </figure>
                                </article>
                            )
                        })}
                        {
                            <input type="button" value="Cargar más" className="btn btn-lg btn-success w-100 mx-5" onClick={() => { this.onClickLoadMore(this.props.dbState.id.length)}}/>
                        }
                    </>
                )
            }
        }
    }
}


export default SearchingCard