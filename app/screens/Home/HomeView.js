import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';
// import Header from 'app/components/Header';
class HomeView extends Component {
  static navigationOptions = {
    title: 'Title'
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView>
        <Text>Home</Text>
      </SafeAreaView>
    );
  }
}

export default HomeView;
