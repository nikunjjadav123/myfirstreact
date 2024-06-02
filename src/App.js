import './App.css'
import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import Greeting from './Pages/Greeting';
import PageNotAvailable from './Pages/PageNotAvailable'
import Spinner from 'react-bootstrap/Spinner';

const App = ({ unicode }) => {
   return (
       <h1>
           This is a Right arrow
           {String.fromCodePoint(parseInt(unicode, 16))}
       </h1>
   );
};
export default App;