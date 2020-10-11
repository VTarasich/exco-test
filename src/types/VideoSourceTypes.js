import React from 'react';
import { ReactComponent as PlaybuzzLogo } from '../assets/svg/playbuzz-icon.svg'
import { ReactComponent as FacebookLogo } from '../assets/svg/facebook-icon.svg'
import { ReactComponent as YoutubeLogo } from '../assets/svg/youtube-icon.svg'
import { ReactComponent as UrlLogo } from '../assets/svg/url-icon.svg'
import { ReactComponent as ExcoLogo } from '../assets/svg/32-favicon.svg'

export const VideoSourceTypes = [
	{
		name: "playbuzz",
		id: "videoId",
		getPlayer: (id) => {
			return <div className="playbuzz" data-id={id} data-show-share="false" data-show-info="false" data-comments="false"/>;
		},
		getIcon: () => {
			return <PlaybuzzLogo/>;
		},
	},
	{
		name: "ex.co",
		id: "itemId",
		getPlayer: (id) => {
			return <div className="playbuzz" data-id={id} data-show-share="false" data-show-info="false" data-comments="false"/>;
		},
		getIcon: () => {
			return <ExcoLogo/>;
		},
	},
	{
		name: "url",
		id: "url",
		getPlayer: (url) => {
			return (
				<div className="url-source">
					<iframe
						title="url"
						height="210"
						src={url}
					>
					</iframe>
				</div>
			);
		},
		getIcon: () => {
			return <UrlLogo/>;
		},
	},
	{
		name: "facebook",
		id: "videoId",
		getPlayer: (id) => {
			const src = `https://www.facebook.com/video/embed?video_id=${id}`;
			return (
				<div className="facebook-source">
					<iframe
						title="facebook"
						height="210"
						src={src}
					>
					</iframe>
				</div>
			);
		},
		getIcon: () => {
			return <FacebookLogo/>;
		},
	},
	{
		name: "youtube",
		id: "videoId",
		getPlayer: (id) => {
			const src = `https://www.youtube.com/embed/${id}`;
			return (
				<div className="youtube-source">
					<iframe
						height="210"
						title="youtube"
						src={src}>
					</iframe>
				</div>
			);
		},
		getIcon: () => {
			return <YoutubeLogo/>;
		},
	},
];
