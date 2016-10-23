import Immutable from 'seamless-immutable';

import * as ACTIONS from '../action_types';

const initialState = Immutable({
	topicsByUrl: {},
	selectedTopicUrls: [],
	selectedUrls: []
});

const topicsFetched = (state, action) => {
	return state.merge({
		topicsByUrl: action.topicsByUrl
	});
};

const topicsSelected = (state, action) => {
	return state.merge({
		selectedUrls: action.selectedUrls
	});
};

const ACTION_MAP = {
	[ACTIONS.TOPICS_FETCHED]: topicsFetched,
	[ACTIONS.TOPICS_SELECTED]: topicsSelected
};

export default (state = initialState, action = {}) => {
	if (ACTION_MAP[action.type]) {
		state = ACTION_MAP[action.type](state, action);
	}
	return state;
};