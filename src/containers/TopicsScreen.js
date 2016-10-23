import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { fetchTopics, selectTopic } from '../store/topics/actions';
import { getTopicsByUrl, getTopicsUrlArray, getSelectedUrls } from '../store/topics/selectors';

import ListView from '../components/ListView';
import ListRow from '../components/ListRow';

import './TopicsScreen.css';

class TopicsScreen extends Component {
	static propTypes = {
		topicsByUrl: PropTypes.object,
		topicsUrlArray: PropTypes.array,
		fetchTopics: PropTypes.func
	};
	
	componentDidMount() {
		this.props.fetchTopics();
	}
	
	renderLoading() {
		return <p>Loading</p>;
	}
	
	onRowClick(topicUrl) {
		this.props.selectTopic(topicUrl);
	}
	
	renderRow(topic, topicUrl) {
		const selected = this.props.selectedUrls.indexOf(topicUrl) >= 0;
		return (
			<ListRow
				onClickArg={topicUrl}
				onClick={this.onRowClick.bind(this)}
				selected={selected}>
				<h3>{topic.title}</h3>
				<p>{topic.description}</p>
			</ListRow>
		);
	}
	
	render() {
		if (!this.props.topicsByUrl) {
			return this.renderLoading();
		}
		
		return (
			<div className="topics-screen">
				<ListView
					rowsById={this.props.topicsByUrl}
					rowsIdArray={this.props.topicsUrlArray}
					renderRow={this.renderRow.bind(this)} />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	topicsByUrl: getTopicsByUrl(state),
	topicsUrlArray: getTopicsUrlArray(state),
	selectedUrls: getSelectedUrls(state)
});

const mapDispatchToProps = dispatch => ({
	fetchTopics: () => dispatch(fetchTopics()),
	selectTopic: topicUrl => dispatch(selectTopic(topicUrl))
});

export default connect(mapStateToProps, mapDispatchToProps)(TopicsScreen);