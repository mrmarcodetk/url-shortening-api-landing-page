import React from 'react';
import "./button-simple-styles.css";
export interface ButtonSimpleInterface {
	nameButton: String;
}

const ButtonSimple: React.FC<ButtonSimpleInterface> = ({ nameButton }) => {
	return (
		<button className='button-simple-wrapper'>
			<span className='button-simple-name' >{nameButton}</span >
		</ button >
	)
};

export default ButtonSimple;
