import React, { useState, useEffect } from 'react';

// Firebase
import { auth, google, facebook, twitter, github } from '../../data/firebase';
import firebase from 'firebase/app';
import "firebase/auth";
import Loading from '../helpers/loading'
import Alert from '../helpers/alert'


const User = ({ user, reload }) => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ number, setNumber ] = useState('')
    const [ target, setTarget ] = useState(null)
    const [ visibilityAdd, setVisibilityAdd ] = useState(false)
    const [ visibilityErr, setVisibilityErr ] = useState(false)
    const [ message, setMessage ] = useState('')
    const [ error, setError ] = useState('')
    const [ load, setLoad ] = useState(false)
    const [ users, setUsers ] = useState(null)

    const setupRecaptcha = async () => {
        window.recaptchaVerifier = await new firebase.auth.RecaptchaVerifier('captcha', {
            size: 'invisible',
            callback: (response) => {
                Submit(response, "registerPhone")
                }
        });
    }

    const Submit = async (e, tar) => {
        e.preventDefault()
        let userNow = null

        switch (tar) {
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
            case 'phone':
                try {
                    setupRecaptcha()
                    var appVerifier = new firebase.auth.RecaptchaVerifier('captcha');
                    firebase.auth().settings.appVerificationDisabledForTesting = false  ;
                    firebase.auth().signInWithPhoneNumber(number, appVerifier)
                        .then((confirmationResult) => {
                            window.confirmationResult = confirmationResult;
                            const code = window.prompt("Ingresa el codigo recibido en SMS")
                            confirmationResult.confirm(code).then((result) => {
                                const user = result.user;
                                reload(user.phoneNumber)
                                setUsers(user.phoneNumber)
                                setMessage('Se ha creado el usuario sin problemas')
                                setVisibilityAdd(true)
                            }).catch((error) => {
                                let capt = document.getElementById("captcha")
                                capt.textContent = ""
                                setError("Fallo al intentar verificar el codigo")
                                setVisibilityErr(true)
                            });
                          // ...
                        }).catch((error) => {
                            let capt = document.getElementById("captcha")
                            capt.textContent = ""
                            setError("Fallo al intentar autenticar, el SMS no se ha enviado")
                            setVisibilityErr(true)
                        });
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
            case 'google':
                try {
                    setLoad(false)
                    await auth.signInWithPopup(google)
                    .then(result => {
                        setLoad(true)
                        reload(result.user.displayName)
                        setUsers(result.user.email)
                        setMessage('Te has registrado con Google')
                        setVisibilityAdd(true)
                    })
                    .catch(err => {
                        setLoad(true)
                        setError(err.message)
                        setVisibilityErr(true)
                    })
                }
                catch(error) {
                    setLoad(true)
                    setError(error.message)
                    setVisibilityErr(true)
                }
                break;
            case 'facebook':
                try {
                    setLoad(false)
                    await auth.signInWithPopup(facebook)
                    .then(result => {
                        setLoad(true)
                        reload(result.user.displayName)
                        setUsers(result.user.email)
                        setMessage('Te has registrado con Facebook')
                        setVisibilityAdd(true)
                    })
                    .catch(err => {
                        setLoad(true)
                        setError(err.message)
                        setVisibilityErr(true)
                    })
                }
                catch(error) {
                    setLoad(true)
                    setError(error.message)
                    setVisibilityErr(true)
                }
                break;
            case 'twitter':
                try {
                    setLoad(false)
                    await auth.signInWithPopup(twitter)
                    .then(result => {
                        setLoad(true)
                        reload(result.user.displayName)
                        setUsers(result.additionalUserInfo.username)
                        setMessage('Te has registrado con Twitter')
                        setVisibilityAdd(true)
                    })
                    .catch(err => {
                        setLoad(true)
                        setError(err.message)
                        setVisibilityErr(true)
                    })
                }
                catch(error) {
                    setLoad(true)
                    setError(error.message)
                    setVisibilityErr(true)
                }
                break;
            case 'github':
                try {
                    setLoad(false)
                    await auth.signInWithPopup(github)
                    .then(result => {
                        setLoad(true)
                        reload(result.user.displayName)
                        setUsers(result.user.email)
                        setMessage('Te has registrado con Github')
                        setVisibilityAdd(true)
                    })
                    .catch(err => {
                        setLoad(true)
                        setError(err.message)
                        setVisibilityErr(true)
                    })
                }
                catch(error) {
                    setLoad(true)
                    setError(error.message)
                    setVisibilityErr(true)
                }
                break;
            case 'phoneSelect':
                (target) ? setTarget(null) : setTarget("target")
                setNumber("")
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
                                    <button type="button" className="btn btn-secondary btn-block" onClick={ (e) => Submit(e, 'logout') }>cerrar sesión</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )
        } else {
            if (!target) {
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
                                                <button type="button" className="btn btn-primary btn-block" onClick={ (e) => Submit(e, 'register') }>Registrarse</button>
                                            </div>
                                            <div className="col-6">
                                                <button type="button" className="btn btn-secondary btn-block" onClick={ (e) => Submit(e, 'login') }>iniciar sesión</button>
                                            </div>
                                        </div>
                                    </div>

                                </fieldset>
                            </form>

                            <div className="log-icon text-white mt-3">
                                <i className="fab fa-google" aria-hidden="true" title="google" onClick={ (e) => Submit(e, 'google') }></i>
                                <i className="fab fa-facebook-f" aria-hidden="true" title="facebook" onClick={ (e) => Submit(e, 'facebook') }></i>
                                <i className="fab fa-twitter" aria-hidden="true" title="twitter" onClick={ (e) => Submit(e, 'twitter') }></i>
                                <i className="fab fa-github" aria-hidden="true" title="github" onClick={ (e) => Submit(e, 'github') }></i>
                                <i className="fa fa-phone" aria-hidden="true"  title="Telefono" onClick={ (e) => Submit(e, 'phoneSelect') }></i>
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

                            <form className="form-horizontal" method="post" name="phone">
                                <fieldset className="text-left">

                                    <div className="form-group">
                                        <label htmlFor="number">
                                            <span className="col-md-1 col-md-offset-2"><i className="fa fa-phone"></i></span>
                                        </label>
                                        <div className="col">
                                            <input id="number" name="Number" type="phone" placeholder="Número de telefono" className="form-control" onChange={ (e) => setNumber(e.target.value)}/>
                                        </div>
                                    </div>

                                        <div id="captcha" className="d-flex justify-content-center"></div>

                                    <div className="container mt-5">
                                        <div className="row">
                                            <div className="col-12">
                                                <button type="button" className="btn btn-primary btn-block" onClick={ (e) => Submit(e, 'phone') }>Enviar codigo</button>
                                            </div>
                                        </div>
                                    </div>

                                </fieldset>
                            </form>

                            <div className="log-icon text-white mt-3">
                                <i className="fab fa-google" aria-hidden="true" title="google" onClick={ (e) => Submit(e, 'google') }></i>
                                <i className="fab fa-facebook-f" aria-hidden="true" title="facebook" onClick={ (e) => Submit(e, 'facebook') }></i>
                                <i className="fab fa-twitter" aria-hidden="true" title="twitter" onClick={ (e) => Submit(e, 'twitter') }></i>
                                <i className="fab fa-github" aria-hidden="true" title="github" onClick={ (e) => Submit(e, 'github') }></i>
                                <i className={`fa fa-phone ${target}`} aria-hidden="true" title="Telefono" onClick={ (e) => Submit(e, 'phoneSelect') }></i>
                            </div>

                        </div>
                    </div>
                )
            }
        }
    }
}

export default User;
