import React, { Component } from 'react';
import InboxView from './InboxView';
import { connect } from 'react-redux';

class InboxContainer extends Component {
  static navigationOptions = {
    title: 'Inbox'
  }
  
  constructor(props) {
    super(props);
  }

  render() {
    return <InboxView {...this.props} />;
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
)(InboxContainer);
