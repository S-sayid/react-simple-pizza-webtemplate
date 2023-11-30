import React from 'react'
import PropTypes from 'prop-types'

import classes from '../assets/css/menu.module.css'
function MenuItem(props){
	return(
		
		 <div className={classes.sinItem}>
			<img src={props.img} />
			<a href="#">{props.name}</a>
			<p>{props.price}</p>
		</div>				
		)
}

MenuItem.propTypes={
	img: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired
}
export default MenuItem