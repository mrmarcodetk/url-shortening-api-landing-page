import React from 'react';
import { ButtonSimple } from '../ButtonSimple';
import "./shorten-item-result-styles.css"
export interface ShortenItemResultInterface {
	shortLink: string;
	originalLink: string;
}

const ShortenItemResult: React.FC<ShortenItemResultInterface> = ({ shortLink, originalLink }) => {
	return (
		<div className='shorten__item-result-container'>
			<span className='shorter__item-result-current-link'>{originalLink}</span>
			<span className='shorter__item-result-new-link'>{shortLink}</span>
			<ButtonSimple nameButton="Copy" onClick={() => { }} />
		</div>
	)
};

export default ShortenItemResult;
