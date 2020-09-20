import React from 'react'
import './Wwd.scss'
export default function Wwd() {
	return (
		<section className='wwd'>
			<p className='title'>What we do</p>
			<div className='events'>
				<div className='events-item'>
					{' '}
					<img src='https://img.icons8.com/ios-filled/100/000000/hacker.png' />
					<p className='heading' style={{ color: '#01A051' }}>
						<span
							style={{
								backgroundColor: 'rgba(1,160,81,0.1)',
								padding: '0.3rem',
								borderRadius: '5px'
							}}
						>
							{' '}
							Hackathons
						</span>{' '}
					</p>
					<p className='info'>
						The idea of conducting hackathons is to make students code
						collaboratively from scratch to end with a working prototype.
					</p>
				</div>
				<div className='events-item'>
					{' '}
					<img src='https://img.icons8.com/ios-filled/100/000000/hacker.png' />
					<p className='heading' style={{ color: '#2885FC' }}>
						<span
							style={{
								backgroundColor: 'rgba(40,133,252,0.1)',
								padding: '0.3rem',
								borderRadius: '5px'
							}}
						>
							{' '}
							SIGs
						</span>
					</p>
					<p className='info'>
						The idea of conducting hackathons is to make students code
						collaboratively from scratch to end with a working prototype.
					</p>
				</div>
				<div className='events-item'>
					{' '}
					<img src='https://img.icons8.com/ios-filled/100/000000/hacker.png' />
					<p className='heading' style={{ color: '#FFBA01' }}>
						<span
							style={{
								backgroundColor: 'rgba(255,186,1,0.1)',
								padding: '0.3rem',
								borderRadius: '5px'
							}}
						>
							{' '}
							Meetups
						</span>
					</p>
					<p className='info'>
						The idea of conducting hackathons is to make students code
						collaboratively from scratch to end with a working prototype.
					</p>
				</div>
			</div>
		</section>
	)
}
