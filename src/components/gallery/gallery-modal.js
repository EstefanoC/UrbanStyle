import React from 'react'


let userImage

const GalleryModal= (props) => (
    <>
        {
            props.id.map((value, index) => {
                userImage = require(`../../media/gallery${value.toString()}.jpg`).default

                return (
                    <div className="modal fade" id={props.username[index].slice(1)} tabIndex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true" key={value}>
                        <div className="modal-dialog" role="document">
                            <figure className="modal-content modal-lg">
            
                                <div className="modal-header">
                                    <h4 className="modal-title"><strong>{props.username[index]}</strong> usando nuestra {props.garment[index]}</h4>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                
                                <div className="modal-body">
                                    <div className="container-fluid">
                                        <img className="img-fluid" src={userImage} alt={`${props.garment[index]} usada por ${props.username[index]}`} />
                                    </div>
                                </div>
                
                                <figcaption className="modal-footer">
                                    <p className="d-inline-block">Puede ir a la publicación original pulsando en el boton <strong>"view"</strong></p>
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">View</button>
                                </figcaption>
            
                            </figure>
                        </div>
                    </div>
                )
            })
        }
    </>
)

export default GalleryModal