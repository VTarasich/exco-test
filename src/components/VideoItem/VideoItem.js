import React from 'react';

import { VideoSourceTypes } from '../../types/VideoSourceTypes';
import { numberToReadableText, secondsToTimeText } from '../../utils/utils';

import './VideoItem.css';

const isValidItem = ({ type, source, views }) => {
	return type && source && views;
};

const DateViews = ({ date, views }) => {
	const dateStr = new Date(date).toLocaleDateString("en-US", { year: 'numeric', month: 'short', day: 'numeric' });
	const readableViewsNumber = numberToReadableText(views);

	return (
		<div className="display-item__info">
			<p>{`${dateStr} - ${readableViewsNumber}`}</p>
		</div>
	);
};

const Duration = ({ duration }) => {
	const videoDuration = secondsToTimeText(duration);

	return (
		<div className="display-item__bottom-bar__duration">{videoDuration}</div>
	);
};

const Item = ({ itemData }) => {
	const videoSourceConfig = VideoSourceTypes.find(source => {
		return itemData.source && source.name === itemData.source;
	});

	return (
		<div className="display-item">
			{videoSourceConfig.getPlayer(itemData[videoSourceConfig.id])}
			<div className="display-item__details">
				<h2>{itemData.title || "Missing title"}</h2>
				<DateViews date={itemData.date} views={itemData.views}/>
				<div className="display-item__bottom-bar">
					<div>{videoSourceConfig.getIcon()}</div>
					{itemData.length && <Duration duration={itemData.length}/>}
				</div>
			</div>
		</div>
	);
};

const VideoItem = ({ itemData }) => isValidItem(itemData)
	? <Item itemData={itemData}/>
	: (
		<div className="display-item error-item">
			<div>VIDEO NOT AVAILABLE</div>
		</div>
	);

export default VideoItem;
