import React from 'react';
import { ButtonSimple } from '../ButtonSimple';
import "./shorten-item-result-styles.css"
export interface ShortenItemResultInterface { }

const ShortenItemResult: React.FC<ShortenItemResultInterface> = () => {
	return (
		<div className='shorten__item-result-container'>
			<span className='shorter__item-result-current-link'>https://www.frontendmentor.io</span>
			<span className='shorter__item-result-new-link'>https://www.reLink/k4KyK</span>
			<ButtonSimple nameButton="Copy" />
		</div>
	)
};

export default ShortenItemResult;
