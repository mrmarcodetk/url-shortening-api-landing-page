import BgShortenDesktop from '@/assets/images/bg-shorten-desktop.svg';
import BgShortenMobile from '@/assets/images/bg-shorten-mobile.svg';
import React from 'react';
import { ButtonSimple, ShortenItemResult } from '@/Components';
import './shorten-search-styles.css';
import useScreenSizing from '../../Hooks/useScreenSizing'
export interface ShortenSearchInterface { }

const ShortenSearch: React.FC<ShortenSearchInterface> = () => {
	const { screenWidth } = useScreenSizing()
	return (
		<article className='shorter'>
			<div className='shorter__main'>
				<div className='shorten__main-container'>
					<div className='shorten__search-container'>
						<div className='shorten__search-bar'>
							<input type="text" placeholder='Shorten a link here...' />
						</div>
						<ButtonSimple nameButton="Shorten It!" />
						<figure className='shorten__container-image'>
							<img src={screenWidth > 767 ? BgShortenDesktop : BgShortenMobile} alt='BgShortenDesktop' />
						</figure>
					</div>
				</div>
			</div>
			<ShortenItemResult />
			<ShortenItemResult />
		</article>
	);
};

export default ShortenSearch;
