import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; //App function jo App.js vali file k andar hai usko import kia hai 
import reportWebVitals from './reportWebVitals';

 


//fetching root element from index.html and creating reactdom root, naya root element create kia hai react k lie 
//in simple words , ek element jiski id name root hai usko html sy fetch kardia js file m or fir usko convert kia as a react-element using ReactDOM method
const reactRootElement = ReactDOM.createRoot(document.getElementById('root')); 



//app vale component ko daldia react element k andar render function use karke , y app vala component App.js vali file hai
reactRootElement.render( <App />); //phela component react ka app component hota hai

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
