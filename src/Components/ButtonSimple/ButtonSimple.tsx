import React from 'react';
import { MouseEventHandler } from 'react';
import "./button-simple-styles.css";
export interface ButtonSimpleInterface {
	nameButton: String;
	onClick: MouseEventHandler
}

const ButtonSimple: React.FC<ButtonSimpleInterface> = ({ nameButton, onClick }) => {
	return (
		<button className='button-simple-wrapper' onClick={onClick}>
			<span className='button-simple-name' >{nameButton}</span >
		</ button >
	)
};

export default ButtonSimple;
