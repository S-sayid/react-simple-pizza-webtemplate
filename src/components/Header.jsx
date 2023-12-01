import React from 'react'
import logo from '../assets/img/logo.png';
import {Link} from 'react-router-dom'
import classes from '../assets/css/header.module.css'
import {useState} from 'react'

import MenuIcon from '@mui/icons-material/Menu';


function Home(){
	let [pri, setPri] = useState(false)
	function meChange(){
		setPri(!pri)
	}
	return(
		<header className={classes.header}>
			<div className="container" id={`${pri ? classes.active : classes.dnone}`}>
				<div className={`${classes.reseting} d-flex`}>
				<div className={classes.logo}>
					<img src={logo} />
				</div>
				<div className={classes.menu} >
					<MenuIcon onClick={meChange} />
					<ul>
						<li key="5"><Link to="/">Home</Link></li>
						<li key="6"><Link to="/about">About</Link></li>
						<li key="7"><Link to="/menu">Menu</Link></li>
						<li key="8"><Link to="/contact">Contact</Link></li>
					</ul>
	 			</div>
			</div> 
			</div>
		</header>
		)
}
export default Home

