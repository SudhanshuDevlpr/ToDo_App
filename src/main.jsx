import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
//import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'//this is bootstrap css we include this using the left syntax and before import need to to install
//bootstrap using command  npm i bootstrap@5.3.3 when the installation process then inside packege.json has dependecies of bootstrap we can see
//we use bootstrap css after index.css so boostrap override inex,css

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
