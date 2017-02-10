import React, { Component } from 'react';
import {
  StyleSheet,
  Navigator,
  Text
} from 'react-native';
import PeopleIndexScreen from '../screens/PeopleIndexScreen';
import PersonShowScreen from '../screens/PersonShowScreen';

export default class AppNavigator extends Component {

  _renderScene(route, navigator) {
    var globalNavigatorProps = { navigator };

    switch (route.ident) {
      case "PeopleIndex":
        return (
          <PeopleIndexScreen
            {...globalNavigatorProps} />
        );
        break;
      case "PersonShow":
        return (
          <PersonShowScreen
            {...globalNavigatorProps}
            person={route.person} />
        );
        break;

      default:
        return (
          <Text>
            {`You MESSED SOMETHING UP ${route}`}
          </Text>
        );
    }
  }
  render() {
    return (
      <Navigator
        initialRoute={this.props.initialRoute}
        ref="appNavigator"
        style={styles.navigatorStyles}
        renderScene={this._renderScene}
        configureScene={(route) => ({
          ...route.sceneConfig || Navigator.SceneConfigs.FloatFromRight
        })}
      />
    );
  }
}

const styles = StyleSheet.create({
  navigatorStyles: {

  }
});
