/*import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavComponent from './Components/challenges/challenge11/NavComponent';

const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Page</h1>;
const Contact = () => <h1>Contact Page</h1>;

const App = () => {
  return (
    <div>
      <NavComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;*/


import React from 'react';
import Contador from './Components/challenges/Challenge13/contador';

const App = () => {
  return (
    <div>
      <h1>Mi Aplicación</h1>
      <Contador />
    </div>
  );
};

export default App;

