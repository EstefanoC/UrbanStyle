import React from 'react'
import CarouselData from './carousel'


const CarouselItems = () => {
    let id = 0

    return (
        <div className="carousel-inner pb-1" role="listbox">

            <div className="carousel-header bg-light text-center py-2">
                <h2 className="text-uppercase mb-0">Lo más nuevo de nosotros</h2>
            </div>

            {Object.keys(CarouselData).map((value) => (
                <div className={`carousel-item text-light pb-3 ${(CarouselData[value].id) === 1 ? 'active' : '' }`} key={CarouselData[value].id}>
                    <div className="d-flex align-items-start">
                        <div className={`${CarouselData[value].img} w-100 d-inline-block`}></div>
                        <div className="w-50 d-inline-block">
                            <h3 className="text-center text-capitalize mb-3">{CarouselData[value].title}</h3>
                            <ul className="carousel-list d-inline-block list-unstyled pl-3 mt-3">
                                {
                                    Object.keys(CarouselData[value].list).map((value1, index) => {
                                        id++
                                        return <li key={`${id}${index}`}><p><span className="fas fa-star mr-3"></span>{CarouselData[value].list[value1]}</p></li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CarouselItems