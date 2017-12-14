import React from 'react';
import { StackNavigator } from "react-navigation";

import FirstScreen from './screens/first/FirstScreen';

const MainContainer = StackNavigator({
  first: {
    screen: FirstScreen,
    navigationOptions: {
      header: null
    }
  }
}, {
  headerMode: 'screen'
});

const AppNavigation = StackNavigator({
  MainContainer: {
    screen: MainContainer
  }
});

export default AppNavigation;