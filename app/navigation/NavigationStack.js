import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Theme from 'themes/index';
import InboxScreen from 'app/screens/Inbox';
import HomeScreen from 'app/screens/Home';
import Personalize from 'app/screens/Personalize';

// Components
import TabBar from 'app/components/TabBar';

// Icons
import IconHome from 'app/assets/icons/home.svg';
import IconChat from 'app/assets/icons/chat-bubble-dots.svg';
import IconSearch from 'app/assets/icons/search.svg';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({focused}) => <IconHome width={24} height={24} fill={focused ? Theme.activeTintColor : Theme.inactiveTintColor} />, // eslint-disable-line
};

const InboxStack = createStackNavigator({
  Inbox: InboxScreen,
});

InboxStack.navigationOptions = {
  tabBarLabel: 'Chat',
  tabBarIcon: ({focused}) => <IconChat width={24} height={24} fill={focused ? Theme.activeTintColor : Theme.inactiveTintColor} />, // eslint-disable-line
};

const PersonalizeStack = createStackNavigator({
  Personalize: Personalize,
});

PersonalizeStack.navigationOptions = {
  tabBarLabel: 'Search',
  tabBarIcon: ({focused}) => <IconSearch width={24} height={24} fill={focused ? Theme.activeTintColor : Theme.inactiveTintColor} />, // eslint-disable-line
};

const NavigationTabs = createBottomTabNavigator({
  HomeStack,
  InboxStack,
  PersonalizeStack,
}, {
  tabBarComponent: TabBar,
});

export default createAppContainer(NavigationTabs);
