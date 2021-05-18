import React from 'react'
import reactDom from 'react-dom';

// Style
import './index.css'


function App({ message, visibility, bg, portalClose }) {
    if (!visibility) {
        return null
    }

    const Alert = () => (
        <div className="alert d-flex align-items-center px-5">
            <div className="alert-content text-center py-2 px-5">
                <p className="mb-0 py-2 px-3" style={{background: bg}}>{message}</p>
            </div>
        </div>
    )

    setTimeout(() => {
        return portalClose()
    }, 3000);

    return (
        reactDom.createPortal(<Alert/>, document.getElementById('alert'))
    );
}

export default App;