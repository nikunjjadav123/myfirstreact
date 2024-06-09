import React, { useState } from 'react';
import {BrowserRouter as Router,Route, Link, BrowserRouter, Routes} from "react-router-dom";
import SimpleNotes from './Components/SimpleNotes';
import Home from './Components/Home';
const App = () => { 
	return(
		<>
			<div className="App">
				<header className="App-header">
					<BrowserRouter>
						<Routes>
							<Route index element={<Home />} />
							<Route path="simple-notes" element={<SimpleNotes />} />
						</Routes>
					</BrowserRouter>
				</header>
			</div>
			
		</>
		
	)
} 

export default App 
