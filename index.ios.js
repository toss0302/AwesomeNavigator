/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TabBarIOS
} from 'react-native';
import AppNavigator from './app/navigation/AppNavigator';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class first extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "tab1"
    };
  }

  render() {
    return (
      <TabBarIOS
        selectedTab={this.state.selectedTab}>
        <Icon.TabBarItemIOS
          selected={this.state.selectedTab === "tab1"}
          title={'TAB 1'}
          iconName="user"
          onPress={() => this.setState({selectedTab: "tab1"})}>
          <AppNavigator
            initialRoute={{ident: "PeopleIndex"}}
          />
        </Icon.TabBarItemIOS>

        <TabBarIOS.Item
          selected={this.state.selectedTab === "tab2"}
          title={'TAB 2'}
          onPress={() => this.setState({selectedTab: "tab2"})}>
          <AppNavigator
            initialRoute={{
              ident: "PersonShow",
              person: {firstname: "jordan", lastName: "leight", roomNumber: 30}
            }}
          />
        </TabBarIOS.Item>

      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  navigatorStyles: {

  }
});

AppRegistry.registerComponent('first', () => first);
