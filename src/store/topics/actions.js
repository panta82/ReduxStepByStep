import lodash from 'lodash';
import * as TYPES from '../action_types';
import { reddit } from '../../services';
import { getSelectedUrls } from './selectors';

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

export const selectTopic = (topicUrl) => (dispatch, getState) => {
	const selected = getSelectedUrls(getState());
	if (lodash.indexOf(selected, topicUrl) >= 0) {
		// Already selected, nothing to do
		return;
	}
	
	const newSelected = selected.length < 3
		? selected.concat(topicUrl)
		: selected.slice(1).concat(topicUrl);
	dispatch({
		type: TYPES.TOPICS_SELECTED,
		selectedUrls: newSelected
	});
};
