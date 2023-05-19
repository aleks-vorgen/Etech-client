import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./index.css"
import { BrowserRouter } from 'react-router-dom'
/*import { Provider } from 'react-redux';*/
/*import store, { persistor } from './redux/store/store';
import { PersistGate } from 'redux-persist/integration/react'; */


ReactDOM.createRoot(document.getElementById('root')).render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
);
