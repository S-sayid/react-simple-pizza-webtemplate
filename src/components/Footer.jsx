import React from 'react'
import logo from '../assets/img/logo.png';
import {Link} from 'react-router-dom'

import fclasses from '../assets/css/Footer.module.css'

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


function Footer(){
	let a = [1, 2, 3, 4]
	return(
		<div className={fclasses.foterMain}>
			<p>@copy; All writes reserved by: Sayid </p>
			<ul>
				<li key={a[1]}><a href='#'><FacebookIcon /></a></li>
				<li key={a[2]}><a href='#'><InstagramIcon /></a></li>
				<li key={a[3]}><a href='#'><TwitterIcon /></a></li>
				<li key={a[4]}><a href='#'><FacebookIcon /></a></li>
			</ul>
		</div>
		)
}
export default Footer
      