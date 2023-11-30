import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MeluItem from '../components/Menu'
import classes from '../assets/css/menu.module.css'

import {List} from "../helpers/itemList"

function Menul(){
	return(
		<div>
			<Header />
			<div className={`container ${classes.menuPadd}`}>
				<div className="d-flex">
					{List.map((v,i)=>{
						return <MeluItem img={v.img} name={v.name} price={v.price}/>
					})}
				</div>
			</div>
			<Footer />
		</div>
		)
}
export default Menul