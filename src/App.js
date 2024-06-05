import React, { useState } from 'react';
import NetflixSeries,{Header,Footer} from './Pages/NetflixSeries';

const App = () => { 
	return(
		<>
			<div>
				<Header />
				<NetflixSeries />
				<Footer />
			</div>
		</>
		
	)
} 

export default App 
