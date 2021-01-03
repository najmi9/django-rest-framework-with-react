import React, { useEffect } from 'react';
import '../styles/navbar.css';


const Navbar = () => {
    const handleClick = e =>{
    	let opened = false;
    	e.stopPropagation();
    	e.preventDefault();
    	document.body.classList.add('has-sidebar');
    	opened = true;
    	document.body.addEventListener('click', () => {
			if (opened) {
				document.body.classList.remove('has-sidebar');
			}
			opened = false;
		});
    }

    	
	useEffect(() => {
		
	}, [])

	return(
		<div>

			<button onClick={handleClick} id="btn-menu"><i className="fas fa-bars"> navbar</i></button>

			<div id="navbar">
			  <ul>
			  		<li> Home </li>
			  		<li> contact </li>
			  		<li> infos </li>
			  		<li> works </li>
			  </ul>
			</div>
		</div>
	);

}

export default Navbar;