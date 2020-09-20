import React, { Fragment } from 'react'
import './Navbar.scss'
export default function navbar() {
	return (
		<nav className='navbar'>
			<div className='logo'>
				<img src={require('../../assets/images/dsc-logo.svg')} alt='' />
				<h1>DSC NSUT</h1>
			</div>

			<ul>
				<li className='nav-item'>
					<a href='#home'>Home</a>
				</li>
				<li className='nav-item'>
					<a href='#about'>About</a>
				</li>
				<li className='nav-item'>
					<a href='#contact'>Contact</a>
				</li>
			</ul>
		</nav>
	)
}
