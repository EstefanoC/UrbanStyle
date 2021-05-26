import React from 'react';
import ReactDOM from 'react-dom';

// PWA
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// Component
import Index from './components/';
import './normalize.css'
import './index.css'


ReactDOM.render( <Index />, document.getElementById('app'));

serviceWorkerRegistration.register();