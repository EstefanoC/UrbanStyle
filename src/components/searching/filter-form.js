import React, { useState, useEffect, useCallback } from 'react'

// Redux
import { connect } from 'react-redux'

// Component
import SearchingCard from './searching-card'

// React-Router
import { withRouter } from 'react-router-dom'


const FilterForm = ({match, load, dbState, productFilter, navbar, handleOnChangeSearch, handleOnSubmit}) => {
    const [productFilterFinish, setProductFilterFinish] = useState([])
    const [formValue, setFormValue] = useState({
        price: 500,
        gender: "unisex"
    })

    const handleOnChangeInput = (e) => {
        const { name, value } = e.target
        setFormValue({...formValue, [name]: value})
        handleOnSubmit(formValue, navbar)
        if (name === "gender") {
            getFilterProducts(value, formValue.price)
        } else {
            getFilterProducts(formValue.gender, value)
        }
    }


    const getFilterProducts = useCallback((gen, pric) => {
        const nameGeneric = productFilter.name.trim().toLowerCase().toString()
        const genderGeneric = gen
        const priceGeneric = parseInt(pric)


        setProductFilterFinish([])


        dbState.id.forEach( (value, i) => {
            const nameFilter = dbState.name[i].trim().toLowerCase()
            const tagFilter = dbState.tag[i].trim().toLowerCase()
            const genderFilter = dbState.gender[i].trim().toLowerCase()
            const priceFilter = dbState.price[i]

            if (nameGeneric.normalize('NFD').replace(/[\u0300-\u0301]/g, "") === "" || tagFilter.includes(nameGeneric.replace(/[\u0300-\u0301]/g, "")) === "") {
                if (priceFilter < priceGeneric) {
                    if (genderFilter === genderGeneric || genderGeneric === "unisex" || genderFilter === "unisex") {
                        return setProductFilterFinish((val) => [...val, value] )
                    }
                }
            } else {
                if (nameFilter.includes(nameGeneric.normalize('NFD').replace(/[\u0300-\u0301]/g, "")) ||  tagFilter.includes(nameGeneric.replace(/[\u0300-\u0301]/g, ""))) {
                    if (priceFilter < priceGeneric || isNaN(priceGeneric)) {
                        if (genderFilter === genderGeneric || genderGeneric === "unisex" || genderFilter === "unisex" || genderGeneric === undefined) {
                            return setProductFilterFinish((val) => [...val, value] )
                        }
                    }
                }
            }
        })
    },
    [dbState, productFilter],
)


    const handleOnReset = () => {
        setFormValue({
            price: 500,
            gender: "unisex"
        })
        handleOnChangeSearch("", navbar)
        getFilterProducts("unisex", 500)
        setProductFilterFinish([])
    }


    const getSubmit = (e) => {
        e.preventDefault()
        handleOnSubmit(formValue, navbar)
        getFilterProducts(formValue.gender, formValue.price)
    }


    useEffect( () => {
        if (load) {
            if (match.params.name) {
                getFilterProducts(formValue.gender, formValue.price)
            }
        }
    }, [load, match.params.name, formValue.gender, formValue.price, getFilterProducts])


    return(
        <>
            <form autoComplete="false" className="row text-center text-light mb-5" onSubmit={getSubmit}>

                <div className="col-12 mb-4">
                    <label htmlFor="filter-text">Introduce lo que quieres filtrar:</label>
                    <br />
                    <input type="text" name="filter" id="filter-text" className="w-100 form-control-md" value={navbar.search.name} onChange={(e) => handleOnChangeSearch(e.target.value, navbar)} required autoComplete="off"/>
                    <label className="mb-0 filter-label" htmlFor="filter-text">
                        <span className="fa fa-search ml-4" title="Buscar"></span>
                    </label>
                </div>

                <div className="col-12 col-sm-6 mb-3 radial-form" name="gender" onChange={(e) => handleOnChangeInput(e)}>
                    <label htmlFor="filter-male" className="mx-3">
                        Hombre
                        <br />
                        <input type="radio" name="gender" id="filter-male" value="male"/>
                    </label>
                    <label htmlFor="filter-female" className="mx-3">
                        Mujer
                        <br />
                        <input type="radio" name="gender" id="filter-female" value="female"/>
                    </label>
                    <label htmlFor="filter-unisex" className="mx-3">
                        Unisex
                        <br />
                        <input type="radio" name="gender" id="filter-unisex" value="unisex"/>
                    </label>
                </div>

                <div className="col-12 col-sm-6 mb-3 filter-range">
                    <label htmlFor="filter-range">Rango de precio</label>
                    <br />
                    <div className="d-flex align-items-center">
                        <strong className="mx-2">{formValue.price}$</strong>
                        <input type="range" name="price" id="" min="5" max="500" value={formValue.price} onChange={(e) => handleOnChangeInput(e)} className="w-100"/>
                    </div>
                </div>

                <div className="col-12 col-sm-6 text-left filter-reset">
                    <label htmlFor="filter-reset text-center m-2">
                            Restablecer valores
                            <br />
                            <div className="text-center">
                                <input type="reset" value="Reiniciar" id="filter-reset" className="btn btn-md btn-danger" onClick={handleOnReset}/>
                            </div>
                    </label>
                </div>

                <div className="col-12 col-sm-6 text-right filter-submit">
                    <label htmlFor="filter-submit text-center m-2">
                            Filtrar
                            <br />
                            <div className="text-center">
                                <input type="submit" value="Buscar" id="filter-submit" className="btn btn-md btn-success"/>
                            </div>
                    </label>
                </div>
            </form>
            <div className="row justify-content-center">
                <SearchingCard
                    load = {load}
                    dbState = {dbState}
                    search = {productFilter}
                    filter = {productFilterFinish}
                />
            </div>
        </>
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
    handleOnSubmit(inputData, navbar) {
        dispatch({
            type:"handleOnSubmit",
            inputData,
            navbar
        })
    }
})


export default withRouter(connect(mapStateToProps, mapStateToDispatch)(FilterForm))