import React, { useState } from 'react'

// React-Router
import { Link } from 'react-router-dom'

// Redux
import { connect } from 'react-redux'


const CategoriesList = ({switchState, load, id, dropdown, name, icon, gender, navbar, handleOnChangeSearch, navbarToggleState}) => {
    const [navDropdown, setNavDropdown] = useState({})
    let dropId = []
    let dropItems = []
    let genderState


    const handleClickNavDropdown = (event, id) => {
        let tagName = event.target.tagName

        if (tagName === 'A' || tagName === 'I') {
           return null
        } else {
            if (navDropdown[id][0].state) {
                setNavDropdown(prev => ({...prev, 
                    [id]: [{
                            state: false,
                            arrow: 'fas fa-arrow-down',
                            menu: 'list-unstyled dropdown-off'
                        }]
                }))
            } else {
                setNavDropdown(prev => ({...prev, 
                    [id]: [{
                            state: true,
                            arrow: 'fas fa-arrow-down rotate',
                            menu: 'list-unstyled dropdown-on'
                        }]
                }))
            }
        }
    }


    const getSwitchState = () => {
        for ( const SwitchState in switchState ) {
            if (switchState[SwitchState] === true) {
                genderState = SwitchState
            }
        }
    }
    

    const addNavDropdownId = (value) => {
        return dropId.some(elem => elem === value) ? false : dropId.push(value)
    }


    const addNavDropdownState = (value) => {
        dropId.forEach( id => {
            if (navDropdown[value] === undefined && id === value) {
                setNavDropdown(prev => ({...prev, 
                    [id]: [{
                            state: false,
                            arrow: 'fas fa-arrow-down',
                            menu: 'list-unstyled dropdown-off'
                        }]
                }))
            }
        })
    }


    const handleOnClickLink = (text) => {
        handleOnChangeSearch(text.toString(), navbar)
        navbarToggleState(navbar)
    }


    return (
            (load) ?
               id.map( (value, index) => {
                    dropItems = []
                    getSwitchState()

                    return (
                        dropdown.id.forEach( (element, i) => {
                            if (value === element) {
                                dropItems.push(i)
                                addNavDropdownId(value)
                                addNavDropdownState(value)
                            }
                        }),


                        (dropItems.length) ?
                            (navDropdown[value] === undefined) ?
                                <></>
                            :
                                (genderState === 'unisex') ?
                                    <li className="nav-item" key={value} onClick={(event) => handleClickNavDropdown(event, value)}>
                                        <div className="nav-link text-white">
                                            <Link to={`/buscador/${name[index]}`} className="d-inline-block m-0" onClick={() => handleOnClickLink(name[index])}>{name[index]}
                                                <i className={`fas ${icon[index]} ml-2`}></i>
                                            </Link>
                                            <span className={navDropdown[value][0].arrow}></span>
                                            <ul className={navDropdown[value][0].menu}>
                                                {
                                                    dropItems.map( (val) => (
                                                        <li className="nav-link" key={`${value}${val}`}><Link to={`/buscador/${dropdown.name[val]}`} className="text-white" onClick={() => handleOnClickLink(name[index])}>{dropdown.name[val]}</Link></li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </li>
                                    :
                                        <li className="nav-item" key={value} style={gender[index] === genderState || gender[index] === 'unisex' ? {display: 'block'} : {display: 'none'}} onClick={(event) => handleClickNavDropdown(event, value)}>
                                            <div className="nav-link text-white">
                                                <Link to={`/buscador/${name[index]}`} className="d-inline-block m-0" onClick={() => handleOnClickLink(name[index])} >{name[index]}
                                                    <i className={`fas ${icon[index]} ml-2`}></i>
                                                </Link>
                                                <span className={navDropdown[value][0].arrow}></span>
                                                <ul className={navDropdown[value][0].menu}>
                                                    {
                                                        dropItems.map( (val) => (
                                                            <li className="nav-link" key={`${value}${val}`} style={(dropdown.gender[val] === genderState || dropdown.gender[val] === 'unisex') ? {display: 'block'} : {display: 'none'}}><Link to={`/buscador/${dropdown.name[val]}`} className="text-white" onClick={() => handleOnClickLink(name[index])}>{dropdown.name[val]}</Link></li>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        </li>
                        :
                            (genderState === 'unisex') ?
                                <li className="nav-item" key={value}>
                                    <Link to={`/buscador/${name[index]}`} className="nav-link text-white" onClick={() => handleOnClickLink(name[index])}>{name[index]}
                                        <i className={`fas ${icon[index]} ml-2`}></i>
                                    </Link>
                                </li>
                            :
                                <li className="nav-item" key={value} style={(gender[index] === genderState || gender[index] === 'unisex') ? {display: 'block'} : {display: 'none'}}>
                                    <Link to={`/buscador/${name[index]}`} className="nav-link text-white" onClick={() => handleOnClickLink(name[index])}>{name[index]}
                                        <i className={`fas ${icon[index]} ml-2`}></i>
                                    </Link>
                                </li>
                    )
                })
            :
                <></>
    )
}


const mapStateToProps = state => ({
    navbar: state.navbar
})


const mapStateToDispatch = dispatch => ({
    handleOnChangeSearch(e, navbar) {
        dispatch({
            type:"handleOnChangeSearch",
            e,
            navbar
        })
    }, 
    navbarToggleState(navbar) {
        dispatch({
            type:"TogglerState",
            navbar
        })
    }
})

export default connect(mapStateToProps, mapStateToDispatch)(CategoriesList)