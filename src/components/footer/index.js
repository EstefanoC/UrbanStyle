import React from 'react'

// Components
import FooterNav from './footer-nav'
import FooterIcon from './footer-icon'

// Style
import './index.css'


const Footer = () => (
    <footer className="container-fluid footer-final bg-primary py-4">
        <div className="row d-flex flex-column flex-md-row align-items-center">
            <FooterNav />
            <FooterIcon />
        </div>
        <small className="text-muted text-center d-block mt-4">Copyright &copy; reservados por Urban Style 2021</small>
    </footer>
)

export default Footer