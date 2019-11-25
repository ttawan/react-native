import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import styles from 'app/styles/tabBarStyle';
import Theme from 'app/themes/index';

const TabBar = ({
  renderIcon,
  getLabelText,
  onTabPress,
  onTabLongPress,
  getAccessibilityLabel,
  navigation,
}) => {
  const {routes, index: activeRouteIndex} = navigation.state;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        {routes.map((route, routeIndex) => {
          const isRouteActive = routeIndex === activeRouteIndex;
          const tintColor = isRouteActive ? Theme.activeTintColor : Theme.inactiveTintColor;
          const labelStyle = {
            color: tintColor,
            fontWeight: isRouteActive
              ? Theme.fontWeightBold
              : Theme.fontWeightLight,
            ...styles.label,
          };

          const buttonStyle = {
            backgroundColor: isRouteActive ? Theme.activeTintBackgroundColor : Theme.inactiveTintBackgroundColor,
            ...styles.button,
          };

          return (
            <TouchableOpacity
              key={routeIndex}
              style={buttonStyle}
              onPress={() => {
                onTabPress({route});
              }}
              onLongPress={() => {
                onTabLongPress({route});
              }}
              accessibilityLabel={getAccessibilityLabel({route})}>
              {renderIcon({route, focused: isRouteActive, tintColor})}
              <Text style={labelStyle}>{getLabelText({route})}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

TabBar.propTypes = {
  renderIcon: PropTypes.func,
  getLabelText: PropTypes.string,
  onTabPress: PropTypes.func,
  onTabLongPress: PropTypes.func,
  getAccessibilityLabel: PropTypes.string,
  navigation: PropTypes.object,
};

TabBar.defaultProps = {
  renderIcon: null,
  getLabelText: null,
  onTabPress: null,
  onTabLongPress: null,
  getAccessibilityLabel: null,
  navigation: null,
};

export default TabBar;
