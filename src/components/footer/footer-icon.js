import React from 'react'

// React-reouter
import { Link } from 'react-router-dom'

// helpers
import SocialMedia from '../helpers/socialMedia'

const FooterIcon = () => (
    <div className="col-4 text-center mt-4 mt-md-0">
        <Link to={'/'} className="footer-title mb-0" >
            <h2>Urban Style</h2>
        </Link>
        <em className="d-block mb-3">Comodidad en la calle</em>
        <SocialMedia />
    </div>
)

export default FooterIcon