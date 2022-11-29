import React from 'react';
import "./button-simple-styles.css";
export interface ButtonSimpleInterface { }

const ButtonSimple: React.FC<ButtonSimpleInterface> = () => {
	return (
		<button className='button-simple-wrapper'>
			<span className='button-simple-name' > Shorten It!</span >
		</ button >
	)
};

export default ButtonSimple;
