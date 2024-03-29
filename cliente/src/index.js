
import { StrictMode } from 'react'
//import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {createRoot} from 'react-dom/client' // esto permite solo importar createRoot por destructuring y asi no importar todo el ReactDOM
import { BrowserRouter } from 'react-router-dom'
import store from './Redux/store.js'
import { Provider } from 'react-redux'

import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3001' //para trabajar en forma local
//axios.defaults.baseURL = 'https://proyectorickandmorty-production.up.railway.app' // para usar deplayado
//                        https://proyectorickandmorty-production.up.railway.app/





const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
   </StrictMode>
  </Provider>
)
    //(Strict es versión de JS de tipado fuerte y JS es débil(flexible)) nos permite tener un punto intermedio entre lo flexible y lo rígido   
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// )
