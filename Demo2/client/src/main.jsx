
// import { createRoot } from 'react-dom/client'

// import App from './App.jsx'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "./css/style.css";
// import "./css/footer.css";
// import "./css/home.css";
// import "./css/admin.css";

// import './css/cart.css';

// import store from './store.jsx';
// import {Provider} from "react-redux";
// createRoot(document.getElementById('root')).render(

//     <Provider store={store}>
//          <App />

//     </Provider>
   
 
// )



import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/style.css";
import "./css/footer.css";
import "./css/home.css";
import "./css/admin.css";
import './css/cart.css';

import store from './store.jsx';
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root')).render(

    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <Provider store={store}>
            <App />
        </Provider>
    </GoogleOAuthProvider>

)

