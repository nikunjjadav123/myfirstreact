import React, { useState } from 'react';
import {BrowserRouter as Router,Route, Link, BrowserRouter, Routes} from "react-router-dom";
import SimpleNotes from './Components/SimpleNotes';
import UserData from './Components/UserData';
import Layout from './Components/Layout';
import "./Components/css/style.css";
const App = () => { 
	return(
		<>
			<div className="App">
				<header className="App-header">
					<BrowserRouter>
						<Routes>
							<Route path="/" element={<Layout />}>
								<Route index element={<UserData />} />
								<Route path="simple-notes" element={<SimpleNotes />} />
							</Route>
						</Routes>
					</BrowserRouter>
				</header>
			</div>
			
		</>
		
	)
} 

export default App 
