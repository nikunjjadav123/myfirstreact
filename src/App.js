import React, { useState } from 'react'

const App = () => { 
const [count, setCount] = useState(0); 
	
const increaseCount = () => { 
	setCount(count + 1); 
} 
const decreaseCount = () => { 
	setCount(count - 1); 
} 
	
return ( 
	<div> 
	<h1>Countdown Information</h1> 
	
<p>Value is {count}</p> 

	
	<button onClick={increaseCount}> 
		Increment 
	</button> 

	<button onClick={decreaseCount}> 
		Decrement 
	</button> 
	</div> 
) 
} 

export default App 
