import React, { Component } from 'react';
import HomeView from './HomeView';
import { connect } from 'react-redux';

class HomeContainer extends Component {
  static navigationOptions = {
    title: 'Title'
  }
  
  constructor(props) {
    super(props);
  }

  render() {
    return <HomeView {...this.props} />;
  }
}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
