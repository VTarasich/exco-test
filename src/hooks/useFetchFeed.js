import React from 'react';
import fetchFeed from '../api/feed';

const cacheItemsTimespan = 180000; // 3 min

export default () => {
	const [items, setItems] = React.useState([]);
	const lastFetchedTimestamp = React.useRef(0);

	React.useEffect(() => {
		console.log('>>>', 'WOWW', lastFetchedTimestamp.current);
		if (Date.now() - lastFetchedTimestamp.current > cacheItemsTimespan) {
			(async () => {
				const feed = await fetchFeed();
				lastFetchedTimestamp.current = Date.now();

				console.log('>>>', 'fetch', lastFetchedTimestamp.current);

				setItems(feed.items);
			})();
		}
	}, []);

	return { items };
};
