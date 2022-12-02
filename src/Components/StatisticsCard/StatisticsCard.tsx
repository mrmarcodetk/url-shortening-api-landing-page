import React from 'react';
import "./statistics-card-styles.css"
export interface StatisticsCardInterface {
	title: String;
	content: String;
	image: String;
	applyMargin?: boolean;
	alignPosition: String;
}

const StatisticsCard: React.FC<StatisticsCardInterface> = ({ title, content, image, applyMargin = false, alignPosition }) => {
	return (
		<div className={`advanced-statistics__card ${applyMargin ? 'applyMargin' : ''} ${alignPosition}`}>
			<figure className="advanced-statistics__image">
				<img src={`${image}`}></img>
			</figure>
			<div className="advanced-statistics__information-container">
				<span className="advanced-statistics__title">{title}</span>
				<p className="advanced-statistics__content">{content}</p>
			</div>
		</div>
	);
};

export default StatisticsCard;
