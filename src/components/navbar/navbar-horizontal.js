import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Toggler from './toggler'
import Tools from '../navbar/tools'


class NavbarHorizontal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            positionScroll: 0,
            hidden: "off-scroll"
        }

        this.handleScroll = this.handleScroll.bind(this)
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll() {
        const position = window.pageYOffset

        if(position > this.props.navbar.horizontal.scrollLimit) {
            this.props.changeToggler(this.props.navbar)

            if(position > this.state.positionScroll) {
                return this.setState({
                    positionScroll: position,
                    hidden: "off-scroll"
                    })
            } else {
                return this.setState({
                    positionScroll: position,
                    hidden: "on-scroll"
                    })
            }
        } else {
            this.props.changeToggler(this.props.navbar)
            this.setState({
                positionScroll: position,
                hidden: "off-scroll"
            })
        }
    }

    render() {
        return (
            <div className={`${this.props.navbar.horizontal.class} ${this.state.hidden}`} >
                <div className="row d-flex justify-content-between align-items-center">

                    <div className="col-1 px-0">
                        <Toggler toggler={(this.props.navbar.horizontal.id) ? "nav-collapse" : "toggler"}/>
                    </div>

                    <div className="col-5 col-lg-5 text-center nav-horizont-title">
                        <Link to='/'>
                            <h1 className="text-uppercase display-5 m-0">Urban Style</h1>
                        </Link>
                    </div>

                    <div className="col-6 col-lg-6 px-0">
                        <Tools
                        search="search1"
                        />
                    </div>

                </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    navbar: state.navbar
})


const mapDispatchToProps = (dispatch) => {
    return {
        changeToggler: (navbar) => { dispatch( { type: 'changeToggler', navbar: navbar} ) }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NavbarHorizontal)