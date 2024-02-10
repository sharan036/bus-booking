import React from 'react';

import './App.css';
import Connect from './components/Wallet/Connect';
import Home from './components/Home';
import Taxi from './Taxi';


const App = () => {
	
	

	return (
		<div className='header'>
		{/* <Home/> */}
		<Taxi/>
		<Connect/>
		</div>
		
	);
};

export default App;
