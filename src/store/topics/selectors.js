import lodash from 'lodash';

export const getTopicsByUrl = (state) =>  state.topics.topicsByUrl;

export const getTopicsUrlArray = (state) =>  lodash.keys(state.topics.topicsByUrl);