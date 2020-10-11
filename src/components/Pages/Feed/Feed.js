import React, { lazy, Suspense } from 'react';
import fetchFeed from '../../../api/feed';

const ItemsList = lazy(() => import('../../ItemsList/ItemsList'));

const Feed = () => {
	const [items, setItems] = React.useState([]);

	React.useEffect(() => {
		(async () => {
			const feed = await fetchFeed();

			setItems(feed.items);
		})();
	}, []);

	return (
		<Suspense fallback={'Loading..'}>
			<ItemsList items={items}/>
		</Suspense>
	)
};

export default Feed;
