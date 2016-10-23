import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { fetchTopics } from '../store/topics/actions';
import { getTopicsByUrl, getTopicsUrlArray } from '../store/topics/selectors';

import ListView from '../components/ListView';

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
	
	renderRow(row) {
		return (
			<div>
				<h3>{row.title}</h3>
				<p>{row.description}</p>
			</div>
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
					renderRow={this.renderRow} />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	topicsByUrl: getTopicsByUrl(state),
	topicsUrlArray: getTopicsUrlArray(state)
});

const mapDispatchToProps = dispatch => ({
	fetchTopics: () => dispatch(fetchTopics())
});

export default connect(mapStateToProps, mapDispatchToProps)(TopicsScreen);