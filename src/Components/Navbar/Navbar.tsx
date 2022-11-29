// import IconMenu from '@/assets/images/icon-menu.svg';
import LogoImage from '@/assets/images/logo.svg';
import { ButtonCircle, ButtonHamburger } from '@/Components';
import React, { useState } from 'react';
import "./navbar-styles.css";
export interface NavbarInterface { }

const Navbar: React.FC<NavbarInterface> = () => {
	const [showMenuMobile, setShowMenuMobile] = useState(false)
	const handleShowMenu = () => {
		setShowMenuMobile(!showMenuMobile)
	}

	return (
		<header className='header__container'>
			<div className='header__logo-container'>
				<figure className='header__logo-img'>
					<img src={LogoImage} alt="Logo page home" />
				</figure>
			</div>
			<nav className={`navbar__menu ${!!showMenuMobile && 'active'}`}>
				<ul className='navbar__list-item'>
					<li><a href="#">Features</a></li>
					<li><a href="#">Pricing</a></li>
					<li><a href="#">Resource</a></li>
				</ul>
				<div className='navbar__authentication-container'>
					<ButtonCircle name='Login' handleClick={() => { }} backgroundColor={false} />
					<ButtonCircle name='Sign Up' handleClick={() => { }} />
				</div>
			</nav>
			<ButtonHamburger onClick={handleShowMenu} open={showMenuMobile} />
		</header>
	);
};

export default Navbar;
