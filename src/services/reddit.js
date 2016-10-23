import lodash from 'lodash';

import { get } from './fetch';

const REDDIT_ENDPOINT = 'https://www.reddit.com';

class RedditService {
	getDefaultSubreddits() {
		const url = `${REDDIT_ENDPOINT}/subreddits/default.json`;
		return get(url)
			.then(response => {
				if (!response.ok) {
					throw new Error(`getDefaultSubreddits failed, status: ${response.status}`, response);
				}
				return response.json();
			})
			.then(data => {
				const children = lodash.get(data, 'data.children');
				if (!children) {
					throw new Error('Children not returned');
				}
				
				return lodash.map(children, subreddit => ({
					title: lodash.get(subreddit, 'data.display_name'),
					description: lodash.get(subreddit, 'data.public_description'),
					url: lodash.get(subreddit, 'data.url')
				}));
			});
	}
}

export default RedditService;