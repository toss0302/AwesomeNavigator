import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableOpacity,
  Navigator
} from 'react-native';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/FontAwesome';

import ViewContainer from '../components/ViewContainer';
import StatusBarBackground from '../components/StatusBarBackground';

const people = [
  {firstname: "jordan", lastName: "leight", roomNumber: 30},
  {firstname: "will", lastName: "piers", roomNumber: 14},
  {firstname: "berkeley", lastName: "wanner", roomNumber: 8},
];

export default class PeopleIndexScreen extends Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
    this.state = {
      peopleDataSource: ds.cloneWithRows(people)
    };
  }
  render() {
    return (
      <ViewContainer>
        <StatusBarBackground style={{backgroundColor: "mistyrose"}}/>
        <ListView
          style={{marginTop: 100}}
          initialListSize={10}
          dataSource={this.state.peopleDataSource}
          renderRow={(person) => { return this._renderPersonRow(person) }} />
        <Text style={{backgroundColor: "coral"}}>
          {'Hello from Inside ViewContainer'}
        </Text>
      </ViewContainer>
    );
  }

  _renderPersonRow(person) {
    console.count('rendering person', person.id);
    return (
      <TouchableOpacity
        style={styles.personRow}
        onPress={(event) => this._navigateToPersonShow(person)}>
        <Text style={styles.personName}>
          {`${_.capitalize(person.firstname)} ${_.capitalize(person.lastName)}`}
        </Text>
        <View style={{flex: 1}} />
        <Icon name="chevron-right" style={styles.personMoreIcon} />
        <Icon name="facebook" size={10} style={styles.personMoreIcon} />

      </TouchableOpacity>
    )
  };

  _navigateToPersonShow(person) {
    this.props.navigator.push({
      ident: "PersonShow",
      person: person,
      sceneConfig: Navigator.SceneConfigs.FloatFromBottom,
      defaultTransitionVelocity: 1.5,
    })
  };

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  personRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 50
  },
  personName: {
    marginLeft: 25
  },
  personMoreIcon: {
    color: "green",
    height: 10,
    width: 10,
    marginRight: 25
  }
});
