import './App.css'
import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import Greeting from './Pages/Greeting';

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route index element={<Home />} />
               <Route path="greet" element={<Greeting />} />
            </Route>
         </Routes>
      </BrowserRouter>
   );
}
export default App;