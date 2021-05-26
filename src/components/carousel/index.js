import React from 'react'
import CarouselItems from './carousel-item'
import './index.css'


const Carousel = () => (
    <section className="carousel-bg bg-primary py-2 mb-5">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div id="carousel" className="carousel slide my-5" data-ride="carousel">
                        <ol className="carousel-indicators d-flex justify-content-between m-0">
                            <li data-target="#carousel" data-slide-to="0" className="fas fa-square pt-1 active"></li>
                            <li data-target="#carousel" data-slide-to="1" className="fas fa-square pt-1"></li>
                            <li data-target="#carousel" data-slide-to="2" className="fas fa-square pt-1"></li>
                        </ol>
                        <CarouselItems />
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default Carousel