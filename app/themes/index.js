import {darken} from 'polished';

const layouts = {
  paddingBase: 10,
};

const colors = {
  red: '#38b2ac',
  dark: '#2E3648',
  white: '#FFFFFF',
  gray: '#CCCCCC',
  black: '#000000',
  light: '#F7FAFC',
};

const themeColors = {
  primary: colors.red,
  secondary: colors.dark,
};

const themes = {
  ...themeColors,
  ...layouts,
  ...colors,
  
  // Navigation
  activeTintColor: colors.white,
  inactiveTintColor: colors.gray,
  activeTintBackgroundColor: themeColors.primary,
  inactiveTintBackgroundColor: themeColors.primary,
  tabBarBackgroundColor: themeColors.primary,

  // Font size
  fontSizeBase: 14,
  fontSizeSmall: 12,
  fontSizeMedium: 16,

  // Font weight
  fontWeightLight: '300',
  fontWeightRegular: '400',
  fontWeightBold: '500',
};

export default themes;
