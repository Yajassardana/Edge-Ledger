import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Wwd from './components/Wwd/Wwd'
function App() {
	return (
		<div className='App'>
			<Navbar />
			<Home />
			<About />
			<Wwd />
		</div>
	)
}

export default App
