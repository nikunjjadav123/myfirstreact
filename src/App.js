import './App.css'
import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import Greeting from './Pages/Greeting';
import PageNotAvailable from './Pages/PageNotAvailable'
import Spinner from 'react-bootstrap/Spinner';

function App() {
   return (
      <>
        
     
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