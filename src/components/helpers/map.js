import React from 'react'
import MapIcon from '../../media/icons-map.webp'

export const Map = () => {
    return (
        <section className="container map my-5">
            <div className="row">

                <div className="col-12 col-md-6 h-100 w-100">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5187.172002326249!2d-102.8738736714653!3d23.174415288046184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sve!4v1621557600860!5m2!1ses-419!2sve" style={{border: "0", borderRadius: '2rem', height: "100%", width: "100%"}} loading="lazy" title="google map"></iframe>
                </div>

                <div className="col-12 col-md-6 text-map">
                    <h3 className="my-5">Visita nuestra tienda</h3>
                    <p className="mb-4 d-inline-block">
                        Estamos ubicados en:
                        <span className="d-block mt-2">Av B. Juárez 303, Centro, 99150 Fresnillo, Zac., México</span>
                    </p>
                    <img src={MapIcon} alt="Icono de mapa" className="img-fluid w-50 float-right d-inline-block" />
                    <p className="m-0">lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, numquam odio. Eveniet voluptatem iste dolorem esse nihil deserunt inventore totam explicabo, architecto possimus nemo recusandae officia voluptatibus, obcaecati maiores quidem?</p>
                </div>
            </div>
        </section>
    )
}

export default Map