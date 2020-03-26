import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';

import {
  createSwitchNavigator,
  createAppContainer,
  createStackNavigator
} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer'
import Login from './app/components/login';
import Profile from './app/components/profile';
import Settings from './app/components/settings';
import Welcome from './app/components/welcome';
import Register from './app/components/register';
import TermsOfUse from './app/components/termsOfUse';


class App extends Component {
  render() {
    return <AppContainer />;
  }
}
export default App;


const AppDrawerNavigator = createDrawerNavigator({
  Profile,
  Settings
})
const AppSwitchNavigator = createSwitchNavigator({
  Welcome: { screen: Welcome },
  Login: { screen: Login},
  Register: { screen: Register },
  TermsOfUse: { screen: TermsOfUse },
  Dashboard: { screen: AppDrawerNavigator }
});

const AppContainer = createAppContainer(AppSwitchNavigator);



