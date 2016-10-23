import lodash from 'lodash';
import * as TYPES from '../action_types';
import { reddit } from '../../services';

export const fetchTopics = () => (dispatch, getState) => {
	reddit.getDefaultSubreddits()
		.then(subreddits => {
			const topicsByUrl = lodash.keyBy(subreddits, s => s.url);
			dispatch({ type: TYPES.TOPICS_FETCHED, topicsByUrl });
		})
		.catch(err => {
			console.error(err);
		});
};
