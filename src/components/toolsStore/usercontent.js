import React, { useState, useEffect } from 'react';

// Firebase
import { auth } from '../../data/firebase';
import firebase from 'firebase/app';
import "firebase/auth";

// Component
import Loading from '../helpers/loading'
import Alert from '../helpers/alert'


const User = ({ user, reload }) => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ visibilityAdd, setVisibilityAdd ] = useState(false)
    const [ visibilityErr, setVisibilityErr ] = useState(false)
    const [ message, setMessage ] = useState('')
    const [ error, setError ] = useState('')
    const [ load, setLoad ] = useState(false)
    const [ users, setUsers ] = useState(null)


    const Submit = async (e, target) => {
        e.preventDefault()
        let userNow = null

        switch (target) {
            case 'register':
                try {
                    setLoad(false)
                    await auth.createUserWithEmailAndPassword(email, password)
                    userNow = await firebase.auth().currentUser.email
                    reload(userNow)
                    setUsers(userNow)
                    setLoad(true)
                    setMessage('Se ha creado el usuario sin problemas')
                    setVisibilityAdd(true)
                }
                catch(error) {
                    setLoad(true)
                    setError(error.message)
                    setVisibilityErr(true)
                }
                break;
            case 'login':
                try {
                    setLoad(false)
                    await auth.signInWithEmailAndPassword(email, password)
                    userNow = await firebase.auth().currentUser.email
                    reload(userNow)
                    setUsers(userNow)
                    setLoad(true)
                    setMessage('Ha iniciado sesión')
                    setVisibilityAdd(true)
                }
                catch(error) {
                    setLoad(true)
                    setError(error.message)
                    setVisibilityErr(true)
                }
                break;
            case 'logout':
                try {
                    setLoad(false)
                    await auth.signOut()
                    reload(null)
                    setUsers(null)
                    setLoad(true)
                    setMessage('Ha cerrado sesión')
                    setVisibilityAdd(true)
                }
                catch(error) {
                    setLoad(true)
                    setError(error.message)
                    setVisibilityErr(true)
                }
                break;
            default:
                break;
        }
    }


    useEffect(() => {
        setLoad(true)
    }, [])


    if (!load) {
        return <Loading />
    } else {
        if (user || users) {
            return (
                <div className="container">
                    <Alert visibility={visibilityErr} bg="rgba(255, 0, 0, 0.800)" message={error} portalClose={() => setVisibilityErr(false)} />
                    <Alert visibility={visibilityAdd} bg="rgba(0, 128, 0, 0.800)" message={message} portalClose={() => setVisibilityAdd(false)} />
                    <div className="bg-primary">

                        <h2>{user || users}</h2>

                        <div className="container mt-5">
                            <div className="row">
                                <div className="col-12">
                                    <button type="button" className="btn btn-secondary btn-block" data-dismiss="modal" onClick={ (e) => Submit(e, 'logout') }>cerrar sesión</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )
        } else {
            return (
                <div className="container">
                    <Alert visibility={visibilityErr} bg="rgba(255, 0, 0, 0.800)" message={error} portalClose={() => setVisibilityErr(false)} />
                    <Alert visibility={visibilityAdd} bg="rgba(0, 128, 0, 0.800)" message={message} portalClose={() => setVisibilityAdd(false)} />
                    <div className="bg-primary">

                        <form className="form-horizontal" method="post">
                            <fieldset className="text-left">

                                <div className="form-group">
                                    <label htmlFor="email">
                                        <span className="col-md-1 col-md-offset-2"><i className="fa fa-envelope"></i></span>
                                    </label>
                                    <div className="col">
                                        <input id="email" name="Email" type="text" placeholder="Dirección de Email" className="form-control" onChange={ (e) => setEmail(e.target.value)}/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password">
                                        <span className="col-md-1 col-md-offset-2"><i className="fa fa-key" aria-hidden="true"></i></span>
                                    </label>
                                    <div className="col">
                                        <input type="password" name="Password" id="password" placeholder="Contraseña" className="form-control" autoComplete="on" onChange={ (e) => setPassword(e.target.value)}/>
                                    </div>
                                </div>

                                <div className="container mt-5">
                                    <div className="row">
                                        <div className="col-6">
                                            <button type="button" className="btn btn-primary btn-block" data-dismiss="modal" onClick={ (e) => Submit(e, 'register') }>Registrarse</button>
                                        </div>
                                        <div className="col-6">
                                            <button type="button" className="btn btn-secondary btn-block" data-dismiss="modal" onClick={ (e) => Submit(e, 'login') }>iniciar sesión</button>
                                        </div>
                                    </div>
                                </div>

                            </fieldset>
                        </form>
                    </div>
                </div>
            )
        }
    }
}

export default User;
