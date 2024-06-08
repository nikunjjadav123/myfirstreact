import React, { useState } from 'react';
import NetflixSeries,{Header,Footer} from './Pages/NetflixSeries';
import LoadUserData from './Pages/LoadUserData';
import 'bootstrap/dist/css/bootstrap.css';
import {Card} from 'react-bootstrap';


const App = () => { 
	return(
		<>
			<div>
				<Card>
					<Card.Body>USER DATA</Card.Body>
				</Card>
				<LoadUserData />
			</div>
		</>
		
	)
} 

export default App 
