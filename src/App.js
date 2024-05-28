import './App.css'
import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import Greeting from './Pages/Greeting';
import PageNotAvailable from './Pages/PageNotAvailable'

function App() {
   return (
      <>
         <h1 className="text-3xl font-bold underline grid-cols-1	">
            Hello world!
         </h1>
     
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route index element={<Home />} />
               <Route path="greet" element={<Greeting />} />
               <Route path="*" element={<PageNotAvailable />} />
            </Route>
         </Routes>
      </BrowserRouter>
      </>
      
   );
}
export default App;