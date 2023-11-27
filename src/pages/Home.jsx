import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

import banner from '../assets/img/banner.jpg'

import classes from '../assets/css/Home.module.css'
function Home(){
	return(
		<div>
			<Header />
				<div className={classes.banner} style={{backgroundImage: `url(${banner})`}}>
					<div className={classes.content}>
						<div>
							<h1>You are wellcome</h1>
							<h3>Let's find a best product for you</h3>
							<a href="#">See Menu</a>
						</div>
					</div>
				</div>
			<Footer />
		</div>
		)
}
export default Home