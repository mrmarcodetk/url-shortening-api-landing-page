import BgShortenDesktop from '@/assets/images/bg-shorten-desktop.svg';
import BgShortenMobile from '@/assets/images/bg-shorten-mobile.svg';
import React from 'react';
import { ButtonSimple } from '@/Components';
import './shorten-search-styles.css';
import useScreenSizing from '../../Hooks/useScreenSizing'
export interface ShortenSearchInterface { }

const ShortenSearch: React.FC<ShortenSearchInterface> = () => {
	const { screenWidth } = useScreenSizing()
	return (
		<article className='shorten__main'>
			<div className='shorten__search-container'>
				<div className='shorten__search-bar'>
					<input type="text" placeholder='Shorten a link here...' />
				</div>
				<ButtonSimple />
				<figure className='shorten__container-image'>
					<img src={screenWidth > 767 ? BgShortenDesktop : BgShortenMobile} alt='BgShortenDesktop' />
				</figure>
			</div>
		</article>
	);
};

export default ShortenSearch;
