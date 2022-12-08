import BgShortenDesktop from '@/assets/images/bg-shorten-desktop.svg';
import BgShortenMobile from '@/assets/images/bg-shorten-mobile.svg';
import { ButtonSimple, ShortenItemResult } from '@/Components';
import { getShorterLInkAction } from '@/Services/Actions/get-shorter-link.action';
import React, { useState } from 'react';
import useScreenSizing from '../../Hooks/useScreenSizing';
import './shorten-search-styles.css';
export interface ShortenSearchInterface { }

const ShortenSearch: React.FC<ShortenSearchInterface> = () => {
	const [searchData, setSearchData] = useState('')
	const [inputErrorEmpty, setInputErrorEmpty] = useState(false)
	const [inputErrorLink, setInputErrorLink] = useState(false)
	const [resultShortLink, setResultShortLink] = useState('')
	const [resultOriginalLink, setResultOriginalLink] = useState('')
	const { screenWidth } = useScreenSizing()
	const webRegex: RegExp =
		/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		let target = event.target.value;
		setSearchData(target)
	}

	const submitHandleChange = () => {
		if (searchData !== '') {
			let isTrueValidation = webRegex.test(searchData)
			if (isTrueValidation) {
				setInputErrorEmpty(false)
				setInputErrorLink(false)
				fetchShorterLink()
			}
			else {
				console.log('ERROR LINK')
				setInputErrorLink(true)
				setInputErrorEmpty(false)
			}
		}
		else {
			setInputErrorEmpty(true)
			setInputErrorLink(false)
		}
	}

	const fetchShorterLink = async () => {
		await getShorterLInkAction(searchData).then(({ data }) => {
			console.log("🚀 ~ file: ShortenSearch.tsx:47 ~ awaitgetShorterLInkAction ~ data", data)
			const { result } = data
			setResultShortLink(result.full_short_link)
			setResultOriginalLink(result.original_link)
		})
	}

	return (
		<article className='shorter'>
			<div className='shorter__main'>
				<div className='shorten__main-container'>
					<div className='shorten__search-container'>
						<div
							className={
								`shorten__search-bar 
							${inputErrorEmpty ? 'show-error-empty' : ''}
							${inputErrorLink ? 'show-error-link' : ''}`
							}>
							<input
								type="text"
								placeholder='Shorten a link here...'
								className={`shorten__input-search-validation`}
								onChange={handleChange} />
						</div>
						<ButtonSimple nameButton="Shorten It!" onClick={submitHandleChange} />
						<figure className='shorten__container-image'>
							<img src={screenWidth > 767 ? BgShortenDesktop : BgShortenMobile} alt='BgShortenDesktop' />
						</figure>
					</div>
				</div>
			</div>
			<ShortenItemResult
				shortLink={resultShortLink}
				originalLink={resultOriginalLink}
			/>
		</article>
	);
};

export default ShortenSearch;
