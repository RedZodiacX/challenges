import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FirstApp from './Components/challenges/challenge1/FirstApp';
import FirstApp1 from './Components/challenges/challenge2/FirstApp1';
import ComponentApp from './Components/challenges/challenge3/ComponentApp';
import GifGrid from './Components/challenges/challenge4/GifGrid';
import FirstApp3 from './Components/challenges/challenge5/FirstApp';
import { Father } from './Components/challenges/challenge6/useFetch';
import { TodoApp } from './Components/challenges/challenge7/TodoApp';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <FirstApp />
    <FirstApp1 />
    <ComponentApp />
    <GifGrid />
    <FirstApp3 />
    <Father /> */}
    <TodoApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
