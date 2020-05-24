import React from 'react';

import './YouTubeVideo.scss';

export default ({ youtubeId }) => {
	return (
		<div className='youtube-video'>
			<iframe
				className='youtube-video__iframe'
                title={youtubeId}
				src={`https://www.youtube.com/embed/${youtubeId}`}
				frameBorder="0"
			/>
		</div>
	);
};
