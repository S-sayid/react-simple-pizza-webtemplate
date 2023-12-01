import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

import right from '../assets/img/ab-bg.jpg'

import classes from '../assets/css/about.module.css'
function About(){
	return(
		<div>
			<Header />
				<div className=''>
					<div style={{backgroundImage: `url(${right})`}} className={classes.bgImg}>
					</div>
					<div className={classes.content}>
						<h1>About us</h1>
						<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
						</p>
					</div>
				</div>
			<Footer />
		</div>
		)
}
export default About