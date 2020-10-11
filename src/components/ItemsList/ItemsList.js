import React from 'react';

import { VideoSourceTypes } from '../../types/VideoSourceTypes';
import VideoItem from '../../components/VideoItem/VideoItem';
import ExcoItem from '../../components/ExcoItem/ExcoItem';

import './ItemsList.css';

const isVideo = (item) => VideoSourceTypes.find(source => source.name === item.source && item.type === 'video') !== undefined;

const ItemsList = ({ items }) => {
	return (
		<div className="items-list">
			<div className="item-list__header">
				<h1>Most viewed</h1>
			</div>
			<div className="items-list__content">
				{items.map((item, index) => isVideo(item)
					? <VideoItem key={item.itemId ? item.itemId : index} itemData={item}/>
					: <ExcoItem key={item.itemId ? item.itemId : index} itemData={item}/>,
				)}
			</div>
		</div>
	);
}

export default ItemsList;
