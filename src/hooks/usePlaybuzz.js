import React from 'react';

export default () => {
	React.useEffect(() => {
		if (window.Playbuzz) {
			window.Playbuzz.render();
		} else {
			console.error('No Playbuzz SDK found');
		}
	}, []);
};
