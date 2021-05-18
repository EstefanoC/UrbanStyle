import React, { useState } from 'react'

// Component
import UserContent from './usercontent';

const User = ({ user }) => {
        const [ userReload, setUserReload ] = useState(null)

        const reloadUser = (val) => {
                setUserReload(val)
        }

        if (user || userReload) {
                return (
                        <div className="user-content bg-primary pb-5">

                                <h1 className="text-white text-center py-3 m-0 text-uppercase">Bienvenido "{user || userReload}"</h1>

                                <main className="user-main text-center text-white">
                                        <UserContent user={user} reload={(users) => reloadUser(users) }/>
                                </main>

                        </div>
                )
        } else {
                return (
                        <div className="user-content bg-primary pb-5">

                                <h1 className="text-white text-center py-3 m-0 text-uppercase">Registro</h1>

                                <main className="user-main text-center text-white">
                                        <UserContent reload={(users) => reloadUser(users) } />
                                </main>

                        </div>
                )
        }
}

export default User;