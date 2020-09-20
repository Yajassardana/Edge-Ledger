import React from 'react'
import './About.scss'
export default function About() {
	return (
		<section className='about'>
			<div className='content'>
				{/* <img src={require('../../assets/images/dsc-logo.svg')} alt='' /> */}
				<p className='title'>Our Aim</p>
				<p className='info'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam porro
					minus, magnam molestias aperiam corrupti voluptatibus voluptas
					dignissimos et minima officiis, corporis voluptatum veritatis at?
					Perspiciatis laudantium voluptatum quos a alias! Facilis sunt
					quibusdam architecto, culpa sint nisi dolores praesentium rem porro.
				</p>
			</div>
			<div className='graphic'>
				<img src={require('../../assets/images/home-graphic.png')} alt='' />
			</div>
		</section>
	)
}
