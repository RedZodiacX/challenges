import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import FirstApp from './Components/challenges/challenge1/FirstApp';
import FirstApp1 from './Components/challenges/challenge2/FirstApp1';
import ComponentApp from './Components/challenges/challenge3/ComponentApp';
import GifGrid from './Components/challenges/challenge4/GifGrid';
import FirstApp3 from './Components/challenges/challenge5/FirstApp';
import { Father } from './Components/challenges/challenge6/Father';
import { TodoApp } from './Components/challenges/challenge7_8_9/TodoApp';
import TodoAdd1 from './Components/challenges/challenge10/TodoAdd1';
import NavComponent from './Components/challenges/challenge11/NavComponent';
import { useAuth } from './Components/challenges/Challenge12/useAuth';
import Contador from './Components/challenges/Challenge13/contador';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <FirstApp /> */}
    {/* <FirstApp1 /> */}
    {/* <ComponentApp /> */}
    {/* <GifGrid /> */}
    {/* <FirstApp3 /> */}
    {/* <Father /> */}
    {/* <TodoApp /> */}
    <TodoAdd1 />
  </React.StrictMode>
);

/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
*/

/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from '../src/Components/challenges/Challenge13/store';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
); */


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

