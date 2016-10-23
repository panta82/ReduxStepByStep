import Immutable from 'seamless-immutable';

import * as ACTIONS from '../action_types';

const initialState = Immutable({
	topicsByUrl: {},
	selectedTopicUrls: []
});

const topicsFetched = (state, action) => {
	return state.merge({
		topicsByUrl: action.topicsByUrl
	});
};

const ACTION_MAP = {
	[ACTIONS.TOPICS_FETCHED]: topicsFetched
};

export default (state = initialState, action = {}) => {
	if (ACTION_MAP[action.type]) {
		state = ACTION_MAP[action.type](state, action);
	}
	return state;
};