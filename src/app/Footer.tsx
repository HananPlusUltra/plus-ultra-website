import React from 'react';

function Footer() {
	return (
		<footer className='footer bg-[hsl(205,67%,5%)]'>
			<div className='container'>
				<div className='row'>
					<div className='footer-col'>
						<h4 className='before:absolute before:left-0 before:-bottom-2.5 before:bg-[#00abf0] before:h-0.5 w-12'>
							Kontakt info
						</h4>
						<ul>
							<li>
								email:{' '}
								<a href='mailto:info@plusultra.ba'>
									info@plusultra.ba
								</a>
							</li>
						</ul>
					</div>

					<div className='footer-col '>
						<h4 className='before:content-[""] before:absolute before:left-0 before:-bottom-2.5 before:bg-[#00abf0] before:h-0.5 w-12 '>
							Pratite nas
						</h4>
						<div className='social-links'>
							<a
								href='https://www.facebook.com/PlusUltraYouth'
								aria-label='Facebook'
							>
								<i className='bx bxl-facebook'></i>
							</a>
							<a
								href='https://www.instagram.com/plusultrayouth'
								aria-label='Instagram'
							>
								<i className='bx bxl-instagram'></i>
							</a>
							<a
								href='https://www.linkedin.com/company/plusultrayouth'
								aria-label='Linkedin'
							>
								<i className='bx bxl-linkedin'></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
