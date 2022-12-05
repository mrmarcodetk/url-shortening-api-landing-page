import BgShortenDesktop from '@/assets/images/bg-shorten-desktop.svg';
import BgShortenMobile from '@/assets/images/bg-shorten-mobile.svg';
import React, { useEffect, useState } from 'react';
import { ButtonSimple, ShortenItemResult } from '@/Components';
import './shorten-search-styles.css';
import useScreenSizing from '../../Hooks/useScreenSizing'
import { getShorterLInkAction } from '@/Services/Actions/get-shorter-link.action';
export interface ShortenSearchInterface { }

const ShortenSearch: React.FC<ShortenSearchInterface> = () => {
	// const [link, setLInk] = useState()
	const [searchData, setSearchData] = useState<string>()
	const { screenWidth } = useScreenSizing()

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		let target = event.target.value;
		setSearchData(target)
	}

	const submitHandleChange = () => {
		const completeWebValidation: RegExp = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/
		console.log(completeWebValidation.test(searchData as string))
		// if (!!searchData && !!webValidation) {
		// }
	}

	const fetchShorterLink = async () => {
		await getShorterLInkAction(searchData as String).then(({ data }) => console.log(data))
	}

	return (
		<article className='shorter'>
			<div className='shorter__main'>
				<div className='shorten__main-container'>
					<div className='shorten__search-container'>
						<div className='shorten__search-bar'>
							<input type="text" placeholder='Shorten a link here...' onChange={handleChange} />
						</div>
						<ButtonSimple nameButton="Shorten It!" onClick={submitHandleChange} />
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
