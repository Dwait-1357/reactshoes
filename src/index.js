import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-awesome-slider/dist/styles.css';
import { BioProvider } from './ContextApi/productcontext';
import { FilterContextProvider } from './ContextApi/FilterContext';
import { CartProvider } from './ContextApi/cart_context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BioProvider>
    <FilterContextProvider>
     <React.StrictMode>
      <CartProvider>
       <App/> 
       </CartProvider>    
    </React.StrictMode>
    </FilterContextProvider>
  </BioProvider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
