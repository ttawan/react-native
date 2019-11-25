import React, { Component } from 'react';
import PersonalizeView from './PersonalizeView';
import { connect } from 'react-redux';

class PersonalizeContainer extends Component {
  static navigationOptions = {
    title: 'Personalize'
  }
  
  constructor(props) {
    super(props);
  }

  render() {
    return <PersonalizeView {...this.props} />;
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
)(PersonalizeContainer);
