import React from 'react'

// LazyLoad
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

// Components
import GalleryModal from './gallery-modal'


let userImage
let heightLoad = []


const GalleryItems = (props) => (
    <div className="card-columns"> 
        {
            props.id.map((value, index) => {
                userImage = require(`../../media/gallery${value.toString()}.jpg`).default
                heightLoad.push("400px")

                return (                
                    <article className="card-container mb-4 mb-sm-0" key={value} data-toggle="modal" data-target={`#${props.username[index].slice(1)}`} >
                        <div className="card p-2">
                        <LazyLoadImage
                            className="img-fluid"
                            alt={`${props.garment[index]} usada por ${props.username[index]}`}
                            src={userImage}
                            effect="blur"
                            height={heightLoad[index]}
                            afterLoad={() => heightLoad[index] = "auto"}
                        />
                        </div>
                    </article>
                )
            })
        }
        <GalleryModal id={props.id} username={props.username} garment={props.garment} />
    </div>
)


export default GalleryItems