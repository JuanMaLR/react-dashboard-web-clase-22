import React from 'react';
//import ReactDOM from 'react-dom';
//Cambio
import { createRoot } from 'react-dom/client';
import App from './components/App';
import './assets/css/app.css';
import './assets/css/styles.css'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';

/*ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);*/

const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<BrowserRouter><App /></BrowserRouter>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();