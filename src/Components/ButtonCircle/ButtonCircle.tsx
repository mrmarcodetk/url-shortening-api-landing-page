import React from 'react';
import "./button-circle-styles.css"
export interface ButtonCircleInterface {
	name: string;
	handleClick: () => void;
	backgroundColor?: boolean;
}

const ButtonCircle: React.FC<ButtonCircleInterface> = ({ name, handleClick, backgroundColor = true }) => {

	return < button className={`button-circle-wrapper ${backgroundColor ? "" : "white"}`} onClick={handleClick} >
		<span className='button-circle-name' > {name}</span >
	</ button >
};

export default ButtonCircle;
