import React from 'react';

function Footer() {
	return (
		<footer className='footer bg-[hsl(205,67%,5%)]'>
			<div className='container     '>
				<div className='row'>
					<div className='footer-col'>
						<h4>Kontakt info</h4>
						<ul>
							<li>
								email:{' '}
								<a href='mailto:info@plusultra.ba'>
									info@plusultra.ba
								</a>
							</li>
							<li>
								<a href='#'>our services</a>
							</li>
							<li>
								<a href='#'>privacy policy</a>
							</li>
							<li>
								<a href='#'>affiliate program</a>
							</li>
						</ul>
					</div>
					<div className='footer-col'>
						<h4>get help</h4>
						<ul>
							<li>
								<a href='#'>FAQ</a>
							</li>
							<li>
								<a href='#'>shipping</a>
							</li>
							<li>
								<a href='#'>returns</a>
							</li>
							<li>
								<a href='#'>order status</a>
							</li>
							<li>
								<a href='#'>payment options</a>
							</li>
						</ul>
					</div>
					<div className='footer-col'>
						<h4>online shop</h4>
						<ul>
							<li>
								<a href='#'>watch</a>
							</li>
							<li>
								<a href='#'>bag</a>
							</li>
							<li>
								<a href='#'>shoes</a>
							</li>
							<li>
								<a href='#'>dress</a>
							</li>
						</ul>
					</div>
					<div className='footer-col '>
						<h4>follow us</h4>
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
