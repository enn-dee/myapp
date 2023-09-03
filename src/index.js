import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// brad compo
import Header from './BradComponent/Header';
// import App from './App';

// wstech compo
import Person from './WsComponent/Person';
import DarkMode from './WsComponent/DarkModeToggle';
import Form from './WsComponent/Form';
import ComponentHandler from './WsComponent/ComponentHandler';
// project-1
import App from './Project-1/App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>

      {/* <Header />
      <DarkMode />
      <App />
      <Person />
      <Form />
      <ComponentHandler /> */}

      {/* project-1 */}
      <App />
    </>
  </React.StrictMode>
);


reportWebVitals();



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals