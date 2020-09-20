import React from 'react'
import './Home.scss'
export default function home() {
	return (
		<section className='home'>
			<div className='graphic'>
				<img src={require('../../assets/images/home-graphic.png')} alt='' />
			</div>
			<div className='content'>
				{/* <img src={require('../../assets/images/dsc-logo.svg')} alt='' /> */}
				<p className='title'>
					Developer Student Club (NSUT) powered by Google Developers
				</p>
				<p className='info'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam porro
					minus, magnam molestias aperiam corrupti voluptatibus voluptas
					dignissimos et minima officiis, corporis voluptatum veritatis at?
					Perspiciatis laudantium voluptatum quos a alias! Facilis sunt
					quibusdam architecto, culpa sint nisi dolores praesentium rem porro.
				</p>
			</div>
		</section>
	)
}
