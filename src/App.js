import React, { useState } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import NetflixSeries,{Header,Footer} from './Pages/NetflixSeries';
import LoadUserData from './Pages/LoadUserData';
import 'bootstrap/dist/css/bootstrap.css';
import {Card} from 'react-bootstrap';


=======
import {BrowserRouter as Router,Route, Link, BrowserRouter, Routes} from "react-router-dom";
import SimpleNotes from './Components/SimpleNotes';
import UserData from './Components/UserData';
import Layout from './Components/Layout';
import "./Components/css/style.css";
>>>>>>> 6401b478b91c82a82dc30dd225f40146551124d8
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
<<<<<<< HEAD
=======
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
			
>>>>>>> c6587a6 (added)
=======
			
>>>>>>> 6401b478b91c82a82dc30dd225f40146551124d8
		</>
		
	)
} 

export default App 
