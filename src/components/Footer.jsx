import React from 'react'
import logo from '../assets/img/logo.png';
import {Link} from 'react-router-dom'

import fclasses from '../assets/css/Footer.module.css'

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

console.log(fclasses)
function Footer(){
	return(
		<div className={fclasses.foterMain}>
			<p>@copy; All writes reserved by: Sayid </p>
			<ul>
				<li><a href='#'><FacebookIcon /></a></li>
				<li><a href='#'><InstagramIcon /></a></li>
				<li><a href='#'><TwitterIcon /></a></li>
				<li><a href='#'><FacebookIcon /></a></li>
			</ul>
		</div>
		)
}
export default Footer

