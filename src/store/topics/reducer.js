import Immutable from 'seamless-immutable';

const initialState = Immutable({
	topicsByUrl: {},
	selectedTopicUrls: []
});

export default (state = initialState, action = {}) => {
	return state;
};