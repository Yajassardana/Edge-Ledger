import React from 'react'
import './Footer.scss'
export default function footer() {
	return (
		<div>
			<div id='myFooterSection'>
				<footer class='section bg-footer'>
					<div class='container' style={{ position: 'relative', zIndex: 5 }}>
						<div class='row'>
							<div class='col-lg-3'>
								<div class=''>
									<h6 class='footer-heading text-uppercase text-white'>
										Information
									</h6>
									<ul class='list-unstyled footer-link mt-4'>
										<li>
											<a href=''>Pages</a>
										</li>
										<li>
											<a href=''>Our Team</a>
										</li>
										<li>
											<a href=''>Pricing</a>
										</li>
									</ul>
								</div>
							</div>
							<div class='col-lg-3'>
								<div class=''>
									<h6 class='footer-heading text-uppercase text-white'>
										Resources
									</h6>
									<ul class='list-unstyled footer-link mt-4'>
										<li>
											<a href=''>Monitoring Grader </a>
										</li>
										<li>
											<a href=''>Video Tutorial</a>
										</li>
										<li>
											<a href=''>Term &amp; Service</a>
										</li>
									</ul>
								</div>
							</div>
							<div class='col-lg-2'>
								<div class=''>
									<h6 class='footer-heading text-uppercase text-white'>Help</h6>
									<ul class='list-unstyled footer-link mt-4'>
										<li>
											<a href=''>Terms of Services</a>
										</li>
										<li>
											<a href=''>Privacy Policy</a>
										</li>
									</ul>
								</div>
							</div>
							<div class='col-lg-4'>
								<div class=''>
									<h6 class='footer-heading text-uppercase text-white'>
										Contact Us
									</h6>
									<p class='contact-info mt-4'>
										Contact us if need help withanything
									</p>
									<p class='contact-info'>+01 123-456-7890</p>
									<div class='mt-5'>
										<ul class='list-inline'>
											<li class='list-inline-item'>
												<a href='#'>
													<i class='fab facebook footer-social-icon fa-facebook-f'></i>
												</a>
											</li>
											<li class='list-inline-item'>
												<a href='#'>
													<i class='fab twitter footer-social-icon fa-twitter'></i>
												</a>
											</li>
											<li class='list-inline-item'>
												<a href='#'>
													<i class='fab google footer-social-icon fa-google'></i>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class='text-center mt-5'></div>
					<svg viewbox='0 0 1440 328' width='100vw'>
						<defs>
							<clipPath
								id='wave'
								clipPathUnits='objectBoundingBox'
								transform='scale(0.00069444444, 0.00304878048)'
							>
								<path d='M504.452 27.7002C163.193 -42.9551 25.9595 38.071 0 87.4161V328H1440V27.7002C1270.34 57.14 845.711 98.3556 504.452 27.7002Z' />
							</clipPath>
						</defs>
					</svg>
				</footer>
			</div>
		</div>
	)
}
