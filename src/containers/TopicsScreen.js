import React, { Component } from 'react';
import { connect } from 'react-redux';
import './TopicsScreen.css';

class TopicsScreen extends Component {
	render() {
		return (
			<h2>Temp</h2>
		);
	}
}

const mapStateToProps = (state) => {};

export default connect(mapStateToProps)(TopicsScreen);