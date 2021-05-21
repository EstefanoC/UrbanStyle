import React from 'react'
import './index.css'

const redesSociales = {
    'Facebook': "https://www.facebook.com",
    "Instagram": "https://www.instagram.com",
    "Youtube": "https://www.youtube.com"
}

const SocialMedia = () => {
    return (
        <ul className="list-unstyled socialMedia d-flex justify-content-center align-items-center mb-0">
            <li className="mx2"><a href={redesSociales.Facebook}><span className="sr-only">Facebook</span><i className="fab fa-facebook" title="Facebook"></i></a></li>
            <li className="mx2"><a href={redesSociales.Instagram}><span className="sr-only">Instagram</span><i className="fab fa-instagram" title="Instagram"></i></a></li>
            <li className="mx2"><a href={redesSociales.Youtube}><span className="sr-only">Youtube</span><i className="fab fa-youtube" title="Youtube"></i></a></li>
        </ul>
    )
}

export default SocialMedia