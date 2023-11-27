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
						<li><Link to="/">Home</Link></li>
						<li><Link to="/menu">menu</Link></li>
						<li><Link to="/#">Faq</Link></li>
						<li><Link to="/contact">Contact</Link></li>
					</ul>
	 			</div>
			</div> 
			</div>
		</header>
		)
}
export default Home

