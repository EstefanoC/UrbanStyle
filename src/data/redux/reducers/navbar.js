const initialState = {
    vertical: {
        state: false,
        class:"vertical-nav off-nav bg-primary"
    },
    horizontal: {
        state: false,
        class:"container-fluid navbar-horizont-scroll content-desactive pt-0",
        scrollLimit: 500,
        id: false
    },
    toggler: {
        state: false,
        class: "btn btn-light rounded-pill shadow-sm px-3 py-2 off",
    },
    page: {
        state: true,
        class: "page-content",
    },
    switch: {
        male: false,
        unisex: true,
        female: false,
        class: "px-2 switch-style d-flex justify-content-between align-items-center switch-neutro"
    },
    search: {
        name: "",
        gender: "unisex",
        price: 400
    }
}


const reducer = (state = initialState, {type, navbar, e, inputData}) => {
    switch(type) {
        case ("TogglerState"):
            if (navbar.toggler.state === false) {
                return {
                    ...state,
                    toggler: {
                        state: !navbar.toggler.state,
                        class: "btn btn-light rounded-pill shadow-sm px-3 py-2 on"
                    },
                    horizontal: {
                        state: !navbar.horizontal.state,
                        class:"container-fluid navbar-horizont-scroll content-active pt-0",
                        scrollPos: navbar.horizontal.scrollPos,
                        scrollLimit: 550,
                        show: navbar.horizontal.show,
                        id: navbar.horizontal.id
                    },
                    vertical: {
                        state: !navbar.vertical.state,
                        class:"vertical-nav on-nav bg-primary"
                    },
                    page: {
                        state: !navbar.page.state,
                        class:"page-content-active"
                    }
                }
            } else {
                return {
                    ...state,
                    toggler: {
                        state: !navbar.toggler.state,
                        class: "btn btn-light rounded-pill shadow-sm px-3 py-2 off"
                    },
                    horizontal: {
                        state: !navbar.horizontal.state,
                        class:"container-fluid navbar-horizont-scroll content-desactive pt-0",
                        scrollPos: navbar.horizontal.scrollPos,
                        scrollLimit: 550,
                        show: navbar.horizontal.show,
                        id: navbar.horizontal.id
                    },
                    vertical: {
                        state: !navbar.vertical.state,
                        class:"vertical-nav off-nav bg-primary"
                    },
                    page: {
                        state: !navbar.page.state,
                        class:"page-content"
                    }
                }
            }
        case ("handleClickHombre"):
            if (navbar.switch.unisex === true && navbar.switch.female === false) {
                return {
                    ...state,
                    switch: {
                        male: !navbar.switch.male,
                        unisex: !navbar.switch.unisex,
                        female: navbar.switch.female,
                        class: "px-2 switch-style d-flex justify-content-between align-items-center switch-boy"
                    }
                }
            } else if (navbar.switch.unisex === false && navbar.switch.female === true) {
                return {
                    ...state,
                    switch: {
                        male: !navbar.switch.male,
                        unisex: navbar.switch.unisex,
                        female: !navbar.switch.female,
                        class: "px-2 switch-style d-flex justify-content-between align-items-center switch-boy-in-girl"
                    }
                }
            }
            return state
        case ("handleClickNeutro"):
            if (navbar.switch.male === true && navbar.switch.female === false) {
                return {
                    ...state,
                    switch: {
                        male: !navbar.switch.male,
                        unisex: !navbar.switch.unisex,
                        female: navbar.switch.female,   
                        class: "px-2 switch-style d-flex justify-content-between align-items-center switch-neutro-boy"
                    }
                }
            } else if (navbar.switch.male === false && navbar.switch.female === true) {
                return {
                    ...state,
                    switch: {
                        male: navbar.switch.male,
                        unisex: !navbar.switch.unisex,       
                        female: !navbar.switch.female,
                        class: "px-2 switch-style d-flex justify-content-between align-items-center switch-neutro-girl"
                    }
                }
            }
            return state
        case ("handleClickMujer"):
            if (navbar.switch.male === false && navbar.switch.unisex === true) {
                return {
                    ...state,
                    switch: {
                        male: navbar.switch.male,
                        unisex: !navbar.switch.unisex,       
                        female: !navbar.switch.female,
                        class: "px-2 switch-style d-flex justify-content-between align-items-center switch-girl"
                    }
                }
            } else if (navbar.switch.male === true && navbar.switch.unisex === false) {
                return {
                    ...state,
                    switch: {
                        male: !navbar.switch.male,
                        unisex: navbar.switch.unisex,       
                        female: !navbar.switch.female,
                        class: "px-2 switch-style d-flex justify-content-between align-items-center switch-girl-in-boy"
                    }
                }
            }
            return state
        case ("changeToggler"):
            if (window.pageYOffset > navbar.horizontal.scrollLimit) {
                return {
                    ...state,
                    horizontal: {
                        state: true,
                        class: navbar.horizontal.class,
                        scrollLimit: navbar.horizontal.scrollLimit,
                        id: true
                    }
                }
            } else {
                return {
                    ...state,
                    horizontal: {
                        state: false,
                        class: navbar.horizontal.class,
                        scrollLimit: navbar.horizontal.scrollLimit,
                        id: false
                    }
                }
            }
            case ("handleOnChangeSearch"):
                return {
                    ...state,
                    search: {
                        ...state.search,
                        name: e
                    }
                }
            case ("handleOnSubmit"):
                return {
                    ...state,
                    search: {
                        ...state.search,
                        gender: inputData.gender,
                        price: inputData.price,
                        state: true
                    }
                }
        default:
            return state
    }
}


export default reducer