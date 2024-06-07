import React, { useState } from 'react';
import NetflixSeries,{Header,Footer} from './Pages/NetflixSeries';
import LoadUserData from './Pages/LoadUserData';
import 'bootstrap/dist/css/bootstrap.css';


const App = () => { 
	return(
		<>
			<div>
				<LoadUserData />
			</div>
		</>
		
	)
} 

export default App 
