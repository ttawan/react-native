import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';
// import Header from 'app/components/Header';
class InboxView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView>
        <Text>Inbox</Text>
      </SafeAreaView>
    );
  }
}

export default InboxView;
