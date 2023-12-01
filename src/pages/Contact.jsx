import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

import conImg from '../assets/img/con-right.jpg'

import classes from '../assets/css/conta.module.css'
function About(){
	return(
		<div>
			<Header />
				<div className='d-flex'>
					<div style={{backgroundImage: `url(${conImg})`}} className={classes.contRight}>
						
					</div>
					<div className={classes.formRight}>
						<form>
							<input placeholder="Your name" type="text" name='name' />
							<input placeholder="Your email" type="email" name='name' />
							<input placeholder="Your addre" type="add" name='name' />
							<textarea row='5'placeholder="Your message"></textarea>
							<button>Sumit</button>
						</form>
					</div>
				</div>
			<Footer />
		</div>
		)
}
export default About