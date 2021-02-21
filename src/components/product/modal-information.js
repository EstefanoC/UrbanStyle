import React from 'react'


const ModalInformation = (props) => {
    return (
        <div className="modal fade" id="modal-review" tabIndex="-1" role="dialog" aria-labelledby="review" aria-hidden="true">
            <div className="modal-dialog modal-md" role="document">
                <div className="modal-content bg-secondary">
                    <div className="modal-header">
                        <h3 className="modal-title">Formulario de conformidad</h3>
                            <button type="button" className="close text-white" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                    </div>
                    <div className="modal-body">
                        <div className="well well-sm">
                            <form className="form-horizontal" method="post">
                                <fieldset>

                                    <div className="form-group">
                                        <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user"></i></span>
                                        <div className="col-md-8">
                                            <input id="name" name="Name" type="text" placeholder="Nombre" className="form-control" />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-envelope"></i></span>
                                        <div className="col-md-8">
                                            <input id="email" name="Email" type="text" placeholder="Dirección de Email" className="form-control" />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-comments"></i></span>
                                        <div className="col-md-8">
                                            <textarea className="form-control" id="message" name="Mensaje" placeholder="Envia tu opnion acerca de nosotros" rows="7"></textarea>
                                        </div>
                                    </div>

                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Omitir</button>
                                        <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => props.handleClick()}>Enviar</button>
                                    </div>

                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalInformation